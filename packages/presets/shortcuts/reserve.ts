import type { CustomShortcut, PresetMtOptions } from '../types';
import { reserveContextColor } from '../utils/context';

export function reserve(options?: PresetMtOptions): CustomShortcut[] {
  const p = options?.prefix || '';
  return [
    [
      new RegExp(`^${p}reserve-light$`),
      () => [reserveContextColor()],
    ],
  ];
}
