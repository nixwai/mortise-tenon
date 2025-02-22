import { presetMortiseTenon, themeColors } from '@mortise-tenon/presets';
import { defineConfig, presetAttributify, presetWind3 } from 'unocss';

export default defineConfig({
  presets: [presetAttributify(), presetWind3(), presetMortiseTenon({ color: '#3451b2' })],
  theme: { colors: themeColors({ warning: '#ffb300', danger: '#e53935' }) },
});
