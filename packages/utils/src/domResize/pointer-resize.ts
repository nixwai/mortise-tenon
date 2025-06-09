import type { ResizeData, ResizingFn } from './helper';
import type { ResizeStatus } from './types';

export function resizeByPointer(resizeData: ResizeData) {
  switch (resizeData.options.direction) {
    case 'left':
      resizeHorizontal(resizeData, resizeData.resizingBackward);
      break;
    case 'right':
      resizeHorizontal(resizeData, resizeData.resizingForward);
      break;
    case 'top':
      resizeVertical(resizeData, resizeData.resizingBackward);
      break;
    case 'bottom':
      resizeVertical(resizeData, resizeData.resizingForward);
      break;
    case 'left-top':
      resizeHorizontalAndVertical(resizeData, resizeData.resizingBackward, resizeData.resizingBackward);
      break;
    case 'right-top':
      resizeHorizontalAndVertical(resizeData, resizeData.resizingForward, resizeData.resizingBackward);
      break;
    case 'left-bottom':
      resizeHorizontalAndVertical(resizeData, resizeData.resizingBackward, resizeData.resizingForward);
      break;
    case 'right-bottom':
      resizeHorizontalAndVertical(resizeData, resizeData.resizingForward, resizeData.resizingForward);
  }
}

/** 调整水平方向 */
function resizeHorizontal(resizeData: ResizeData, resizingWidthFn: ResizingFn) {
  const { clientX: startX } = resizeData.options.event!;
  beginResizeContent(resizeData, ({ clientX: endX }) => {
    const { value: width, offset: translateX } = resizingWidthFn(
      startX,
      endX,
      resizeData.domAttrs.width,
      resizeData.domAttrs.matrix.translateX,
    );
    resizeData.setStyleWidthOrHeight(width, 'width');
    resizeData.setStyletTransform(translateX, resizeData.domAttrs.matrix.translateY);
  });
}

/** 调整垂直方向 */
function resizeVertical(resizeData: ResizeData, resizingHeightFn: ResizingFn) {
  const { clientY: startY } = resizeData.options.event!;
  beginResizeContent(resizeData, ({ clientY: endY }) => {
    const { value: height, offset: translateY } = resizingHeightFn(
      startY,
      endY,
      resizeData.domAttrs.height,
      resizeData.domAttrs.matrix.translateY,
    );
    resizeData.setStyleWidthOrHeight(height, 'height');
    resizeData.setStyletTransform(resizeData.domAttrs.matrix.translateX, translateY);
  });
}

/** 调整水平与垂直方向 */
function resizeHorizontalAndVertical(resizeData: ResizeData, resizingWidthFn: ResizingFn, resizingHeightFn: ResizingFn) {
  const updateDom = (options: { startX: number, startY: number, endX: number, endY: number }) => {
    const { value: width, offset: translateX } = resizingWidthFn(
      options.startX,
      options.endX,
      resizeData.domAttrs.width,
      resizeData.domAttrs.matrix.translateX,
    );
    const { value: height, offset: translateY } = resizingHeightFn(
      options.startY,
      options.endY,
      resizeData.domAttrs.height,
      resizeData.domAttrs.matrix.translateY,
    );
    resizeData.setStyleWidthOrHeight(width, 'width');
    resizeData.setStyleWidthOrHeight(height, 'height');
    resizeData.setStyletTransform(translateX, translateY);
  };

  if (resizeData.options.lockAspectRatio) {
    // 固定比例时，宽度根据鼠标位置决定，高度的调整根据宽度的变化与元素宽高比例决定
    const { clientX: startX } = resizeData.options.event!;
    const dir = resizingWidthFn === resizingHeightFn ? 1 : -1; // 宽高调整的方向不是同向时，需要反向调整高度
    beginResizeContent(resizeData, ({ clientX: endX }) => {
      const startY = dir * startX / resizeData.domAttrs.aspectRatio;
      const endY = dir * endX / resizeData.domAttrs.aspectRatio;
      updateDom({ startX, startY, endX, endY });
    });
  }
  else {
    // 不固定比例时，宽高根据鼠标位置决定
    const { clientX: startX, clientY: startY } = resizeData.options.event!;
    beginResizeContent(resizeData, ({ clientX: endX, clientY: endY }) => {
      updateDom({ startX, startY, endX, endY });
    });
  }
}

/** 触发调整事件 */
function updateResize(status: ResizeStatus, resizeData: ResizeData) {
  resizeData.options.callback?.(status, resizeData.options.direction || '');
}

/** 使用指针调整大小 */
function beginResizeContent(resizeData: ResizeData, resizingContent: (moveEvent: PointerEvent) => void) {
  if (!resizeData.options.target) { return; }
  if (!resizeData.options.event) { return; }
  // 开始
  resizeData.options.target.setPointerCapture(resizeData.options.event.pointerId);
  updateResize('prepare', resizeData);
  // 移动
  resizeData.options.target.onpointermove = (moveEvent) => {
    resizingContent(moveEvent);
    updateResize('moving', resizeData);
  };
  // 结束
  resizeData.options.target.onpointerup = (overEvent) => {
    if (!resizeData.options.target) { return; }
    resizeData.options.target.onpointermove = null;
    resizeData.options.target.releasePointerCapture(overEvent.pointerId);
    updateResize('idle', resizeData);
  };
}
