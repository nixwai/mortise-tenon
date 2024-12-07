import type { Preflight } from 'unocss';
import { mc } from 'magic-color';
import { rgbValue, rootColor } from '../utils';

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
  const theme = mc.theme(color, { type: 'rgb' });
  // 转化格式： { 50: 'rgb(255, 255, 255)', 100: 'rgb(244, 244, 245)', ... } ==> ['--mt-${name}-50: 255, 255, 255', ...]
  const colors = Object.entries(theme).map(([k, v]) => `${rootColor(name, k)}: ${rgbValue(v)};`);
  return `:root {
  ${rootColor(name, 'color')}: ${mc(color).toRgb().values.join(' ')};
  ${colors.join('\n ')}
  }`;
}
