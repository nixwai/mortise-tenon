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
      beforeTranslateValueStr: '1,0,0,1',
      afterTranslateValueStr: '',
    },
  };

  function getResizeDomAttrs(dom: HTMLDivElement) {
    const { width, height, transform } = window.getComputedStyle(dom);
    const matchValue = transform.match(matrixValueReg);
    domAttrs.matrix.name = matchValue?.[1] || 'matrix';
    domAttrs.matrix.values = matchValue?.[2]?.split(',').map(Number) || [1, 0, 0, 1, 0, 0];
    if (domAttrs.matrix.values.length > 6) {
      // matrix3d(https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/matrix3d)
      domAttrs.matrix.translateX = domAttrs.matrix.values[12];
      domAttrs.matrix.translateY = domAttrs.matrix.values[13];
      domAttrs.matrix.beforeTranslateValueStr = `${domAttrs.matrix.values.slice(0, 12).join(',')},`;
      domAttrs.matrix.afterTranslateValueStr = `,${domAttrs.matrix.values.slice(14).join(',')}`;
    }
    else {
      // matrix(https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/matrix)
      domAttrs.matrix.translateX = domAttrs.matrix.values[4];
      domAttrs.matrix.translateY = domAttrs.matrix.values[5];
      domAttrs.matrix.beforeTranslateValueStr = `${domAttrs.matrix.values.slice(0, 4).join(',')},`;
      domAttrs.matrix.afterTranslateValueStr = '';
    }
    domAttrs.width = Number(width.replace('px', ''));
    domAttrs.height = Number(height.replace('px', ''));
    domAttrs.aspectRatio = domAttrs.width / domAttrs.height;
  }

  return { domAttrs, getResizeDomAttrs };
}
