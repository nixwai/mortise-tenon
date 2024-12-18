import type { CustomRule, PresetMtOptions } from '../types';
import { context } from './context';
import { reserve } from './reserve';

export function rules(options?: PresetMtOptions): CustomRule[] {
  return [
    reserve(options),
    context(options),
  ].flat();
}
