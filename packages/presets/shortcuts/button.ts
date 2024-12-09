import type { CustomShortcut, PresetMtOptions, SizeType } from '../types.ts';
// import { parseColor } from 'unocss';

export function button(options?: PresetMtOptions): CustomShortcut[] {
  const buttonSize: Record<SizeType, string> = Object.assign({
    xs: 'px-1.5 py-0.5 text-xs rounded-0.75',
    sm: 'px-2 py-1 text-sm font-400 rounded-1',
    md: 'px-2.5 py-1.5 text-sm font-500 rounded-1.25',
    lg: 'px-3 py-2 text-base font-600 rounded-1.5',
  }, options?.custom?.button);

  const p = options?.prefix || '';
  return [
    [
      `${p}btn`,
      `${p}btn-md c-gray-500 b-1 b-solid b-gray-400 bg-transparent cursor-pointer hover:(c-primary-500 b-primary-500)`,
    ],
    [
      new RegExp(`^${p}btn-(.+)$`),
      ([, s]) => {
        if (s in buttonSize)
          return buttonSize[s as SizeType];
        return `hover:(c-${s}-500 b-${s}-500)`;
      },
    ],
    [
      new RegExp(`^${p}btn-pale[-]*(.*)$`),
      ([, s]) => {
        s = s || 'primary';
        return `c-gray-500 b-gray-400 bg-transparent hover:(c-${s}-500 b-${s}-400 bg-${s}-400/8)`;
      },
    ],
    [
      new RegExp(`^${p}btn-bright[-]*(.*)$`),
      ([, s]) => {
        s = s || 'primary';
        return `c-${s}-500 b-${s}-400 bg-${s}-400/8 hover:(c-white b-${s}-400 bg-${s}-400)`;
      },
    ],
    [
      new RegExp(`^${p}btn-deep[-]*(.*)$`),
      ([, s]) => {
        s = s || 'primary';
        return `c-white b-${s}-400 bg-${s}-400 hover:(c-white b-${s}-400/80 bg-${s}-400/80)`;
      },
    ],
  ];
}
