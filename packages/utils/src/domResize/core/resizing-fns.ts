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
  /** 放大倍数 */
  scale: number
  /** 变形原点 */
  transformOrigin: number
}

const DEFAULT_GRID = 0.5;

export function createResizingFns(options: DomResizeOptions, domAttrs: DomAttrs) {
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
  const lastDistance: Pick<ResizeDistance, 'x' | 'y'> = { x: domAttrs.width, y: domAttrs.height };
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
      gridY = gridX / domAttrs.aspectRatio;
    }
    else {
      gridX = gridY * domAttrs.aspectRatio;
    }
  }

  /** 元素的纵横轴参数 */
  const domAxisParams: { x: DirectionParams, y: DirectionParams } = {
    x: {
      originValue: domAttrs.width,
      originOffset: domAttrs.offsetX,
      minValue: domAttrs.width - Math.floor((domAttrs.width - domAttrs.minWidth) / gridX) * gridX,
      maxDistance: Math.floor((domAttrs.maxWidth - domAttrs.width) / gridX) * gridX,
      minDistance: Math.ceil((domAttrs.minWidth - domAttrs.width) / gridX) * gridX,
      gridDistance: gridX,
      scale: domAttrs.transform.scaleX,
      transformOrigin: domAttrs.transform.originX,
    },
    y: {
      originValue: domAttrs.height,
      originOffset: domAttrs.offsetY,
      minValue: domAttrs.height - Math.floor((domAttrs.height - domAttrs.minHeight) / gridY) * gridY,
      maxDistance: Math.floor((domAttrs.maxHeight - domAttrs.height) / gridY) * gridY,
      minDistance: Math.ceil((domAttrs.minHeight - domAttrs.height) / gridY) * gridY,
      gridDistance: gridY,
      scale: domAttrs.transform.scaleY,
      transformOrigin: domAttrs.transform.originY,
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
      x: Math.floor((domAttrs.maxWidth + domAttrs.width) / gridX) * gridX,
      y: Math.floor((domAttrs.maxWidth + domAttrs.height) / gridY) * gridY,
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

  const getValueAndOffset = needOffset
    ? (value: number, _minValue: number, offsetForward: number, offsetBackward: number) => {
        return value > 0 ? { value, offset: offsetForward } : { value: -value, offset: offsetBackward };
      }
    : (value: number, minValue: number) => ({ value: value > minValue ? value : minValue, offset: 0 });

  /** 获取向前调整的位移 */
  const getForwardMoveOffset = createResizingOffset(needOffset, () => {
    const scaleOffsetMultiple = {
      x: (domAttrs.transform.scaleX - 1) * (domAttrs.transform.originX) / domAttrs.width,
      y: (domAttrs.transform.scaleY - 1) * (domAttrs.transform.originY) / domAttrs.height,
    };
    return (distance, axis) => {
      const { originValue, originOffset, minValue, scale } = domAxisParams[axis];
      const scaleOffset = distance * scaleOffsetMultiple[axis]; // 因为缩放比例产生的位移
      return {
        offsetForward: originOffset + scaleOffset,
        offsetBackward: originOffset + originValue + distance + scaleOffset + minValue * scale,
      };
    };
  });
  /** 向前调整（往右或者往下）长度与位移 */
  const resizingForward: ResizingFn = (startLocation, endLocation, axis) => {
    const { originValue, minValue } = domAxisParams[axis];
    const distance = getMoveDistance(startLocation, endLocation, axis, 1);
    const value = originValue + distance;
    const { offsetForward, offsetBackward } = getForwardMoveOffset(distance, axis, 1);
    const data = getValueAndOffset(value, minValue, offsetForward, offsetBackward);
    logDistance(data.value, axis);
    return data;
  };

  /** 获取向后调整的位移 */
  const getBackwardMoveOffset = createResizingOffset(needOffset, () => {
    const scaleOffsetMultiple = {
      x: (domAttrs.transform.scaleX - 1) * (domAttrs.width - domAttrs.transform.originX) / domAttrs.width,
      y: (domAttrs.transform.scaleY - 1) * (domAttrs.height - domAttrs.transform.originY) / domAttrs.height,
    };
    return (distance, axis) => {
      const { originValue, originOffset, minValue, scale } = domAxisParams[axis];
      const scaleOffset = distance * scaleOffsetMultiple[axis]; // 因为缩放比例产生的位移
      return {
        offsetForward: originOffset + distance + scaleOffset,
        offsetBackward: originOffset + originValue + scaleOffset - minValue * scale,
      };
    };
  });

  /** 向后调整（往左或者往上）长度与位移 */
  const resizingBackward: ResizingFn = (startLocation, endLocation, axis) => {
    const { originValue, minValue } = domAxisParams[axis];
    const distance = getMoveDistance(startLocation, endLocation, axis, -1);
    const value = originValue - distance;
    const { offsetForward, offsetBackward } = getBackwardMoveOffset(distance, axis, -1);
    const data = getValueAndOffset(value, minValue, offsetForward, offsetBackward);
    logDistance(data.value, axis);
    return data;
  };

  /** 获取前后调整的位移 */
  const getBothMoveOffset = createResizingOffset(needOffset, () => {
    const scaleOffsetMultiple = {
      x: (domAttrs.transform.scaleX - 1) * (domAttrs.width - domAttrs.transform.originX * 2) / (domAttrs.width * 2),
      y: (domAttrs.transform.scaleY - 1) * (domAttrs.height - domAttrs.transform.originY * 2) / (domAttrs.height * 2),
    };
    return (distance, axis, dir) => {
      const { originValue, originOffset } = domAxisParams[axis];
      const distanceHalf = dir * distance / 2;
      const scaleOffset = distance * scaleOffsetMultiple[axis]; // 因为缩放比例产生的位移
      return {
        offsetForward: originOffset - distanceHalf + scaleOffset,
        offsetBackward: originOffset + originValue + distanceHalf + scaleOffset,
      };
    };
  });
  /** 前后一起调整(上下或者左右)长度与位移 */
  const resizingBoth: ResizingFn = (startLocation, endLocation, axis, pointerDir = 1) => {
    const { originValue, minValue } = domAxisParams[axis];
    // 两边一起调整时需要对数据翻倍
    const distance = getMoveDistance(2 * startLocation, 2 * endLocation, axis, pointerDir);
    const value = originValue + pointerDir * distance;
    const { offsetForward, offsetBackward } = getBothMoveOffset(distance, axis, pointerDir);
    const data = getValueAndOffset(value, minValue, offsetForward, offsetBackward);
    logDistance(data.value, axis);
    return data;
  };

  return { moveDistance, resizingForward, resizingBackward, resizingBoth };
}

function createResizingOffset(
  hasOffset: boolean,
  createFn: () => (distance: number, axis: Axis, dir: 1 | -1) => { offsetForward: number, offsetBackward: number },
) {
  if (!hasOffset) {
    return () => ({ offsetForward: 0, offsetBackward: 0 });
  }
  return createFn();
}
