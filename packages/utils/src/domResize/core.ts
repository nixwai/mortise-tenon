import type { DomResizeOptions, ResizeDistance, ResizeStatus } from './types';

type SetStyleWidthOrHeightFn = (value: number, property: 'width' | 'height') => void;
type SetStyleOffset = (offsetX: number, offsetY: number) => void;
/**
 * 调节函数
 * @param startLocation 开始的坐标
 * @param endLocation 结束的坐标
 * @param axis 坐标
 */
export type ResizingFn =
  (startLocation: number, endLocation: number, axis: 'x' | 'y') => { value: number, offset: number };

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
}>;

export interface DomAttrs {
  width: number
  height: number
  aspectRatio: number
  offsetX: number
  offsetY: number
  matrix: {
    name: string
    values: number[]
    beforeTranslateValueStr: string
    afterTranslateValueStr: string
  }
}

const matrixValueReg = /(matrix3?d?)\((.+)\)/;

/** 初始化调整操作功能 */
export function initResize(options: DomResizeOptions): ResizeData {
  const targetRef = new WeakRef(options.target!);
  const domAttrs = getResizeDomAttrs(options, targetRef.deref());
  const { setStyleWidthOrHeight, setStyleOffset } = createStyleUpdaters(targetRef, options, domAttrs);
  const { moveDistance, resizingForward, resizingBackward } = createResizingFns(options, domAttrs);

  return {
    targetRef,
    options,
    domAttrs,
    moveDistance,
    setStyleWidthOrHeight,
    setStyleOffset,
    resizingForward,
    resizingBackward,
  };
}

/** 触发调整事件 */
export function updateResize(status: ResizeStatus, resizeData: ResizeData, distance: ResizeDistance) {
  resizeData.options.callback?.(status, resizeData.options.direction!, distance);
}

function pxToNumber(value: string) {
  return Number(value.replace('px', ''));
}

function getResizeDomAttrs(options: DomResizeOptions, dom?: HTMLDivElement): Readonly<DomAttrs> {
  const domAttrs: DomAttrs = {
    width: 0,
    height: 0,
    aspectRatio: 0,
    offsetX: 0,
    offsetY: 0,
    matrix: {
      name: 'matrix',
      values: [1, 0, 0, 1, 0, 0],
      beforeTranslateValueStr: '1,0,0,1',
      afterTranslateValueStr: '',
    },
  };
  if (!dom) { return domAttrs; }

  const { width, height, transform, top, left } = window.getComputedStyle(dom);
  if (options.offset === 'transform') {
    const matchValue = transform.match(matrixValueReg);
    domAttrs.matrix.name = matchValue?.[1] || 'matrix';
    domAttrs.matrix.values = matchValue?.[2]?.split(',').map(Number) || [1, 0, 0, 1, 0, 0];
    if (domAttrs.matrix.values.length > 6) {
      // matrix3d(https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/matrix3d)
      domAttrs.matrix.beforeTranslateValueStr = `${domAttrs.matrix.values.slice(0, 12).join(',')},`;
      domAttrs.matrix.afterTranslateValueStr = `,${domAttrs.matrix.values.slice(15).join(',')}`;
      domAttrs.offsetX = domAttrs.matrix.values[12];
      domAttrs.offsetY = domAttrs.matrix.values[13];
    }
    else {
      // matrix(https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/matrix)
      domAttrs.matrix.beforeTranslateValueStr = `${domAttrs.matrix.values.slice(0, 4).join(',')},`;
      domAttrs.matrix.afterTranslateValueStr = '';
      domAttrs.offsetX = domAttrs.matrix.values[4];
      domAttrs.offsetY = domAttrs.matrix.values[5];
    }
  }
  else if (options.offset === 'position') {
    domAttrs.offsetX = pxToNumber(left);
    domAttrs.offsetY = pxToNumber(top);
  }
  domAttrs.width = pxToNumber(width);
  domAttrs.height = pxToNumber(height);
  domAttrs.aspectRatio = domAttrs.height !== 0 ? domAttrs.width / domAttrs.height : 1;
  return domAttrs;
}

function createStyleUpdaters(targetRef: WeakRef<HTMLDivElement>, options: DomResizeOptions, domAttrs: DomAttrs) {
  const { name, beforeTranslateValueStr, afterTranslateValueStr } = domAttrs.matrix;

  const changeTargetStyle = (fn: (dom: HTMLDivElement) => void) => {
    const target = targetRef.deref();
    if (!target) { return; }
    fn(target);
  };
  /** 设置宽度或高度 */
  const setStyleWidthOrHeight: SetStyleWidthOrHeightFn = (value, property) => changeTargetStyle((dom) => {
    dom.style[property] = `${value}px`;
  });
  /** 设置位移 */
  let setStyleOffset: SetStyleOffset = () => { };
  if (options.offset === 'transform') {
    setStyleOffset = (translateX, translateY) => changeTargetStyle((dom) => {
      dom.style.transform = `${name}(${beforeTranslateValueStr}${translateX},${translateY}${afterTranslateValueStr})`;
    });
  }
  else if (options.offset === 'position') {
    setStyleOffset = (left, top) => changeTargetStyle((dom) => {
      dom.style.left = `${left}px`;
      dom.style.top = `${top}px`;
    });
  }

  return {
    setStyleWidthOrHeight,
    setStyleOffset,
  };
}

function createResizingFns(options: DomResizeOptions, domAttrs: DomAttrs) {
  /** 向前调整（往右或者往下）后长度值与位移值 */
  let resizingForward: ResizingFn;
  /** 向后调整（往左或者往上）后长度值与位移值 */
  let resizingBackward: ResizingFn;
  /** 记录每次的位移距离 */
  const moveDistance: ResizeDistance = { x: 0, y: 0 };
  /** 上一次的位移距离 */
  let lastDistance = 0;

  const originData = {
    x: [domAttrs.width, domAttrs.offsetX],
    y: [domAttrs.height, domAttrs.offsetY],
  };
  const getMoveDistance = (startLocation: number, endLocation: number, axis: 'x' | 'y') => {
    const [originValue, originOffset] = originData[axis];
    const distance = Math.round(endLocation - startLocation);
    moveDistance[axis] = distance - lastDistance; // 记录每次移动距离
    lastDistance = distance;
    return { originValue, originOffset, distance };
  };
  // 根据配置定义修改元素的方法
  if (options.offset) {
    resizingForward = (startLocation, endLocation, axis) => {
      const { originValue, originOffset, distance } = getMoveDistance(startLocation, endLocation, axis);
      const value = originValue + distance;
      return value > 0 ? { value, offset: originOffset } : { value: -value, offset: originOffset + value };
    };
    resizingBackward = (startLocation, endLocation, axis) => {
      const { originValue, originOffset, distance } = getMoveDistance(startLocation, endLocation, axis);
      const value = originValue - distance;
      return value > 0 ? { value, offset: originOffset + distance } : { value: -value, offset: originOffset + originValue };
    };
  }
  else {
    resizingForward = (startLocation, endLocation, axis) => {
      const { originValue, distance } = getMoveDistance(startLocation, endLocation, axis);
      const value = originValue + distance;
      return { value: value > 0 ? value : 0, offset: 0 };
    };
    resizingBackward = (startLocation, endLocation, axis) => {
      const { originValue, distance } = getMoveDistance(startLocation, endLocation, axis);
      const value = originValue - distance;
      return { value: value > 0 ? value : 0, offset: 0 };
    };
  }

  return { moveDistance, resizingForward, resizingBackward };
}
