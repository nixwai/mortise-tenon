import type { Dir, DomAttrs, SetStyleOffset, SetStyleWidthOrHeightFn } from './helper';
import type { DomResizeOptions, ResizeDistance, ResizeStatus } from './types';
import { createStyleUpdaters, getResizeDomAttrs } from './helper';

export type Axis = 'x' | 'y';

/**
 * 调节函数
 * @param startLocation 开始的坐标
 * @param endLocation 结束的坐标
 * @param axis 坐标
 */
export type ResizingFn =
  (startLocation: number, endLocation: number, axis: Axis, dir?: Dir) => { value: number, offset: number };

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

function createResizingFns(options: DomResizeOptions, domAttrs: DomAttrs) {
  /** 记录每次的位移距离 */
  const moveDistance: ResizeDistance = { x: 0, y: 0 };
  /** 上一次的位移距离 */
  const lastDistance: ResizeDistance = { x: 0, y: 0 };
  const { grid = [1, 1] } = options;
  const gridDistance = { x: grid[0], y: grid[1] };

  const originData = {
    x: [domAttrs.width, domAttrs.offsetX],
    y: [domAttrs.height, domAttrs.offsetY],
  };

  const getMoveDistance = (startLocation: number, endLocation: number, axis: Axis, dir: Dir) => {
    const [originValue, originOffset] = originData[axis];
    const distance = Math.round((endLocation - startLocation) / gridDistance[axis]) * gridDistance[axis];
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
  const resizingBoth: ResizingFn = (startLocation, endLocation, axis, dir = 1) => {
    const { originValue, originOffset, distance } = getMoveDistance(startLocation, endLocation, axis, dir);
    const value = originValue + 2 * dir * distance;
    return getValueAndOffset(value, originOffset, -1 * dir * distance, originValue + dir * distance);
  };

  return { moveDistance, resizingForward, resizingBackward, resizingBoth };
}
