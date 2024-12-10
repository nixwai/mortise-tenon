import type { Theme } from '@unocss/preset-mini';
import { parseColor } from '@unocss/preset-mini';
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

/** 解析字符串对应的颜色 */
export function resolvePrimaryColor(str: string, theme: Theme) {
  if (str.includes('primary')) {
    return undefined;
  }
  const parsedColor = parseColor(str, theme);
  if (parsedColor) {
    const { color, name } = parsedColor;
    if (color && color.includes('var(--mt-')) {
      const keys = ['', '-50', '-100', '-200', '-300', '-400', '-500', '-600', '-700', '-800', '-900'];

      return Object.fromEntries(keys.map((key) => {
        const colorName = `${name}${key}`;
        const colorValue = parseColor(colorName, theme)?.cssColor?.components?.[0] || undefined;
        return [`--mt-primary${key || '-color'}`, colorValue];
      }));
    }
    if (color && mc.valid(color)) {
      const colors = getRgbColors('primary', color);
      return Object.fromEntries(colors);
    }
  }
  return undefined;
}
