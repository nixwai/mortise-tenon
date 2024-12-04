import type { CustomShortcut, PresetMtOptions } from '../types';
import { button } from './button';

export function getShortcuts(options?: PresetMtOptions): CustomShortcut[] {
  return [
    button(options),
  ].flat();
}
