import type { PresetMiniTheme } from 'unocss';
import type { PresetMtOptions } from './types';
import { definePreset } from 'unocss';
import { shortcuts } from './shortcuts';
import { theme } from './theme';

export const presetMortiseTenon = definePreset<PresetMtOptions, PresetMiniTheme>((options) => {
  return {
    name: 'mortise-tenon-preset',
    shortcuts: shortcuts(options),
    theme,
  };
});

export default presetMortiseTenon;

export { preflightColors } from './preflights';
export { themeColors } from './theme';
export * from './types';
