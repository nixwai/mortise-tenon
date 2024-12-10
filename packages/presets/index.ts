import type { Theme } from '@unocss/preset-mini';
import type { PresetMtOptions } from './types';
import { definePreset } from 'unocss';
import { preflights } from './preflights';
import { shortcuts } from './shortcuts';
import { theme } from './theme';

export const presetMortiseTenon = definePreset<PresetMtOptions, Theme>((options) => {
  return {
    name: 'mortise-tenon-preset',
    shortcuts: shortcuts(options),
    theme,
    preflights,
  };
});

export { preflightColors } from './preflights';

export { themeColors } from './theme';

export * from './types';
