import type { ResizeData, ResizingFn } from './core';
import { resizeByDirection, updateResize } from './core';

export function resizeByManual(resizeData: ResizeData) {
  if (!resizeData.options.distanceX && !resizeData.options.distanceY) {
    return;
  }
  resizeByDirection(resizeData, resizeHorizontal, resizeVertical, resizeHorizontalAndVertical);
}

/** 调整水平方向 */
function resizeHorizontal(resizeData: ResizeData, resizingWidthFn: ResizingFn) {
  const { distanceX = 0 } = resizeData.options;
  const { width: domWidth, offsetY } = resizeData.domAttrs;
  const dir = resizingWidthFn === resizeData.resizingBackward ? -1 : 1;
  const { value: width, offset: offsetX } = resizingWidthFn(domWidth, domWidth + dir * distanceX, 'x');
  if (!resizeData.moveDistance.x) { return; }
  resizeData.setStyleWidthOrHeight(width, 'width');
  resizeData.setStyleOffset(offsetX, offsetY);
  updateResize('manual', resizeData, resizeData.moveDistance);
}

/** 调整垂直方向 */
function resizeVertical(resizeData: ResizeData, resizingHeightFn: ResizingFn) {
  const { distanceY = 0 } = resizeData.options;
  const { height: domHeight, offsetX } = resizeData.domAttrs;
  const dir = resizingHeightFn === resizeData.resizingBackward ? -1 : 1;
  const { value: height, offset: offsetY } = resizingHeightFn(domHeight, domHeight + dir * distanceY, 'y');
  if (!resizeData.moveDistance.y) { return; }
  resizeData.setStyleWidthOrHeight(height, 'height');
  resizeData.setStyleOffset(offsetX, offsetY);
  updateResize('manual', resizeData, resizeData.moveDistance);
}

/** 调整水平与垂直方向 */
function resizeHorizontalAndVertical(resizeData: ResizeData, resizingWidthFn: ResizingFn, resizingHeightFn: ResizingFn) {
  const { lockAspectRatio, distanceX = 0, distanceY = 0 } = resizeData.options;
  const { width: domWidth, height: domHeight, aspectRatio } = resizeData.domAttrs;

  const updateDom = (options: { distanceX: number, distanceY: number }) => {
    const dirX = resizingWidthFn === resizeData.resizingBackward ? -1 : 1;
    const dirY = resizingHeightFn === resizeData.resizingBackward ? -1 : 1;
    const { value: width, offset: offsetX } = resizingWidthFn(domWidth, domWidth + dirX * options.distanceX, 'x');
    const { value: height, offset: offsetY } = resizingHeightFn(domHeight, domHeight + dirY * options.distanceY, 'y');
    if (!resizeData.moveDistance.x && !resizeData.moveDistance.y) { return; }
    resizeData.setStyleWidthOrHeight(width, 'width');
    resizeData.setStyleWidthOrHeight(height, 'height');
    resizeData.setStyleOffset(offsetX, offsetY);
    updateResize('manual', resizeData, resizeData.moveDistance);
  };

  if (lockAspectRatio) {
    if (distanceX) {
      updateDom({ distanceX, distanceY: distanceX / aspectRatio });
    }
    else {
      updateDom({ distanceX: distanceY * aspectRatio, distanceY });
    }
  }
  else {
    updateDom({ distanceX, distanceY });
  }
}
