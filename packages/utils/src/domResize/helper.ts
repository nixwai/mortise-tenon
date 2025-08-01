import type { DomResizeOptions } from './types';

export type Dir = 1 | -1;

export interface DomAttrs {
  /** 宽 */
  width: number
  /** 高 */
  height: number
  /** 宽高比 */
  aspectRatio: number
  /** 最大宽度 */
  maxWidth: number
  /** 最大高度 */
  maxHeight: number
  /** 最小宽度 */
  minWidth: number
  /** 最小高度 */
  minHeight: number
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
function pxToNum(value: string) {
  if (value === 'none' || value === 'auto') {
    return Infinity;
  }
  return Number(value.replace('px', ''));
}

/** 获取调整元素的属性信息 */
export function getResizeDomAttrs(options: DomResizeOptions, dom?: HTMLDivElement): Readonly<DomAttrs> {
  const domAttrs: DomAttrs = {
    width: 0,
    height: 0,
    aspectRatio: 0,
    maxWidth: Infinity,
    maxHeight: Infinity,
    minWidth: 0,
    minHeight: 0,
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
  const domStyles = window.getComputedStyle(dom, null);

  // 设置偏移
  if (options.offset === 'transform') {
    const matchValue = domStyles.transform.match(matrixValueReg);
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
    domAttrs.offsetX = pxToNum(domStyles.left);
    domAttrs.offsetY = pxToNum(domStyles.top);
  }

  // 设置宽高
  domAttrs.width = pxToNum(domStyles.width);
  domAttrs.height = pxToNum(domStyles.height);
  domAttrs.aspectRatio = domAttrs.height !== 0 ? domAttrs.width / domAttrs.height : 1;

  // 设置宽高限制
  const limitKeys = ['maxWidth', 'maxHeight', 'minWidth', 'minHeight'] as const;
  const limitList = limitKeys.map(key => domStyles[key]);
  if (limitList.some(item => item.includes('%'))) {
    // 宽高限制包含百分比，需要获取父级宽度和高度
    const parentStyles = window.getComputedStyle(dom.parentNode as HTMLDivElement, null);
    const parentWidthAndHeight = [parentStyles.width, parentStyles.height].map(pxToNum);
    if (parentStyles.boxSizing === 'border-box') {
      parentWidthAndHeight[0] = parentWidthAndHeight[0] - pxToNum(parentStyles.paddingLeft) - pxToNum(parentStyles.paddingRight);
      parentWidthAndHeight[1] = parentWidthAndHeight[1] - pxToNum(parentStyles.paddingTop) - pxToNum(parentStyles.paddingBottom);
    }
    limitList.map((item, i) => {
      return item.includes('%') ? parentWidthAndHeight[i % 2] * Number(item.replace('%', '')) / 100 : pxToNum(item);
    }).forEach((item, i) => domAttrs[limitKeys[i]] = item);
  }
  else {
    limitList.map(pxToNum).forEach((item, i) => domAttrs[limitKeys[i]] = item);
  }

  // 获取点击在元素的哪个方向
  if (options.event) {
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
