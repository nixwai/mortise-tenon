import type { CustomShortcut, PresetMtOptions, SizeType } from '../types.ts';

export function button(options?: PresetMtOptions): CustomShortcut[] {
  const buttonSize: Record<SizeType, string> = Object.assign({
    xs: 'px-2.5 py-1.5 rounded-4px',
    sm: 'px-2.5 py-1.5 rounded-4px',
    md: 'px-3 py-2 rounded-4px',
    lg: 'px-3.5 py-2.5 rounded-4px',
  }, options?.custom?.button);

  const p = options?.prefix || '';
  return [
    [
      new RegExp(`^${p}btn-(.+)$`),
      ([, s]) => {
        if (s in buttonSize)
          return buttonSize[s as SizeType];
        return `c-${s}`;
      },
    ],
    [
      `${p}btn`,
      `${p}btn-md b-1 b-solid c-primary bg-transparent cursor-pointer`,
    ],
    // [
    //   new RegExp(`^${p}btn-(.*)$`),
    //   ([, c]) => `${p}btn c-${c}`,
    // ],
  ];
}
