import type { Theme } from '@unocss/preset-mini';
import type { PresetMtOptions } from '../types';
import { themeColors } from 'unocss-preset-ctx';

export function theme(options: PresetMtOptions): Theme {
  return {
    colors: { ...themeColors({ primary: options.color! }) },
    transitionProperty: { 'bg-size': 'background-size' },
  };
}
