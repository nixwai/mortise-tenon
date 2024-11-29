import presetMortiseTenon from 'mortise-tenon-preset';
import { defineConfig, presetUno } from 'unocss';

export default defineConfig({ presets: [presetUno(), presetMortiseTenon()] });
