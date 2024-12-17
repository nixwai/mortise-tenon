import type { Preflight } from 'unocss';
import { mc } from 'magic-color';
import { colorName, hslValue } from '../utils';

export const preflights: Preflight[] = [{
  getCSS: ({ theme }: Record<string, any>) => {
    const defaultColor: string | undefined = theme.colors?.primary?.DEFAULT;
    const colorValue = defaultColor?.match(/\d+\)/g)?.map((v: string) => v.replace(')', '')).join(' ');
    return `
      ${toRootColors('primary', `hsl(${colorValue})`)}

      :root {
      --mt-primary-color: var(--mt-primary-500);
      --mt-primary-text: var(--mt-primary-100);
      --mt-primary-text-invert: var(--mt-primary-950);
      }

      .dark {
      --mt-primary-color: var(--mt-primary-600);
      --mt-primary-text: var(--mt-primary-950);
      --mt-primary-text-invert: var(--mt-primary-100);
      }

      ::selection {
        color: hsl(var(--mt-primary-color));
        background-color: hsl(var(--mt-primary-text));
      }
    `;
  },
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
  if (!mc.valid(color)) {
    return '';
  }
  const theme = mc.theme(color, { type: 'hsl' });
  // 转化格式： { 50: 'hsl(215 75 97)', 100: 'hsl(216 68 93)', ... } ==> [[`--mt-${name}-50`: '215 75 97'], ...]
  const colors = Object.entries(theme).map(([k, v]) => [colorName(name, k), hslValue(v)]);
  colors.unshift([colorName(name, 'DEFAULT'), mc(color).hsl().join(' ')]);
  return `:root {
    ${colors.map(([name, color]) => `${name}: ${color};`).join('\n')}
  }`;
}
