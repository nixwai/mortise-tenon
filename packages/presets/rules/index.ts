import type { CustomRule, PresetMtOptions } from '../types';
import { reserve } from './reserve';

export function rules(options?: PresetMtOptions): CustomRule[] {
  return [
    reserve(options),
  ].flat();
}
