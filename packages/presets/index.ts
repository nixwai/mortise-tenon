import type { Theme } from '@unocss/preset-mini';
import type { PresetMtOptions } from './types';
import { definePreset } from 'unocss';
import { presetCtx, themeColors } from 'unocss-preset-ctx';
import { preflights } from './preflights';
import { shortcuts } from './shortcuts';

export const presetMortiseTenon = definePreset<PresetMtOptions, Theme>((options) => {
  const resolvedOptions: PresetMtOptions = Object.assign(
    {
      reverseLightness: true,
      color: '#3451b2',
    },
    options,
  );
  return {
    name: 'mortise-tenon-preset',
    presets: [presetCtx()],
    shortcuts: shortcuts(resolvedOptions),
    theme: { colors: { ...themeColors({ primary: resolvedOptions.color! }) } },
    preflights,
  };
});

export * from './types';

export { themeColors } from 'unocss-preset-ctx';
