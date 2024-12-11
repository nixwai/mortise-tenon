import type { Preflight } from 'unocss';
import { getRgbColors, rgbValue } from '../utils';

export const preflights: Preflight[] = [{
  getCSS: ({ theme }: Record<string, any>) => `
    ${toRootColors('primary', `rgb(${rgbValue(theme.colors?.primary?.DEFAULT)})`)}

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
      color: rgb(var(--mt-primary-color));
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
