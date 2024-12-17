/**
 * 颜色变量名
 * @returns --mt-${ary.join('-')}
 */
export const colorName = (...ary: (string | number)[]) => `--mt-${ary.join('-')}`;

/** 获取hsl颜色值 */
export const hslValue = (color?: string) => color?.match(/\d+\s[\d\s]+/)?.[0] || '';
