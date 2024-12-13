import type { CustomShortcut, PresetMtOptions } from '../types';
import { button } from './button';
import { reserve } from './reserve';

export function shortcuts(options?: PresetMtOptions): CustomShortcut[] {
  return [
    button(options),
    reserve(options),
  ].flat();
}
