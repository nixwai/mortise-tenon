import type { CustomShortcut, PresetMtOptions } from '../types';
import { colorName } from '../utils';

export function reserve(options?: PresetMtOptions): CustomShortcut[] {
  const p = options?.prefix || '';
  return [
    [
      new RegExp(`^${p}reserve-light$`),
      () => [
        {
          [`${colorName('reserve', 50)}`]: `var(${colorName('context', 950)})`,
          [`${colorName('reserve', 100)}`]: `var(${colorName('context', 900)})`,
          [`${colorName('reserve', 200)}`]: `var(${colorName('context', 800)})`,
          [`${colorName('reserve', 300)}`]: `var(${colorName('context', 700)})`,
          [`${colorName('reserve', 400)}`]: `var(${colorName('context', 600)})`,
          [`${colorName('reserve', 500)}`]: `var(${colorName('context', 500)})`,
          [`${colorName('reserve', 600)}`]: `var(${colorName('context', 400)})`,
          [`${colorName('reserve', 700)}`]: `var(${colorName('context', 300)})`,
          [`${colorName('reserve', 800)}`]: `var(${colorName('context', 200)})`,
          [`${colorName('reserve', 900)}`]: `var(${colorName('context', 100)})`,
          [`${colorName('reserve', 950)}`]: `var(${colorName('context', 50)})`,
        },
      ],
    ],
  ];
}
