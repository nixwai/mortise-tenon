import { definePreset } from 'unocss';
import { shortcuts } from './shortcuts';

export const presetMortiseTenon = definePreset(() => {
  return {
    name: 'mortise-tenon-preset',
    shortcuts,
  };
});

export default presetMortiseTenon;
