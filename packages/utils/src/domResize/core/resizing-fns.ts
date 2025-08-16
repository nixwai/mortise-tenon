import type { DomResizeOptions, ResizeDistance } from '../types';
import type { Dir, DomAttrs } from './dom-attrs';
import type { Axis, ResizingFn } from './index';

interface DirectionParams {
  /** 原始值 */
  originValue: number
  /** 原始位置 */
  originOffset: number
  /** 最小值 */
  minValue: number
  /** 最大调整距离 */
  maxDistance: number
  /** 最小调整距离 */
  minDistance: number
  /** 网格的移动距离 */
  gridDistance: number
}

type GetOffsetFn = (distance: number, axis: Axis, dir: 1 | -1) => { offsetPositive: number, offsetNegative: number };

const DEFAULT_GRID = 0.5;

function createResizingOffset(
  hasOffset: boolean,
  createFn: () => GetOffsetFn,
) {
  return hasOffset ? createFn() : () => ({ offsetPositive: 0, offsetNegative: 0 });
}

export function createResizingFns(options: DomResizeOptions, domAttrs: DomAttrs) {
  const { width, height, aspectRatio, offsetX, offsetY, transform, maxWidth, minWidth, maxHeight, minHeight } = domAttrs;
  /** 是否需要调整偏移值 */
  const needOffset = Boolean(options.offset);

  const direction = options.direction || 'all';
  const hasLeft = direction.includes('left');
  const hasRight = direction.includes('right');
  const hasTop = direction.includes('top');
  const hasBottom = direction.includes('bottom');
  /** 记录每次的位移距离 */
  const moveDistance: ResizeDistance = {
    x: 0,
    y: 0,
    dirX: hasLeft === hasRight ? 0 : (hasRight ? 1 : -1),
    dirY: hasTop === hasBottom ? 0 : (hasBottom ? 1 : -1),
  };
  /** 上一次的位移距离 */
  const lastDistance: Pick<ResizeDistance, 'x' | 'y'> = { x: width, y: height };
  // 记录移动距离
  const logDistance = (value: number, axis: Axis) => {
    moveDistance[axis] = value - lastDistance[axis];
    lastDistance[axis] = value;
  };

  // 固定的移动距离，两边都移动时需要*2
  let gridX = (options.grid?.[0] || DEFAULT_GRID) * (moveDistance.dirX ? 1 : 2);
  let gridY = (options.grid?.[1] || DEFAULT_GRID) * (moveDistance.dirY ? 1 : 2);
  if (options.lockAspectRatio) {
    // 锁定宽高比时，固定的移动距离也会变化
    if (options.event || options.distanceX) {
      gridY = gridX / aspectRatio;
    }
    else {
      gridX = gridY * aspectRatio;
    }
  }

  /** 元素的纵横轴参数 */
  const domAxisParams: { x: DirectionParams, y: DirectionParams } = {
    x: {
      originValue: width,
      originOffset: offsetX,
      minValue: width - Math.floor((width - minWidth) / gridX) * gridX,
      maxDistance: Math.floor((maxWidth - width) / gridX) * gridX,
      minDistance: Math.ceil((minWidth - width) / gridX) * gridX,
      gridDistance: gridX,
    },
    y: {
      originValue: height,
      originOffset: offsetY,
      minValue: height - Math.floor((height - minHeight) / gridY) * gridY,
      maxDistance: Math.floor((maxHeight - height) / gridY) * gridY,
      minDistance: Math.ceil((minHeight - height) / gridY) * gridY,
      gridDistance: gridY,
    },
  };

  /** 获取移动距离 */
  let getMoveDistance: (startLocation: number, endLocation: number, axis: Axis, dir: Dir) => number;
  if (options.crossAxis) {
    const minCrossDis = {
      x: 2 * domAxisParams.x.minValue,
      y: 2 * domAxisParams.y.minValue,
    };
    const maxCrossDis = {
      x: Math.floor((maxWidth + width) / gridX) * gridX,
      y: Math.floor((maxWidth + height) / gridY) * gridY,
    };
    getMoveDistance = (startLocation: number, endLocation: number, axis: Axis, dir: Dir) => {
      const { maxDistance, minDistance, gridDistance } = domAxisParams[axis];
      const distance = Math.round((endLocation - startLocation) / gridDistance) * gridDistance;
      const dis = distance * dir;
      if (dis < minDistance) {
        let targetDis = distance - dir * minCrossDis[axis];
        if (-dir * targetDis > maxCrossDis[axis]) {
          targetDis = -dir * maxCrossDis[axis];
        }
        return targetDis;
      }
      if (dis > maxDistance) { return maxDistance * dir; }
      return distance;
    };
  }
  else {
    getMoveDistance = (startLocation: number, endLocation: number, axis: Axis, dir: Dir) => {
      const { maxDistance, minDistance, gridDistance } = domAxisParams[axis];
      const distance = Math.round((endLocation - startLocation) / gridDistance) * gridDistance;
      const dis = distance * dir;
      if (dis < minDistance) { return minDistance * dir; }
      if (dis > maxDistance) { return maxDistance * dir; }
      return distance;
    };
  }

  const setValueAndOffset = needOffset
    ? (value: number, _minValue: number, offsetPositive: number, offsetNegative: number) => {
        return value > 0 ? { value, offset: offsetPositive } : { value: -value, offset: offsetNegative };
      }
    : (value: number, minValue: number) => ({ value: value > minValue ? value : minValue, offset: 0 });

  const rad = transform.rotate * Math.PI / 180;
  const cosRad = Math.cos(rad);
  /** 横轴变化点的位置 */
  const originXP = transform.originX / width;
  /** 纵轴变化点位置 */
  const originYP = transform.originY / height;
  /** 缩放增值 */
  const scaleAxisMultiple = {
    x: {
      v1: (transform.scaleX - 1) * originXP,
      v2: (transform.scaleX - 1) * (1 - originXP),
    },
    y: {
      v1: (transform.scaleY - 1) * originYP,
      v2: (transform.scaleY - 1) * (1 - originYP),
    },
  };
  /** 旋转增值 */
  const rotateAxisMultiple = {
    x: {
      v1: transform.scaleX * (cosRad - 1) * originXP,
      v2: transform.scaleX * (cosRad - 1) * (1 - originXP),
    },
    y: {
      v1: transform.scaleY * (cosRad - 1) * originYP,
      v2: transform.scaleY * (cosRad - 1) * (1 - originYP),
    },
  };
  const negativeAxiosOffset = {
    x: {
      origin: offsetX + width + width * (transform.scaleX * cosRad - 1) * (1 - 2 * originXP),
      min: minWidth * transform.scaleX * cosRad,
    },
    y: {
      origin: offsetY + height + height * (transform.scaleY * cosRad - 1) * (1 - 2 * originYP),
      min: minHeight * transform.scaleY * cosRad,
    },
  };

  /** 获取向前调整的位移 */
  const getForwardMoveOffset = createResizingOffset(needOffset, () => {
    const otherNegativeValue = {
      x: negativeAxiosOffset.x.origin + negativeAxiosOffset.x.min,
      y: negativeAxiosOffset.y.origin + negativeAxiosOffset.y.min,
    };
    return (distance, axis) => {
      const { originOffset } = domAxisParams[axis];
      const scalePositiveOffset = distance * scaleAxisMultiple[axis].v1;
      const scaleNegativeOffset = distance * scaleAxisMultiple[axis].v2;
      const rotatePositiveOffset = distance * rotateAxisMultiple[axis].v1;
      const rotateNegativeOffset = distance * rotateAxisMultiple[axis].v2;
      return {
        offsetPositive: originOffset + scalePositiveOffset + rotatePositiveOffset,
        offsetNegative: otherNegativeValue[axis] + distance + scaleNegativeOffset + rotateNegativeOffset,
      };
    };
  });

  /** 获取向后调整的位移 */
  const getBackwardMoveOffset = createResizingOffset(needOffset, () => {
    const otherNegativeValue = {
      x: negativeAxiosOffset.x.origin - negativeAxiosOffset.x.min,
      y: negativeAxiosOffset.y.origin - negativeAxiosOffset.y.min,
    };
    return (distance, axis) => {
      const { originOffset } = domAxisParams[axis];
      const scalePositiveOffset = distance * scaleAxisMultiple[axis].v2;
      const scaleNegativeOffset = distance * scaleAxisMultiple[axis].v1;
      const rotatePositiveOffset = distance * rotateAxisMultiple[axis].v2;
      const rotateNegativeOffset = distance * rotateAxisMultiple[axis].v1;
      return {
        offsetPositive: originOffset + distance + scalePositiveOffset + rotatePositiveOffset,
        offsetNegative: otherNegativeValue[axis] + scaleNegativeOffset + rotateNegativeOffset,
      };
    };
  });

  /** 获取前后调整的位移 */
  const getBothMoveOffset = createResizingOffset(needOffset, () => {
    const scaleMultiple = {
      x: (transform.scaleX - 1) * (originXP - 0.5),
      y: (transform.scaleY - 1) * (originYP - 0.5),
    };
    const rotateMultiple = {
      x: transform.scaleX * (cosRad - 1) * (originXP - 0.5),
      y: transform.scaleY * (cosRad - 1) * (originYP - 0.5),
    };
    const otherNegativeValue = {
      x: offsetX + width - 2 * width * (transform.scaleX * cosRad - 1) * (originXP - 0.5),
      y: offsetY + height - 2 * height * (transform.scaleY * cosRad - 1) * (originYP - 0.5),
    };
    return (distance, axis, dir) => {
      const { originOffset } = domAxisParams[axis];
      const distanceHalf = dir * distance / 2;
      const scaleOffset = dir * distance * scaleMultiple[axis];
      const rotateOffset = dir * distance * rotateMultiple[axis];
      return {
        offsetPositive: originOffset - distanceHalf + scaleOffset + rotateOffset,
        offsetNegative: otherNegativeValue[axis] + distanceHalf - scaleOffset - rotateOffset,
      };
    };
  });

  /** 向前调整（往右或者往下）长度与位移 */
  const resizingForward: ResizingFn = (startLocation, endLocation, axis) => {
    const { originValue, minValue } = domAxisParams[axis];
    const distance = getMoveDistance(startLocation, endLocation, axis, 1);
    const value = originValue + distance;
    const { offsetPositive, offsetNegative } = getForwardMoveOffset(distance, axis, 1);
    const data = setValueAndOffset(value, minValue, offsetPositive, offsetNegative);
    logDistance(data.value, axis);
    return data;
  };
  /** 向后调整（往左或者往上）长度与位移 */
  const resizingBackward: ResizingFn = (startLocation, endLocation, axis) => {
    const { originValue, minValue } = domAxisParams[axis];
    const distance = getMoveDistance(startLocation, endLocation, axis, -1);
    const value = originValue - distance;
    const { offsetPositive, offsetNegative } = getBackwardMoveOffset(distance, axis, -1);
    const data = setValueAndOffset(value, minValue, offsetPositive, offsetNegative);
    logDistance(data.value, axis);
    return data;
  };
  /** 前后一起调整(上下或者左右)长度与位移 */
  const resizingBoth: ResizingFn = (startLocation, endLocation, axis, pointerDir = 1) => {
    const { originValue, minValue } = domAxisParams[axis];
    // 两边一起调整时需要对数据翻倍
    const distance = getMoveDistance(2 * startLocation, 2 * endLocation, axis, pointerDir);
    const value = originValue + pointerDir * distance;
    const { offsetPositive, offsetNegative } = getBothMoveOffset(distance, axis, pointerDir);
    const data = setValueAndOffset(value, minValue, offsetPositive, offsetNegative);
    logDistance(data.value, axis);
    return data;
  };

  return { moveDistance, resizingForward, resizingBackward, resizingBoth };
}
