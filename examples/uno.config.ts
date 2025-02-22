import { presetMortiseTenon, themeColors } from '@mortise-tenon/presets';
import { defineConfig, presetAttributify, presetWind3 } from 'unocss';

export default defineConfig({
  presets: [presetAttributify(), presetWind3(), presetMortiseTenon()],
  theme: { colors: themeColors({ primary: '#3451b2', warning: '#ffb300', danger: '#e53935' }) },
});
