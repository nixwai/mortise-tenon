import type { CustomRule, PresetMtOptions } from '../types';
import { context } from './context';

export function rules(options?: PresetMtOptions): CustomRule[] {
  return [
    context(options),
  ].flat();
}
