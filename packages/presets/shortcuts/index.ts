import type { CustomShortcut, PresetMtOptions } from '../types';
import { button } from './button';

export function shortcuts(options?: PresetMtOptions): CustomShortcut[] {
  return [
    button(options),
  ].flat();
}
