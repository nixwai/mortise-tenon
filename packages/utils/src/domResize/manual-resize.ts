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
  const { value: width, offset: offsetX, otherOffset: otherOffsetY } = resizingWidthFn(domWidth, domWidth + dir * distanceX, 'x');
  if (!resizeData.moveDistance.x) { return; }
  resizeData.setStyleWidthOrHeight(width, 'width');
  resizeData.setStyleOffset(offsetX, offsetY + otherOffsetY);
  updateResize('manual', resizeData, resizeData.moveDistance);
}

/** 调整垂直方向 */
function resizeVertical(resizeData: ResizeData, resizingHeightFn: ResizingFn) {
  const { distanceY = 0 } = resizeData.options;
  const { height: domHeight, offsetX } = resizeData.domAttrs;
  const dir = resizingHeightFn === resizeData.resizingBackward ? -1 : 1;
  const { value: height, offset: offsetY, otherOffset: otherOffsetX } = resizingHeightFn(domHeight, domHeight + dir * distanceY, 'y');
  if (!resizeData.moveDistance.y) { return; }
  resizeData.setStyleWidthOrHeight(height, 'height');
  resizeData.setStyleOffset(offsetX - otherOffsetX, offsetY);
  updateResize('manual', resizeData, resizeData.moveDistance);
}

/** 调整水平与垂直方向 */
function resizeHorizontalAndVertical(resizeData: ResizeData, resizingWidthFn: ResizingFn, resizingHeightFn: ResizingFn) {
  const { setStyleWidthOrHeight, setStyleOffset, moveDistance } = resizeData;
  const { lockAspectRatio, distanceX = 0, distanceY = 0 } = resizeData.options;
  const { width: domWidth, height: domHeight, aspectRatio } = resizeData.domAttrs;

  const updateDom = (options: { distanceX: number, distanceY: number }) => {
    const dirX = resizingWidthFn === resizeData.resizingBackward ? -1 : 1;
    const dirY = resizingHeightFn === resizeData.resizingBackward ? -1 : 1;
    const { value: width, offset: offsetX, otherOffset: otherOffsetY } = resizingWidthFn(domWidth, domWidth + dirX * options.distanceX, 'x');
    const { value: height, offset: offsetY, otherOffset: otherOffsetX } = resizingHeightFn(domHeight, domHeight + dirY * options.distanceY, 'y');
    if ((!moveDistance.x && !moveDistance.y) // 移动距离为0时，不更新dom
      || (lockAspectRatio && (!moveDistance.x || !moveDistance.y))) { // 锁定比例时，任意一个方向的移动距离为0时，不更新dom
      return;
    }
    setStyleWidthOrHeight(width, 'width');
    setStyleWidthOrHeight(height, 'height');
    setStyleOffset(offsetX - otherOffsetX, offsetY + otherOffsetY);
    updateResize('manual', resizeData, moveDistance);
  };

  if (lockAspectRatio) {
    if (distanceX) {
      let multiple = !moveDistance.dirX && moveDistance.dirY ? 2 : 1;
      multiple = moveDistance.dirX && !moveDistance.dirY ? 0.5 : multiple;
      updateDom({ distanceX, distanceY: distanceX / aspectRatio * multiple });
    }
    else {
      let multiple = !moveDistance.dirX && moveDistance.dirY ? 0.5 : 1;
      multiple = moveDistance.dirX && !moveDistance.dirY ? 2 : multiple;
      updateDom({ distanceX: distanceY * aspectRatio * multiple, distanceY });
    }
  }
  else {
    updateDom({ distanceX, distanceY });
  }
}
