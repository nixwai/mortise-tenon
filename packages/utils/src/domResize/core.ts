import type { DomResizeOptions, ResizeDistance, ResizeStatus } from './types';

export interface DomAttrs {
  width: number
  height: number
  aspectRatio: number
  matrix: {
    name: string
    values: number[]
    translateX: number
    translateY: number
    beforeTranslateValueStr: string
    afterTranslateValueStr: string
  }
}

const matrixValueReg = /(matrix3?d?)\((.+)\)/;

function getResizeDomAttrs(dom: HTMLDivElement): Readonly<DomAttrs> {
  const domAttrs: DomAttrs = {
    width: 0,
    height: 0,
    aspectRatio: 0,
    matrix: {
      name: 'matrix',
      values: [1, 0, 0, 1, 0, 0],
      translateX: 0,
      translateY: 0,
      beforeTranslateValueStr: '1,0,0,1',
      afterTranslateValueStr: '',
    },
  };

  const { width, height, transform } = window.getComputedStyle(dom);
  const matchValue = transform.match(matrixValueReg);
  domAttrs.matrix.name = matchValue?.[1] || 'matrix';
  domAttrs.matrix.values = matchValue?.[2]?.split(',').map(Number) || [1, 0, 0, 1, 0, 0];
  if (domAttrs.matrix.values.length > 6) {
    // matrix3d(https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/matrix3d)
    domAttrs.matrix.translateX = domAttrs.matrix.values[12];
    domAttrs.matrix.translateY = domAttrs.matrix.values[13];
    domAttrs.matrix.beforeTranslateValueStr = `${domAttrs.matrix.values.slice(0, 12).join(',')},`;
    domAttrs.matrix.afterTranslateValueStr = `,${domAttrs.matrix.values.slice(14).join(',')}`;
  }
  else {
    // matrix(https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/matrix)
    domAttrs.matrix.translateX = domAttrs.matrix.values[4];
    domAttrs.matrix.translateY = domAttrs.matrix.values[5];
    domAttrs.matrix.beforeTranslateValueStr = `${domAttrs.matrix.values.slice(0, 4).join(',')},`;
    domAttrs.matrix.afterTranslateValueStr = '';
  }
  domAttrs.width = Number(width.replace('px', ''));
  domAttrs.height = Number(height.replace('px', ''));
  domAttrs.aspectRatio = domAttrs.width / domAttrs.height;
  return domAttrs;
}

type SetStyleWidthOrHeightFn = (value: number, property: 'width' | 'height') => void;
type SetStyletTransformFn = (translateX: number, translateY: number) => void;

/**
 * 调节函数
 * @param startLocation 开始的坐标
 * @param endLocation 结束的坐标
 * @param axis 坐标
 */
export type ResizingFn =
  (startLocation: number, endLocation: number, axis: 'x' | 'y') => { value: number, offset: number };

export type ResizeData = Readonly<{
  /** 传入的配置项 */
  options: Readonly<DomResizeOptions>
  /** 元素的属性信息 */
  domAttrs: Readonly<DomAttrs>
  /** 记录每次更新的位移距离 */
  moveDistance: ResizeDistance
  /** 设置宽度或高度 */
  setStyleWidthOrHeight: SetStyleWidthOrHeightFn
  /** 设置位移 */
  setStyletTransform: SetStyletTransformFn
  /** 向前调整（往右或者往下）后长度值与位移值 */
  resizingForward: ResizingFn
  /** 向后调整（往左或者往上）后长度值与位移值 */
  resizingBackward: ResizingFn
}>;

export function initResize(options: DomResizeOptions): ResizeData {
  const domAttrs = getResizeDomAttrs(options.target!);

  /** 设置宽度或高度 */
  const setStyleWidthOrHeight: SetStyleWidthOrHeightFn = (value, property) => options.target!.style[property] = `${value}px`;
  /** 设置位移 */
  let setStyletTransform: SetStyletTransformFn = (translateX, translateY) => {
    const { name, beforeTranslateValueStr, afterTranslateValueStr } = domAttrs.matrix;
    options.target!.style.transform = `${name}(${beforeTranslateValueStr}${translateX},${translateY}${afterTranslateValueStr})`;
  };
  /** 向前调整（往右或者往下）后长度值与位移值 */
  let resizingForward: ResizingFn;
  /** 向后调整（往左或者往上）后长度值与位移值 */
  let resizingBackward: ResizingFn;
  /** 记录每次的位移距离 */
  const moveDistance: ResizeDistance = { x: 0, y: 0 };
  let lastDistance = 0;
  const getMoveDistance = (startLocation: number, endLocation: number, axis: 'x' | 'y') => {
    const [originValue, originOffset] = axis === 'x'
      ? [domAttrs.width, domAttrs.matrix.translateX]
      : [domAttrs.height, domAttrs.matrix.translateY];
    const distance = Math.round(endLocation - startLocation);
    moveDistance[axis] = distance - lastDistance; // 记录每次移动距离
    lastDistance = distance;
    return { originValue, originOffset, distance };
  };
  // 根据配置定义修改元素的方法
  if (options.translated) {
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
    setStyletTransform = () => { }; // 非translated时，不修改位移
  }

  return {
    options,
    domAttrs,
    moveDistance,
    setStyleWidthOrHeight,
    setStyletTransform,
    resizingForward,
    resizingBackward,
  };
}

/** 触发调整事件 */
export function updateResize(status: ResizeStatus, resizeData: ResizeData, distance: ResizeDistance) {
  resizeData.options.callback?.(
    status,
    resizeData.options.direction || '',
    distance,
  );
}
