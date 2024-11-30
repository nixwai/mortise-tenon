import type { PresetMiniTheme } from 'unocss';
import { definePreset } from 'unocss';
import { shortcuts } from './shortcuts';

export interface PresetMtOptions {}

export const presetMortiseTenon = definePreset<PresetMtOptions, PresetMiniTheme>(() => {
  return {
    name: 'mortise-tenon-preset',
    shortcuts,
  };
});

export default presetMortiseTenon;
