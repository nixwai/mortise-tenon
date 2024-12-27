import { presetMortiseTenon, themeColors } from '@mortise-tenon/presets';
import { defineConfig, presetAttributify, presetUno } from 'unocss';

export default defineConfig({
  presets: [presetAttributify(), presetUno(), presetMortiseTenon({ color: '#3451b2' })],
  theme: { colors: themeColors({ warning: '#ffb300', danger: '#e53935' }) },
});
