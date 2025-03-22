import type { PresetMtOptions } from '../types';
import { resolveCustomShortcut } from './helper';

const inputPreset = { default: '' };

export type InputPreset = keyof typeof inputPreset;

export const input = (options?: PresetMtOptions) => resolveCustomShortcut('input', inputPreset, options);
