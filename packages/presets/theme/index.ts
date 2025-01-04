import type { Theme, ThemeAnimation } from '@unocss/preset-mini';
import type { PresetMtOptions } from '../types';
import { themeColors } from 'unocss-preset-ctx';

const animates: ThemeAnimation = {
  keyframes: {
    // 波纹，颜色受bg-gradient-to控制，使用需要添加属性bg-gradient-radial bg-gradient-[circle,var(--un-gradient-to),transparent_0]
    ripple: `{
      ${Array.from({ length: 11 }, (_, i) => {
        const position = `--un-gradient-to-position:${i * 10}%;`;
        const opacity = `--un-to-opacity:${50 - i * 5}%;`;
        return `${i * 10}%{${position}${opacity}}`;
      }).join('')}
    }`,
  },
  durations: { ripple: '0.6s' },
  timingFns: { ripple: 'cubic-bezier(0.4, 0, 0.2, 1)' },
};

export function theme(options: PresetMtOptions): Theme {
  return {
    colors: { ...themeColors({ primary: options.color! }) },
    animation: animates,
  };
}
