import type { Theme } from '@unocss/preset-mini';
import type { PresetMtOptions } from './types';
import { definePreset } from 'unocss';
import { presetCtx, themeColors } from 'unocss-preset-ctx';
import { preflights } from './preflights';
import { shortcuts } from './shortcuts';

export const presetMortiseTenon = definePreset<PresetMtOptions, Theme>((options) => {
  return {
    name: 'mortise-tenon-preset',
    presets: [presetCtx()],
    shortcuts: shortcuts(options),
    theme: { colors: { ...themeColors({ primary: options?.color || '#3451b2' }) } },
    preflights,
  };
});

export * from './types';

export { themeColors } from 'unocss-preset-ctx';
