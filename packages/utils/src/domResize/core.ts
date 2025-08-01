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
  /** 最大调整距离 */
  maxDistance: number
  /** 最小调整距离 */
  minDistance: number
  /** 网格的移动距离 */
  gridDistance: number
}

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
  const lastDistance: Pick<ResizeDistance, 'x' | 'y'> = { x: 0, y: 0 };

  let maxDistanceX = domAttrs.maxWidth - domAttrs.width;
  let maxDistanceY = domAttrs.maxHeight - domAttrs.height;
  let minDistanceX = domAttrs.minWidth - domAttrs.width;
  let minDistanceY = domAttrs.minHeight - domAttrs.height;
  if (options.direction === 'all' || (options.direction?.includes('left') && options.direction?.includes('right'))) {
    // 可同时调整左右
    maxDistanceX = maxDistanceX / 2;
    minDistanceX = minDistanceX / 2;
  }
  if (options.direction === 'all' || (options.direction?.includes('top') && options.direction?.includes('bottom'))) {
    // 可同时调整上下
    maxDistanceY = maxDistanceY / 2;
    minDistanceY = minDistanceY / 2;
  }
  const gridX = options.grid?.[0] || 0.5;
  const gridY = options.grid?.[1] || 0.5;
  /** 元素的纵横轴参数 */
  const domAxisParams: { x: DirectionParams, y: DirectionParams } = {
    x: {
      originValue: domAttrs.width,
      originOffset: domAttrs.offsetX,
      maxDistance: Math.floor((maxDistanceX) / gridX) * gridX,
      minDistance: Math.ceil((minDistanceX) / gridX) * gridX,
      gridDistance: gridX,
    },
    y: {
      originValue: domAttrs.height,
      originOffset: domAttrs.offsetY,
      maxDistance: Math.floor((maxDistanceY) / gridY) * gridY,
      minDistance: Math.ceil((minDistanceY) / gridY) * gridY,
      gridDistance: gridY,
    },
  };

  /** 限制位移 */
  // const limitMoveDistance = options.crossAxis
  //   ? (distance: number, dir: Dir, maxDis: number, minDis: number) => {
  //     if (distance * dir < minDis && distance) { return minDis * dir; }
  //     if (distance * dir > maxDis) { return maxDis * dir; }
  //     return distance;
  //   }
  //   : (distance: number, dir: Dir, maxDis: number, minDis: number) => {
  //     if (distance * dir < minDis) { return minDis * dir; }
  //     if (distance * dir > maxDis) { return maxDis * dir; }
  //     return distance;
  //   };

  /** 获取移动距离 */
  const getMoveDistance = (startLocation: number, endLocation: number, axis: Axis, dir: Dir) => {
    const { originValue, originOffset, gridDistance, maxDistance, minDistance } = domAxisParams[axis];
    let distance = Math.round((endLocation - startLocation) / gridDistance) * gridDistance;
    if (distance * dir < minDistance) {
      distance = minDistance * dir;
    }
    else if (distance * dir > maxDistance) {
      distance = maxDistance * dir;
    }
    moveDistance[axis] = (distance - lastDistance[axis]) * dir; // 记录每次移动距离
    lastDistance[axis] = distance;
    return { originValue, originOffset, distance };
  };

  const getValueAndOffset = options.offset
    ? (value: number, originOffset: number, offsetForward: number, offsetBackward: number) => {
        return value > 0 ? { value, offset: originOffset + offsetForward } : { value: -value, offset: originOffset + offsetBackward };
      }
    : (value: number) => ({ value: value > 0 ? value : 0, offset: 0 });

  /** 向前调整（往右或者往下）长度与位移 */
  const resizingForward: ResizingFn = (startLocation, endLocation, axis) => {
    const { originValue, originOffset, distance } = getMoveDistance(startLocation, endLocation, axis, 1);
    const value = originValue + distance;
    return getValueAndOffset(value, originOffset, 0, value);
  };
  /** 向后调整（往左或者往上）长度与位移 */
  const resizingBackward: ResizingFn = (startLocation, endLocation, axis) => {
    const { originValue, originOffset, distance } = getMoveDistance(startLocation, endLocation, axis, -1);
    const value = originValue - distance;
    return getValueAndOffset(value, originOffset, distance, originValue);
  };
  /** 前后一起调整(上下或者左右)长度与位移 */
  const resizingBoth: ResizingFn = (startLocation, endLocation, axis, pointerDir = 1) => {
    const { originValue, originOffset, distance } = getMoveDistance(startLocation, endLocation, axis, pointerDir);
    const value = originValue + 2 * pointerDir * distance;
    return getValueAndOffset(value, originOffset, -1 * pointerDir * distance, originValue + pointerDir * distance);
  };

  return { moveDistance, resizingForward, resizingBackward, resizingBoth };
}
