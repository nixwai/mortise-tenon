import type { CSSValue } from 'unocss';
import type { CustomShortcut, PresetMtOptions } from '../types.ts';
import { getContextLightness, resolveContextColor } from '../utils/context.ts';

const buttonPreset = {
  default: 'c-gray-600 b-gray-500 bg-transparent b-1 b-solid cursor-pointer hover:(c-context-500 b-context-400)',
  pale: 'c-gray-600 b-gray-500 bg-transparent hover:(c-context-500 b-context-400 bg-context-500/10)',
  medium: 'c-context-500 b-context-400 bg-transparent hover:(c-context-400 b-context-400 bg-context-500/10)',
  bright: 'c-context-500 b-context-400 bg-context-500/10 hover:(c-white b-context-500 bg-context-500)',
  deep: 'c-white b-context-500 bg-context-500 hover:(c-white b-context-500/80 bg-context-500/80)',
  xs: 'px-1.5 py-0.5 text-xs rounded-0.75',
  sm: 'px-2 py-1 text-sm font-400 rounded-1',
  md: 'px-2.5 py-1.5 text-sm font-500 rounded-1.25',
  lg: 'px-3 py-2 text-base font-600 rounded-1.5',
};

export function button(options?: PresetMtOptions): CustomShortcut[] {
  const p = options?.prefix || '';
  const buttonClasses: Record<string, string> = Object.assign(buttonPreset, options?.custom?.button);
  const contextLightness = getContextLightness(buttonClasses);
  return [
    [
      `${p}btn`,
      [buttonClasses.md, buttonClasses.default],
    ],
    [
      new RegExp(`^${p}btn-?(.+)$`),
      ([, s], { theme }) => {
        const values: (CSSValue | string)[] = [];
        if (s in buttonClasses) {
          values.push(buttonClasses[s]);
        }
        else {
          const colors = resolveContextColor(s, theme, contextLightness);
          if (colors) {
            values.push(colors);
          }
        }
        return values;
      },
    ],
  ];
}
