import type { Preflight } from 'unocss';
import { mc } from 'magic-color';
import { colorName, rgbValue } from '../utils';

export const preflights: Preflight[] = [{
  getCSS: ({ theme }: Record<string, any>) => `
    ${toRootColors('primary', `rgb(${rgbValue(theme.colors?.primary?.DEFAULT)})`)}

    :root {
      --mt-primary-DEFAULT: var(--mt-primary-500);
      --mt-primary-text: var(--mt-primary-100);
      --mt-primary-text-invert: var(--mt-primary-950);
    }

    .dark {
      --mt-primary-DEFAULT: var(--mt-primary-600);
      --mt-primary-text: var(--mt-primary-950);
      --mt-primary-text-invert: var(--mt-primary-100);
    }

    ::selection {
      color: rgb(var(--mt-primary-DEFAULT));
      background-color: rgb(var(--mt-primary-text));
    }
  `,
}];

/**
 * 定义全局颜色配置
 * @param options 名称与颜色映射配置
 * @returns 返回作用于对应颜色的全局 CSS 规则
 */
export function preflightColors(options: Record<string, string>): Preflight {
  return { getCSS: () => Object.entries(options).map(([name, color]) => toRootColors(name, color)).join('\n ') };
}

function toRootColors(name: string, color: string) {
  const colors = getRgbColors(name, color);
  return `:root {
  ${colors.map(([name, color]) => `${name}: ${color};`).join('\n ')}
  }`;
}

/**
 * 获取rgb颜色值
 * @param name 颜色名称
 * @param color 颜色值
 * @return 返回rgb颜色值组合
 *
 * @example
 * ```ts
 * getRgbColors('primary', '#3451b2') =>  [[ '--mt-primary-color', '52 81 178' ],[ '--mt-primary-50', '241 246 253' ],...]
 * ```
 */
export function getRgbColors(name: string, color: string) {
  const theme = mc.theme(color, { type: 'rgb' });
  // 转化格式： { 50: 'rgb(255, 255, 255)', 100: 'rgb(244, 244, 245)', ... } ==> [[`--mt-${name}-50`: '255 255 255'], ...]
  const colors = Object.entries(theme).map(([k, v]) => [colorName(name, k), rgbValue(v)]);
  colors.unshift([colorName(name, 'color'), mc(color).toRgb().values.join(' ')]);
  return colors;
}
