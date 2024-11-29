import { presetMortiseTenon } from '@mortise-tenon/presets';
import { defineConfig, presetUno } from 'unocss';

export default defineConfig({ presets: [presetUno(), presetMortiseTenon()] });
