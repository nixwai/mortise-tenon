import type { Dir, DomAttrs, SetStyleOffset, SetStyleWidthOrHeightFn } from './helper';
import type { DomResizeOptions, ResizeDistance, ResizeStatus } from './types';
import { createStyleUpdaters, getResizeDomAttrs } from './helper';

export type Axis = 'x' | 'y';

/**
 * 调节函数
 * @param startLocation 开始的坐标
 * @param endLocation 结束的坐标
 * @param axis 坐标
 * @param pointerDir 鼠标点击的方向
 */
export type ResizingFn =
  (startLocation: number, endLocation: number, axis: Axis, pointerDir?: Dir) => { value: number, offset: number };

export type ResizeData = Readonly<{
  /** 元素弱引用类型 */
  targetRef: WeakRef<HTMLDivElement>
  /** 传入的配置项 */
  options: Readonly<DomResizeOptions>
  /** 元素的属性信息 */
  domAttrs: Readonly<DomAttrs>
  /** 记录每次更新的位移距离 */
  moveDistance: ResizeDistance
  /** 设置宽度或高度 */
  setStyleWidthOrHeight: SetStyleWidthOrHeightFn
  /** 设置位移 */
  setStyleOffset: SetStyleOffset
  /** 向前调整（往右或者往下）后长度值与位移值 */
  resizingForward: ResizingFn
  /** 向后调整（往左或者往上）后长度值与位移值 */
  resizingBackward: ResizingFn
  /** 前后一起调整 */
  resizingBoth: ResizingFn
}>;

/** 初始化调整操作功能 */
export function initResize(options: DomResizeOptions): ResizeData {
  const targetRef = new WeakRef(options.target!);
  const domAttrs = getResizeDomAttrs(options, targetRef.deref());
  const { setStyleWidthOrHeight, setStyleOffset } = createStyleUpdaters(targetRef, options, domAttrs);
  const { moveDistance, resizingForward, resizingBackward, resizingBoth } = createResizingFns(options, domAttrs);

  return {
    targetRef,
    options,
    domAttrs,
    moveDistance,
    setStyleWidthOrHeight,
    setStyleOffset,
    resizingForward,
    resizingBackward,
    resizingBoth,
  };
}

/** 触发调整事件 */
export function updateResize(status: ResizeStatus, resizeData: ResizeData, distance: ResizeDistance) {
  resizeData.options.callback?.(status, distance);
}

type ResizeDirectionFn = (resizeData: ResizeData, ...resizingFns: ResizingFn[]) => void;

/** 根据方向调整 */
export function resizeByDirection(
  resizeData: ResizeData,
  resizeHorizontal: ResizeDirectionFn,
  resizeVertical: ResizeDirectionFn,
  resizeHorizontalAndVertical: ResizeDirectionFn,
) {
  const { options, resizingBackward, resizingForward, resizingBoth } = resizeData;

  switch (options.direction) {
    case 'left':
      resizeHorizontal(resizeData, resizingBackward);
      break;
    case 'right':
      resizeHorizontal(resizeData, resizingForward);
      break;
    case 'left-right':
      resizeHorizontal(resizeData, resizingBoth);
      break;
    case 'top':
      resizeVertical(resizeData, resizingBackward);
      break;
    case 'bottom':
      resizeVertical(resizeData, resizingForward);
      break;
    case 'top-bottom':
      resizeVertical(resizeData, resizingBoth);
      break;
    case 'left-top':
      resizeHorizontalAndVertical(resizeData, resizingBackward, resizingBackward);
      break;
    case 'right-top':
      resizeHorizontalAndVertical(resizeData, resizingForward, resizingBackward);
      break;
    case 'left-bottom':
      resizeHorizontalAndVertical(resizeData, resizingBackward, resizingForward);
      break;
    case 'right-bottom':
      resizeHorizontalAndVertical(resizeData, resizingForward, resizingForward);
      break;
    case 'left-bottom-right':
      resizeHorizontalAndVertical(resizeData, resizingBoth, resizingForward);
      break;
    case 'left-top-right':
      resizeHorizontalAndVertical(resizeData, resizingBoth, resizingBackward);
      break;
    case 'top-left-bottom':
      resizeHorizontalAndVertical(resizeData, resizingBackward, resizingBoth);
      break;
    case 'top-right-bottom':
      resizeHorizontalAndVertical(resizeData, resizingForward, resizingBoth);
      break;
    case 'all':
      resizeHorizontalAndVertical(resizeData, resizingBoth, resizingBoth);
      break;
  }
}

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
}

const DEFAULT_GRID = 0.5;

function createResizingFns(options: DomResizeOptions, domAttrs: DomAttrs) {
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
      scale: domAttrs.matrix.scaleX,
    },
    y: {
      originValue: domAttrs.height,
      originOffset: domAttrs.offsetY,
      minValue: domAttrs.height - Math.floor((domAttrs.height - domAttrs.minHeight) / gridY) * gridY,
      maxDistance: Math.floor((domAttrs.maxHeight - domAttrs.height) / gridY) * gridY,
      minDistance: Math.ceil((domAttrs.minHeight - domAttrs.height) / gridY) * gridY,
      gridDistance: gridY,
      scale: domAttrs.matrix.scaleY,
    },
  };

  /** 限制位移 */
  let limitMoveDistance: (distance: number, dir: Dir, axis: Axis) => number;
  if (options.crossAxis) {
    const minCrossDis = {
      x: 2 * domAxisParams.x.minValue,
      y: 2 * domAxisParams.y.minValue,
    };
    const maxCrossDis = {
      x: Math.floor((domAttrs.maxWidth + domAttrs.width) / gridX) * gridX,
      y: Math.floor((domAttrs.maxWidth + domAttrs.height) / gridY) * gridY,
    };
    limitMoveDistance = (distance: number, dir: Dir, axis: Axis) => {
      const { maxDistance, minDistance } = domAxisParams[axis];
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
    limitMoveDistance = (distance: number, dir: Dir, axis: Axis) => {
      const { maxDistance, minDistance } = domAxisParams[axis];
      const dis = distance * dir;
      if (dis < minDistance) { return minDistance * dir; }
      if (dis > maxDistance) { return maxDistance * dir; }
      return distance;
    };
  }

  /** 获取移动距离 */
  const getMoveDistance = (startLocation: number, endLocation: number, axis: Axis, dir: Dir) => {
    const { gridDistance } = domAxisParams[axis];
    let distance = Math.round((endLocation - startLocation) / gridDistance) * gridDistance;
    distance = limitMoveDistance(distance, dir, axis);
    return distance;
  };

  const getValueAndOffset = options.offset
    ? (value: number, _minValue: number, offsetForward: number, offsetBackward: number) => {
        return value > 0 ? { value, offset: offsetForward } : { value: -value, offset: offsetBackward };
      }
    : (value: number, minValue: number) => ({ value: value > minValue ? value : minValue, offset: 0 });

  /** 向前调整（往右或者往下）长度与位移 */
  const resizingForward: ResizingFn = (startLocation, endLocation, axis) => {
    const { originValue, originOffset, minValue, scale } = domAxisParams[axis];
    const distance = getMoveDistance(startLocation, endLocation, axis, 1);
    const value = originValue + distance;
    const scaleOffset = distance * (scale - 1) / 2; // 因为缩放比例产生的位移
    const data = getValueAndOffset(value, minValue, originOffset + scaleOffset, originOffset + value + scaleOffset + minValue * scale);
    logDistance(data.value, axis);
    return data;
  };
  /** 向后调整（往左或者往上）长度与位移 */
  const resizingBackward: ResizingFn = (startLocation, endLocation, axis) => {
    const { originValue, originOffset, minValue, scale } = domAxisParams[axis];
    const distance = getMoveDistance(startLocation, endLocation, axis, -1);
    const value = originValue - distance;
    const scaleOffset = distance * (scale - 1) / 2; // 因为缩放比例产生的位移
    const data = getValueAndOffset(value, minValue, originOffset + distance + scaleOffset, originOffset + originValue + scaleOffset - minValue * scale);
    logDistance(data.value, axis);
    return data;
  };
  /** 前后一起调整(上下或者左右)长度与位移 */
  const resizingBoth: ResizingFn = (startLocation, endLocation, axis, pointerDir = 1) => {
    const { originValue, originOffset, minValue } = domAxisParams[axis];
    // 两边一起调整时需要对数据翻倍
    const distance = getMoveDistance(2 * startLocation, 2 * endLocation, axis, pointerDir);
    const value = originValue + pointerDir * distance;
    const distanceHalf = pointerDir * distance / 2;
    const data = getValueAndOffset(value, minValue, originOffset - distanceHalf, originOffset + originValue + distanceHalf);
    logDistance(data.value, axis);
    return data;
  };

  return { moveDistance, resizingForward, resizingBackward, resizingBoth };
}
