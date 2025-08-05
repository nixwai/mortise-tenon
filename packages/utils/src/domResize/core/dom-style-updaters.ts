import type { DomResizeOptions } from '../types';
import type { DomAttrs } from './dom-attrs';

export type SetStyleWidthOrHeightFn = (value: number, property: 'width' | 'height') => void;
export type SetStyleOffset = (offsetX: number, offsetY: number) => void;

/** 创建样式更新函数 */
export function createStyleUpdaters(
  targetRef: WeakRef<HTMLDivElement>,
  options: DomResizeOptions,
  domAttrs: DomAttrs,
) {
  const { name, beforeTranslateValueStr, afterTranslateValueStr } = domAttrs.transform;

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
