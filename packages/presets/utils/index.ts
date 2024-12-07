/** 颜色变量名 */
export const colorName = (name: string, key: string | number) => `--mt-${name}-${key}`;

/** 获取RGB颜色值 */
export const rgbValue = (color?: string) => color?.match(/\d+\s[\d\s]+/)?.[0] || '';
