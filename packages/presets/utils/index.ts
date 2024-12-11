import { mc } from 'magic-color';

/**
 * 颜色变量名
 * @returns --mt-${name}-${key}
 */
export const colorName = (name: string, key: string | number) => `--mt-${name}-${key}`;

/** 获取hsl颜色值 */
export const hslValue = (color?: string) => color?.match(/\d+\s[\d\s]+/)?.[0] || '';

/**
 * 获取hsl颜色值
 * @param name 颜色名称
 * @param color 颜色值
 * @return 返回hsl颜色值组合
 *
 * @example
 * ```ts
 * getHslColors('primary', '#405FC4') =>  [[ '--mt-primary-DEFAULT', '52 81 178' ],[ '--mt-primary-50', '241 246 253' ],...]
 * ```
 */
export function getHslColors(name: string, color: string) {
  const theme = mc.theme(color, { type: 'hsl' });
  // 转化格式： { 50: 'hsl(215 75 97)', 100: 'hsl(216 68 93)', ... } ==> [[`--mt-${name}-50`: '215 75 97'], ...]
  const colors = Object.entries(theme).map(([k, v]) => [colorName(name, k), hslValue(v)]);
  colors.unshift([colorName(name, 'DEFAULT'), mc(color).hsl().join(' ')]);
  return colors;
}
