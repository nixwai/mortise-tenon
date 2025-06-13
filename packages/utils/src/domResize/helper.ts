import type { DomResizeOptions } from './types';

export type Dir = 1 | -1;

export interface DomAttrs {
  /** 宽 */
  width: number
  /** 高 */
  height: number
  /** 宽高比 */
  aspectRatio: number
  /** 水平偏移值 */
  offsetX: number
  /** 垂直偏移值 */
  offsetY: number
  /** transform信息 */
  matrix: {
    name: string
    values: number[]
    beforeTranslateValueStr: string
    afterTranslateValueStr: string
  }
  /** 鼠标位置 */
  pointerDir: {
    /** 水平方向，1: 前方，-1: 后方 */
    x: Dir
    /** 垂直方向，1: 前方，-1: 后方 */
    y: Dir
  }
}

export type SetStyleWidthOrHeightFn = (value: number, property: 'width' | 'height') => void;
export type SetStyleOffset = (offsetX: number, offsetY: number) => void;

const matrixValueReg = /(matrix3?d?)\((.+)\)/;
function pxToNumber(value: string) {
  return Number(value.replace('px', ''));
}

/** 获取调整元素的属性信息 */
export function getResizeDomAttrs(options: DomResizeOptions, dom?: HTMLDivElement): Readonly<DomAttrs> {
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
    pointerDir: {
      x: 1,
      y: 1,
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

  const directions = options.direction?.split('-') || [];
  if (options.event && directions.length > 1) {
    const { x, y } = dom.getBoundingClientRect();
    domAttrs.pointerDir.x = (options.event.clientX - (x + domAttrs.width / 2)) > 0 ? 1 : -1;
    domAttrs.pointerDir.y = (options.event.clientY - (y + domAttrs.height / 2)) > 0 ? 1 : -1;
  }

  return domAttrs;
}

/** 创建样式更新函数 */
export function createStyleUpdaters(
  targetRef: WeakRef<HTMLDivElement>,
  options: DomResizeOptions,
  domAttrs: DomAttrs,
) {
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
