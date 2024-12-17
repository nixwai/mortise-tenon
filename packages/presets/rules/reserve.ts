import type { CustomRule, PresetMtOptions } from '../types';
import { reserveContextColor } from '../utils/context';

export function reserve(options?: PresetMtOptions): CustomRule[] {
  const p = options?.prefix || '';
  return [
    [
      new RegExp(`^${p}reserve-light$`),
      () => [reserveContextColor()],
    ],
  ];
}
