import type { CSSValue } from 'unocss';
import type { CustomShortcut, PresetMtOptions } from '../types.ts';
import { resolvePrimaryColor } from '../utils';

export function button(options?: PresetMtOptions): CustomShortcut[] {
  const buttonClasses: Record<string, string> = Object.assign({
    default: 'c-gray-500 b-gray-400 bg-transparent b-1 b-solid cursor-pointer hover:(c-primary-500 b-primary-500)',
    pale: 'c-gray-500 b-gray-400 bg-transparent hover:(c-primary-500 b-primary-500 bg-primary-500/10)',
    medium: 'c-primary-500 b-primary-400 bg-transparent hover:(c-primary-400 b-primary-400 bg-primary-500/10)',
    bright: 'c-primary-500 b-primary-400 bg-primary-500/10 hover:(c-white b-primary-500 bg-primary-500)',
    deep: 'c-white b-primary-500 bg-primary-500 hover:(c-white b-primary-500/80 bg-primary-500/80)',
    xs: 'px-1.5 py-0.5 text-xs rounded-0.75',
    sm: 'px-2 py-1 text-sm font-400 rounded-1',
    md: 'px-2.5 py-1.5 text-sm font-500 rounded-1.25',
    lg: 'px-3 py-2 text-base font-600 rounded-1.5',
  }, options?.custom?.button);

  const p = options?.prefix || '';
  return [
    [
      `${p}btn`,
      `${buttonClasses.md} ${buttonClasses.default}`,
    ],
    [
      new RegExp(`^${p}btn-(.+)$`),
      ([, s], { theme }) => {
        const values: (CSSValue | string)[] = [];
        if (s in buttonClasses) {
          values.push(buttonClasses[s]);
        }
        else {
          const colors = resolvePrimaryColor(s, theme);
          if (colors) {
            values.push(colors);
          }
          // values.push({ '--mt-primary-500': 'var(--mt-primary-500, 0 0 0)' });
        }
        return values;
      },
    ],
  ];
}
