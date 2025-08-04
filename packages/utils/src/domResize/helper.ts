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
    scaleX: number
    scaleY: number
    rotate: number
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
      scaleX: 1,
      scaleY: 1,
      rotate: 0,
    },
    pointerDir: {
      x: 1,
      y: 1,
    },
  };
  if (!dom) { return domAttrs; }
  const domStyles = window.getComputedStyle(dom, null);

  // 获取transform相关matrix信息
  const matchValue = domStyles.transform.match(matrixValueReg);
  domAttrs.matrix.name = matchValue?.[1] || 'matrix'; // matrix3d || matrix
  domAttrs.matrix.values = matchValue?.[2]?.split(',').map(Number) || [1, 0, 0, 1, 0, 0];
  if (domAttrs.matrix.values.length > 6) {
    // matrix3d(https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/matrix3d)
    domAttrs.matrix.beforeTranslateValueStr = `${domAttrs.matrix.values.slice(0, 12).join(',')},`;
    domAttrs.matrix.afterTranslateValueStr = `,${domAttrs.matrix.values.slice(15).join(',')}`;
    domAttrs.offsetX = domAttrs.matrix.values[12];
    domAttrs.offsetY = domAttrs.matrix.values[13];
    // scale与rotate的配置信息
    const a = domAttrs.matrix.values[0];
    const b = domAttrs.matrix.values[1];
    const c = domAttrs.matrix.values[4];
    const d = domAttrs.matrix.values[5];
    // x轴和y轴的缩放倍数
    domAttrs.matrix.scaleX = transformValuePrecision(Math.sqrt(a * a + b * b));
    domAttrs.matrix.scaleY = transformValuePrecision(Math.sqrt(c * c + d * d));
    // 计算旋转角度
    domAttrs.matrix.rotate = transformValuePrecision((Math.atan2(b, a) * 180 / Math.PI + 360) % 360);
  }
  else {
    // matrix(https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/matrix)
    domAttrs.matrix.beforeTranslateValueStr = `${domAttrs.matrix.values.slice(0, 4).join(',')},`;
    domAttrs.matrix.afterTranslateValueStr = '';
    domAttrs.offsetX = domAttrs.matrix.values[4];
    domAttrs.offsetY = domAttrs.matrix.values[5];
    // scale与rotate的配置信息
    const a = domAttrs.matrix.values[0];
    const b = domAttrs.matrix.values[1];
    const c = domAttrs.matrix.values[2];
    const d = domAttrs.matrix.values[3];
    // x轴和y轴的缩放倍数
    domAttrs.matrix.scaleX = transformValuePrecision(Math.sqrt(a * a + b * b));
    domAttrs.matrix.scaleY = transformValuePrecision(Math.sqrt(c * c + d * d));
    // 计算旋转角度
    domAttrs.matrix.rotate = transformValuePrecision((Math.atan2(b, a) * 180 / Math.PI + 360) % 360);
  }

  // 设置偏移
  if (options.offset === 'position') {
    // 使用position
    domAttrs.offsetX = pxToNum(domStyles.left);
    domAttrs.offsetY = pxToNum(domStyles.top);
  }
  else {
    // 使用transform
    if (domAttrs.matrix.values.length > 6) {
      domAttrs.offsetX = domAttrs.matrix.values[12];
      domAttrs.offsetY = domAttrs.matrix.values[13];
    }
    else {
      domAttrs.offsetX = domAttrs.matrix.values[4];
      domAttrs.offsetY = domAttrs.matrix.values[5];
    }
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
  // 锁定纵横比时，最小宽高也会受限改变
  if (options.lockAspectRatio) {
    const lockMinHeight = domAttrs.minHeight * domAttrs.aspectRatio;
    if (lockMinHeight > domAttrs.minWidth) {
      domAttrs.minWidth = lockMinHeight;
    }
    else {
      domAttrs.minHeight = domAttrs.minWidth / domAttrs.aspectRatio;
    }
  }

  // 获取点击在元素的哪个方向
  if (options.event) {
    const rect = dom.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    // 鼠标相对于元素中心的坐标
    const pointerX = options.event.clientX - centerX;
    const pointerY = options.event.clientY - centerY;
    // 旋转角度（转换为弧度）
    const angleRad = -domAttrs.matrix.rotate * Math.PI / 180;
    // 应用逆时针旋转矩阵
    const rotatedX = pointerX * Math.cos(angleRad) - pointerY * Math.sin(angleRad);
    const rotatedY = pointerX * Math.sin(angleRad) + pointerY * Math.cos(angleRad);
    // 根据旋转后的坐标判断方向
    domAttrs.pointerDir.x = rotatedX > 0 ? 1 : -1;
    domAttrs.pointerDir.y = rotatedY > 0 ? 1 : -1;
  }
  return domAttrs;
}

/** 精度处理函数 */
function transformValuePrecision(value: number): number {
  return Math.round(value * 100) / 100;
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
  if (options.offset === 'position') {
    setStyleOffset = (left, top) => changeTargetStyle((dom) => {
      dom.style.left = `${left}px`;
      dom.style.top = `${top}px`;
    });
  }
  else if (options.offset === 'transform') {
    // 如果配置了transform或者缩放，则使用transform进行位移
    setStyleOffset = (translateX, translateY) => changeTargetStyle((dom) => {
      dom.style.transform = `${name}(${beforeTranslateValueStr}${translateX},${translateY}${afterTranslateValueStr})`;
    });
  }

  return {
    setStyleWidthOrHeight,
    setStyleOffset,
  };
}
