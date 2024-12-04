import type { CustomShortcut, PresetMtOptions } from '../types.ts';

export function button(options?: PresetMtOptions): CustomShortcut[] {
  const p = options?.prefix || '';
  return [
    [
      `${p}btn`,
      `px-8px rounded-4px b-1 b-solid c-primary bg-transparent cursor-pointer`,
    ],
  ];
}
