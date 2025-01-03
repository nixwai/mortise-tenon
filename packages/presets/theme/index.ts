import type { Theme } from '@unocss/preset-mini';
import type { PresetMtOptions } from '../types';
import { themeColors } from 'unocss-preset-ctx';

export function theme(options: PresetMtOptions): Theme {
  return {
    colors: { ...themeColors({ primary: options.color! }) },
    animation: {
      keyframes: {
        // 波浪
        wave: `{
          0% {--un-shadow-opacity: 0.3;box-shadow: 0 0 0 0 var(--un-shadow-color, #8888885B);}
          20% {--un-shadow-opacity: 0.24;}
          40% {--un-shadow-opacity: 0.18;box-shadow: 0 0 0 4.5px var(--un-shadow-color, #8888882C);}
          50% {--un-shadow-opacity: 0.15;}
          60% {--un-shadow-opacity: 0.12;}
          70% {--un-shadow-opacity: 0.09;}
          80% {--un-shadow-opacity: 0.06;}
          90% {--un-shadow-opacity: 0.03;}
          100% {--un-shadow-opacity: 0;box-shadow: 0 0 0 6px var(--un-shadow-color, #88888800);}
        }`,
      },
      durations: { wave: '0.8s' },
      timingFns: { wave: 'linear' },
    },
  };
}
