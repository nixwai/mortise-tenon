import { presetMortiseTenon, themeColors } from 'mortise-tenon-preset';
import { defineConfig, presetUno } from 'unocss';

export default defineConfig({
  presets: [presetUno(), presetMortiseTenon()],
  theme: { colors: themeColors({ primary: '#3451b2', warning: '#ffb300', danger: '#e53935' }) },
});
