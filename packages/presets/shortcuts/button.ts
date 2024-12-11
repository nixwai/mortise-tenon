import type { CSSValue } from 'unocss';
import type { CustomShortcut, PresetMtOptions } from '../types.ts';
import { resolveContextColor } from '../utils';

const buttonPreset = {
  default: 'c-gray-600 b-gray-600/80 bg-transparent b-1 b-solid cursor-pointer hover:(c-context b-context)',
  pale: 'c-gray-600 b-gray-600/80 bg-transparent hover:(c-context b-context bg-context/10)',
  medium: 'c-context b-context/80 bg-transparent hover:(c-context/80 b-context/80 bg-context/10)',
  bright: 'c-context b-context/80 bg-context/10 hover:(c-white b-context bg-context)',
  deep: 'c-white b-context bg-context hover:(c-white b-context/80 bg-context/80)',
  xs: 'px-1.5 py-0.5 text-xs rounded-0.75',
  sm: 'px-2 py-1 text-sm font-400 rounded-1',
  md: 'px-2.5 py-1.5 text-sm font-500 rounded-1.25',
  lg: 'px-3 py-2 text-base font-600 rounded-1.5',
};

export function button(options?: PresetMtOptions): CustomShortcut[] {
  const buttonClasses: Record<string, string> = Object.assign(buttonPreset, options?.custom?.button);

  const p = options?.prefix || '';
  return [
    [
      `${p}btn`,
      [buttonClasses.md, buttonClasses.default],
    ],
    [
      new RegExp(`^${p}btn-(.+)$`),
      ([, s], { theme }) => {
        const values: (CSSValue | string)[] = [];
        if (s in buttonClasses) {
          values.push(buttonClasses[s]);
        }
        else {
          const colors = resolveContextColor(s, theme);
          if (colors) {
            values.push(colors);
          }
        }
        return values;
      },
    ],
  ];
}
