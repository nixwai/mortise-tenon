import type { CustomShortcut, PresetMtOptions } from '../types';
import { button } from './button';
import { contexts } from './contexts';

export function shortcuts(options?: PresetMtOptions): CustomShortcut[] {
  return [
    button(options),
    contexts(options),
  ].flat();
}
