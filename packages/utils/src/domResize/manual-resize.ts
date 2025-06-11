import type { ResizeData, ResizingFn } from './core';
import { updateResize } from './core';

export function resizeByManual(resizeData: ResizeData) {
  if (!resizeData.options.distanceX && !resizeData.options.distanceY) {
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
      break;
  }
  updateResize('manual', resizeData, resizeData.moveDistance);
}

/** 调整水平方向 */
function resizeHorizontal(resizeData: ResizeData, resizingWidthFn: ResizingFn) {
  const { distanceX = 0 } = resizeData.options;
  const { width: domWidth, offsetY } = resizeData.domAttrs;
  const dir = resizingWidthFn === resizeData.resizingForward ? 1 : -1;
  const { value: width, offset: offsetX } = resizingWidthFn(domWidth, domWidth + dir * distanceX, 'x');
  resizeData.setStyleWidthOrHeight(width, 'width');
  resizeData.setStyleOffset(offsetX, offsetY);
}

/** 调整垂直方向 */
function resizeVertical(resizeData: ResizeData, resizingHeightFn: ResizingFn) {
  const { distanceY = 0 } = resizeData.options;
  const { height: domHeight, offsetX } = resizeData.domAttrs;
  const dir = resizingHeightFn === resizeData.resizingForward ? 1 : -1;
  const { value: height, offset: offsetY } = resizingHeightFn(domHeight, domHeight + dir * distanceY, 'y');
  resizeData.setStyleWidthOrHeight(height, 'height');
  resizeData.setStyleOffset(offsetX, offsetY);
}

/** 调整水平与垂直方向 */
function resizeHorizontalAndVertical(resizeData: ResizeData, resizingWidthFn: ResizingFn, resizingHeightFn: ResizingFn) {
  const { lockAspectRatio, distanceX = 0, distanceY = 0 } = resizeData.options;
  const { width: domWidth, height: domHeight, aspectRatio } = resizeData.domAttrs;

  const updateDom = (options: { distanceX: number, distanceY: number }) => {
    const dirX = resizingWidthFn === resizeData.resizingForward ? 1 : -1;
    const dirY = resizingHeightFn === resizeData.resizingForward ? 1 : -1;
    const { value: width, offset: offsetX } = resizingWidthFn(domWidth, domWidth + dirX * options.distanceX, 'x');
    const { value: height, offset: offsetY } = resizingHeightFn(domHeight, domHeight + dirY * options.distanceY, 'y');
    resizeData.setStyleWidthOrHeight(width, 'width');
    resizeData.setStyleWidthOrHeight(height, 'height');
    resizeData.setStyleOffset(offsetX, offsetY);
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
