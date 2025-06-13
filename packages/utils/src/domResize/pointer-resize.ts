import type { ResizeData, ResizingFn } from './core';
import { resizeByDirection, updateResize } from './core';

export function resizeByPointer(resizeData: ResizeData) {
  if (!resizeData.options.event) {
    return;
  }
  resizeByDirection(resizeData, resizeHorizontal, resizeVertical, resizeHorizontalAndVertical);
}

/** 调整水平方向 */
function resizeHorizontal(resizeData: ResizeData, resizingWidthFn: ResizingFn) {
  const { setStyleWidthOrHeight, setStyleOffset, moveDistance } = resizeData;
  const { clientX: startX } = resizeData.options.event!;
  const { offsetY, pointerDir } = resizeData.domAttrs;
  beginResizeContent(resizeData, ({ clientX: endX }) => {
    const { value: width, offset: offsetX } = resizingWidthFn(startX, endX, 'x', pointerDir.x);
    if (!moveDistance.x) { return; }
    setStyleWidthOrHeight(width, 'width');
    setStyleOffset(offsetX, offsetY);
    updateResize('moving', resizeData, moveDistance);
  });
}

/** 调整垂直方向 */
function resizeVertical(resizeData: ResizeData, resizingHeightFn: ResizingFn) {
  const { setStyleWidthOrHeight, setStyleOffset, moveDistance } = resizeData;
  const { clientY: startY } = resizeData.options.event!;
  const { offsetX, pointerDir } = resizeData.domAttrs;
  beginResizeContent(resizeData, ({ clientY: endY }) => {
    const { value: height, offset: offsetY } = resizingHeightFn(startY, endY, 'y', pointerDir.y);
    if (!moveDistance.y) { return; }
    setStyleWidthOrHeight(height, 'height');
    setStyleOffset(offsetX, offsetY);
    updateResize('moving', resizeData, moveDistance);
  });
}

/** 调整水平与垂直方向 */
function resizeHorizontalAndVertical(resizeData: ResizeData, resizingWidthFn: ResizingFn, resizingHeightFn: ResizingFn) {
  const { setStyleWidthOrHeight, setStyleOffset, moveDistance } = resizeData;
  const { aspectRatio, pointerDir } = resizeData.domAttrs;
  const updateDom = (options: { startX: number, startY: number, endX: number, endY: number }) => {
    const { value: width, offset: offsetX } = resizingWidthFn(options.startX, options.endX, 'x', pointerDir.x);
    const { value: height, offset: offsetY } = resizingHeightFn(options.startY, options.endY, 'y', pointerDir.y);
    if (!moveDistance.x && !moveDistance.y) { return; }
    setStyleWidthOrHeight(width, 'width');
    setStyleWidthOrHeight(height, 'height');
    setStyleOffset(offsetX, offsetY);
    updateResize('moving', resizeData, moveDistance);
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

const resizePointerIdSet = new Set<number>();

/** 使用指针调整大小 */
function beginResizeContent(resizeData: ResizeData, moveHandler: (moveEvent: PointerEvent) => void) {
  const target = resizeData.targetRef.deref();
  if (!target) { return; }
  if (!resizeData.options.event) { return; }
  // 开始
  const pointerId = resizeData.options.event.pointerId;
  if (!resizePointerIdSet.has(pointerId)) {
    resizePointerIdSet.add(pointerId);
    target.setPointerCapture(resizeData.options.event.pointerId);
  }
  // 移动
  target.addEventListener('pointermove', moveHandler);
  // 结束
  const upHandler = (overEvent: PointerEvent) => {
    const targetDeref = resizeData.targetRef.deref();
    targetDeref?.releasePointerCapture(overEvent.pointerId);
    resizePointerIdSet.delete(overEvent.pointerId);
    targetDeref?.removeEventListener('pointermove', moveHandler);
    targetDeref?.removeEventListener('pointerup', upHandler);
    targetDeref?.removeEventListener('pointercancel', upHandler);
    updateResize('idle', resizeData, { x: 0, y: 0 });
  };
  target.addEventListener('pointerup', upHandler);
  target.addEventListener('pointercancel', upHandler);
  updateResize('prepare', resizeData, { x: 0, y: 0 });
}
