import type { PresetMiniTheme } from 'unocss';
import type { PresetMtOptions } from './types';
import { definePreset, presetAttributify } from 'unocss';
import { getShortcuts } from './shortcuts';
import { theme } from './theme';

export const presetMortiseTenon = definePreset<PresetMtOptions, PresetMiniTheme>((options) => {
  return {
    name: 'mortise-tenon-preset',
    shortcuts: getShortcuts(options),
    theme,
    presets: [
      presetAttributify(),
    ],
  };
});

export default presetMortiseTenon;

export { themeColors } from './theme';
export * from './types';
