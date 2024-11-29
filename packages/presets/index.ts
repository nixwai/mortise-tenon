import type { Theme } from '@unocss/preset-mini';
import { definePreset } from 'unocss';
import { shortcuts } from './shortcuts';

export interface PresetMtOptions {}

export const presetMortiseTenon = definePreset<PresetMtOptions, Theme>(() => {
  return {
    name: 'mortise-tenon-preset',
    shortcuts,
  };
});

export default presetMortiseTenon;
