import type { ResizeData, ResizingFn } from './core';
import { updateResize } from './core';

export function resizeByPointer(resizeData: ResizeData) {
  if (!resizeData.options.event) {
    return;
  }
  const { options, resizingBackward, resizingForward } = resizeData;
  switch (options.direction) {
    case 'left':
      resizeHorizontal(resizeData, resizingBackward);
      break;
    case 'right':
      resizeHorizontal(resizeData, resizingForward);
      break;
    case 'top':
      resizeVertical(resizeData, resizingBackward);
      break;
    case 'bottom':
      resizeVertical(resizeData, resizingForward);
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
  }
}

/** 调整水平方向 */
function resizeHorizontal(resizeData: ResizeData, resizingWidthFn: ResizingFn) {
  const { setStyleWidthOrHeight, setStyleOffset } = resizeData;
  const { clientX: startX } = resizeData.options.event!;
  const { offsetY } = resizeData.domAttrs;
  beginResizeContent(resizeData, ({ clientX: endX }) => {
    const { value: width, offset: offsetX } = resizingWidthFn(startX, endX, 'x');
    setStyleWidthOrHeight(width, 'width');
    setStyleOffset(offsetX, offsetY);
  });
}

/** 调整垂直方向 */
function resizeVertical(resizeData: ResizeData, resizingHeightFn: ResizingFn) {
  const { setStyleWidthOrHeight, setStyleOffset } = resizeData;
  const { clientY: startY } = resizeData.options.event!;
  const { offsetX } = resizeData.domAttrs;
  beginResizeContent(resizeData, ({ clientY: endY }) => {
    const { value: height, offset: offsetY } = resizingHeightFn(startY, endY, 'y');
    setStyleWidthOrHeight(height, 'height');
    setStyleOffset(offsetX, offsetY);
  });
}

/** 调整水平与垂直方向 */
function resizeHorizontalAndVertical(resizeData: ResizeData, resizingWidthFn: ResizingFn, resizingHeightFn: ResizingFn) {
  const { setStyleWidthOrHeight, setStyleOffset } = resizeData;
  const { aspectRatio } = resizeData.domAttrs;
  const updateDom = (options: { startX: number, startY: number, endX: number, endY: number }) => {
    const { value: width, offset: offsetX } = resizingWidthFn(options.startX, options.endX, 'x');
    const { value: height, offset: offsetY } = resizingHeightFn(options.startY, options.endY, 'y');
    setStyleWidthOrHeight(width, 'width');
    setStyleWidthOrHeight(height, 'height');
    setStyleOffset(offsetX, offsetY);
  };

  if (resizeData.options.lockAspectRatio) {
    // 固定比例时，宽度根据鼠标位置决定，高度的调整根据宽度的变化与元素宽高比例决定
    const { clientX: startX } = resizeData.options.event!;
    const dir = resizingWidthFn === resizingHeightFn ? 1 : -1; // 宽高调整的方向不是同向时，需要反向调整高度
    beginResizeContent(resizeData, ({ clientX: endX }) => {
      const startY = (dir * startX) / aspectRatio;
      const endY = (dir * endX) / aspectRatio;
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

/** 使用指针调整大小 */
function beginResizeContent(resizeData: ResizeData, resizingContent: (moveEvent: PointerEvent) => void) {
  const target = resizeData.targetRef.deref();
  if (!target) { return; }
  if (!resizeData.options.event) { return; }
  const moveHandler = (moveEvent: PointerEvent) => {
    resizingContent(moveEvent);
    updateResize('moving', resizeData, resizeData.moveDistance);
  };
  const upHandler = (overEvent: PointerEvent) => {
    const targetDeref = resizeData.targetRef.deref();
    targetDeref?.releasePointerCapture(overEvent.pointerId);
    targetDeref?.removeEventListener('pointermove', moveHandler);
    targetDeref?.removeEventListener('pointerup', upHandler);
    updateResize('idle', resizeData, { x: 0, y: 0 });
  };
  // 开始
  target.setPointerCapture(resizeData.options.event.pointerId);
  updateResize('prepare', resizeData, { x: 0, y: 0 });
  // 移动
  target.addEventListener('pointermove', moveHandler);
  // 结束
  target.addEventListener('pointerup', upHandler);
}
