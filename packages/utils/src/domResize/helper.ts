/**
 * 调节函数
 * @param startLocation 开始的坐标
 * @param endLocation 结束的坐标
 * @param originValue 原始长度值
 * @param originOffset 原始偏移量
 */
export type ResizingFn = (startLocation: number, endLocation: number, originValue: number, originOffset: number) => { value: number, offset: number };

/** 向前调整（往右或者往下） */
export const resizingForward: ResizingFn = (startLocation, endLocation, originValue, originOffset) => {
  const move = startLocation - endLocation;
  const value = originValue - move;
  return value > 0 ? { value, offset: originOffset } : { value, offset: originOffset + value };
};

/** 向后调整（往左或者往上） */
export const resizingBackward: ResizingFn = (startLocation, endLocation, originValue, originOffset) => {
  const move = startLocation - endLocation;
  const value = originValue + move;
  return value > 0 ? { value, offset: originOffset - move } : { value, offset: originOffset + originValue };
};

const matrixValueReg = /(matrix3?d?)\((.+)\)/;

export function useResizeDomAttrs() {
  const domAttrs = {
    width: 0,
    height: 0,
    aspectRatio: 0,
    matrix: {
      name: 'matrix',
      values: [1, 0, 0, 1, 0, 0],
      translateX: 0,
      translateY: 0,
      xIndex: 4,
      yIndex: 5,
    },
  };

  function getResizeDomAttrs(dom: HTMLDivElement) {
    const { width, height, transform } = window.getComputedStyle(dom);
    const matchValue = transform.match(matrixValueReg);
    domAttrs.matrix.name = matchValue?.[1] || 'matrix';
    domAttrs.matrix.values = matchValue?.[2]?.split(',').map(Number) || [1, 0, 0, 1, 0, 0];
    if (domAttrs.matrix.values.length > 6) {
      domAttrs.matrix.xIndex = 12;
      domAttrs.matrix.yIndex = 13;
    }
    else {
      domAttrs.matrix.xIndex = 4;
      domAttrs.matrix.yIndex = 5;
    }
    domAttrs.matrix.translateX = domAttrs.matrix.values[domAttrs.matrix.xIndex];
    domAttrs.matrix.translateY = domAttrs.matrix.values[domAttrs.matrix.yIndex];
    domAttrs.width = Number(width.replace('px', ''));
    domAttrs.height = Number(height.replace('px', ''));
    domAttrs.aspectRatio = domAttrs.width / domAttrs.height;
  }

  return { domAttrs, getResizeDomAttrs };
}
