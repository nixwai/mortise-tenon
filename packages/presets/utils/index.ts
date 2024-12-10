import { mc } from 'magic-color';

/**
 * 颜色变量名
 * @returns --mt-${name}-${key}
 */
export const colorName = (name: string, key: string | number) => `--mt-${name}-${key}`;

/** 获取RGB颜色值 */
export const rgbValue = (color?: string) => color?.match(/\d+\s[\d\s]+/)?.[0] || '';

/**
 * 获取rgb颜色值
 * @param name 颜色名称
 * @param color 颜色值
 * @return 返回rgb颜色值组合
 *
 * @example
 * ```ts
 * getRgbColors('primary', '#405FC4') =>  [[ '--mt-primary-color', '52 81 178' ],[ '--mt-primary-50', '241 246 253' ],...]
 * ```
 */
export function getRgbColors(name: string, color: string) {
  const theme = mc.theme(color, { type: 'rgb' });
  // 转化格式： { 50: 'rgb(255, 255, 255)', 100: 'rgb(244, 244, 245)', ... } ==> [[`--mt-${name}-50`: '255 255 255'], ...]
  const colors = Object.entries(theme).map(([k, v]) => [colorName(name, k), rgbValue(v)]);
  colors.unshift([colorName(name, 'color'), mc(color).toRgb().values.join(' ')]);
  return colors;
}
