import type { ResizingFn } from './helper';
import { resizingBackward, resizingForward, useResizeDomAttrs } from './helper';

/**
 * 调整状态 'prepare'(准备) | 'moving'(移动) | 'idle'(静止)
 */
export type ResizeStatus = 'prepare' | 'moving' | 'idle';

export interface DomResizeOptions {
  /** 调整元素 */
  target?: HTMLDivElement
  /** 事件 */
  event?: PointerEvent
  /** 调整方向 */
  direction?: ResizeDirection
  /** 使用translate偏移 */
  translated?: boolean
  /** 锁定比例 */
  lockAspectRatio?: boolean
}

export type ResizeDirection = '' | 'left' | 'right' | 'top' | 'bottom' | 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom';

export function domResize(callback?: (status: ResizeStatus, direction: ResizeDirection) => void) {
  /** 调整配置项 */
  let resizeOptions: DomResizeOptions = {};
  /** 设置宽度或高度 */
  let setStyleWidthOrHeight = (_value: number, _property: 'width' | 'height') => { };
  /** 设置位移 */
  let setStyletTransform = (_translateX: number, _translateY: number) => { };

  const { domAttrs, getResizeDomAttrs } = useResizeDomAttrs();

  function initResize(options: DomResizeOptions) {
    resizeOptions = options;
    if (resizeOptions.translated) {
      setStyleWidthOrHeight = (value: number, property: 'width' | 'height') => resizeOptions.target!.style[property] = `${Math.abs(value)}px`;
      setStyletTransform = (translateX: number, translateY: number) => {
        const { name, beforeTranslateValueStr, afterTranslateValueStr } = domAttrs.matrix;
        resizeOptions.target!.style.transform = `${name}(${beforeTranslateValueStr}${translateX},${translateY}${afterTranslateValueStr})`;
      };
    }
    else {
      setStyleWidthOrHeight = (value: number, property: 'width' | 'height') => resizeOptions.target!.style[property] = `${value > 0 ? value : 0}px`;
      setStyletTransform = () => { };
    }
  }

  function updateResize(status: ResizeStatus) {
    callback?.(status, resizeOptions.direction || '');
  }

  /** 开始调整容器 */
  function beginResizeContent(resizingContent: (moveEvent: PointerEvent) => void) {
    if (!resizeOptions.target) { return; }
    if (!resizeOptions.event) { return; }
    // 开始
    resizeOptions.target.setPointerCapture(resizeOptions.event.pointerId);
    updateResize('prepare');
    // 移动
    getResizeDomAttrs(resizeOptions.target); // 获取当前容器的样式属性
    resizeOptions.target.onpointermove = (moveEvent) => {
      resizingContent(moveEvent);
      updateResize('moving');
    };
    // 结束
    resizeOptions.target.onpointerup = overResizeContent;
  }

  /** 结束调整容器 */
  function overResizeContent(overEvent: PointerEvent) {
    if (!resizeOptions.target) { return; }
    resizeOptions.target.onpointermove = null;
    resizeOptions.target.releasePointerCapture(overEvent.pointerId);
    updateResize('idle');
  }

  /** 调整水平方向 */
  function resizeHorizontal(resizingWidthFn: ResizingFn) {
    const { clientX: startX } = resizeOptions.event!;
    beginResizeContent(({ clientX: endX }) => {
      const { value: width, offset: translateX } = resizingWidthFn(startX, endX, domAttrs.width, domAttrs.matrix.translateX);
      setStyleWidthOrHeight(width, 'width');
      setStyletTransform(translateX, domAttrs.matrix.translateY);
    });
  }
  /** 调整垂直方向 */
  function resizeVertical(resizingHeightFn: ResizingFn) {
    const { clientY: startY } = resizeOptions.event!;
    beginResizeContent(({ clientY: endY }) => {
      const { value: height, offset: translateY } = resizingHeightFn(startY, endY, domAttrs.height, domAttrs.matrix.translateY);
      setStyleWidthOrHeight(height, 'height');
      setStyletTransform(domAttrs.matrix.translateX, translateY);
    });
  }

  /** 调整水平与垂直方向 */
  function resizeHorizontalAndVertical(resizingWidthFn: ResizingFn, resizingHeightFn: ResizingFn) {
    const updateDom = (options: { startX: number, startY: number, endX: number, endY: number }) => {
      const { value: width, offset: translateX } = resizingWidthFn(options.startX, options.endX, domAttrs.width, domAttrs.matrix.translateX);
      const { value: height, offset: translateY } = resizingHeightFn(options.startY, options.endY, domAttrs.height, domAttrs.matrix.translateY);
      setStyleWidthOrHeight(width, 'width');
      setStyleWidthOrHeight(height, 'height');
      setStyletTransform(translateX, translateY);
    };

    if (resizeOptions.lockAspectRatio) {
      // 固定比例时，宽度根据鼠标位置决定，高度的调整根据宽度的变化与元素宽高比例决定
      const { clientX: startX } = resizeOptions.event!;
      const dir = resizingWidthFn === resizingHeightFn ? 1 : -1; // 宽高调整的方向不是同向时，需要反向调整高度
      beginResizeContent(({ clientX: endX }) => {
        const startY = dir * startX / domAttrs.aspectRatio;
        const endY = dir * endX / domAttrs.aspectRatio;
        updateDom({ startX, startY, endX, endY });
      });
    }
    else {
      // 不固定比例时，宽高根据鼠标位置决定
      const { clientX: startX, clientY: startY } = resizeOptions.event!;
      beginResizeContent(({ clientX: endX, clientY: endY }) => {
        updateDom({ startX, startY, endX, endY });
      });
    }
  }

  /**
   * 调整容器
   * @param resizeOptions 配置项 - {@link DomResizeOptions}
   */
  function onResize(resizeOptions: DomResizeOptions) {
    initResize(resizeOptions);
    switch (resizeOptions.direction) {
      case 'left':
        resizeHorizontal(resizingBackward);
        break;
      case 'right':
        resizeHorizontal(resizingForward);
        break;
      case 'top':
        resizeVertical(resizingBackward);
        break;
      case 'bottom':
        resizeVertical(resizingForward);
        break;
      case 'left-top':
        resizeHorizontalAndVertical(resizingBackward, resizingBackward);
        break;
      case 'right-top':
        resizeHorizontalAndVertical(resizingForward, resizingBackward);
        break;
      case 'left-bottom':
        resizeHorizontalAndVertical(resizingBackward, resizingForward);
        break;
      case 'right-bottom':
        resizeHorizontalAndVertical(resizingForward, resizingForward);
    }
  }

  return onResize;
}
