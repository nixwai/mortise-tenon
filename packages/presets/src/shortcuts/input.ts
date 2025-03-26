import type { PresetMtOptions } from '../types';
import { mtInput } from '../config';
import { resolveCustomShortcut } from './helper';

const inputPreset = {
  default: `${mtInput}-common`,
  common: 'b-1 b-solid',
};

export type InputPreset = keyof typeof inputPreset;

export const input = (options?: PresetMtOptions) => resolveCustomShortcut('input', inputPreset, options);
