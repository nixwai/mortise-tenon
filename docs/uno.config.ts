import { presetMortiseTenon, themeColors } from '@mortise-tenon/presets';
import { defineConfig, presetAttributify, presetUno } from 'unocss';

export default defineConfig({
  presets: [presetAttributify(), presetUno(), presetMortiseTenon()],
  theme: { colors: themeColors({ primary: '#E94CE3', warning: '#ffb300', danger: '#e53935' }) },
});
