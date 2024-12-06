/** root color name */
export const rootColor = (name: string, key: string | number) => `--mt-${name}-${key}`;

/** 移除rgb颜色前缀 */
export const rgbValue = (color: string) => color.replace(/rgb\((.*)\)/, '$1');
