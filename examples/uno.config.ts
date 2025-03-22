import { defineConfig, presetAttributify, presetWind3 } from 'unocss';
import { presetMortiseTenon } from '../packages/presets/src';

export default defineConfig({ presets: [presetAttributify(), presetWind3(), presetMortiseTenon()] });
