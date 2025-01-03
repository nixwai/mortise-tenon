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
    // 波浪，受shadow控制，使用时属性需添加shadow-none与shadow-${color}控制
    wave: `{
      0% {--un-shadow-opacity: 0.3;--un-shadow:0 0 0 0 var(--un-shadow-color)}
      10% {--un-shadow-opacity: 0.27;--un-shadow:0 0 0 1.2px var(--un-shadow-color)}
      20% {--un-shadow-opacity: 0.24;--un-shadow:0 0 0 2.3px var(--un-shadow-color)}
      30% {--un-shadow-opacity: 0.21;--un-shadow:0 0 0 3.4px var(--un-shadow-color)}
      40% {--un-shadow-opacity: 0.18;--un-shadow: 0 0 0 4.5px var(--un-shadow-color)}
      50% {--un-shadow-opacity: 0.15;--un-shadow: 0 0 0 4.7px var(--un-shadow-color)}
      60% {--un-shadow-opacity: 0.12;--un-shadow: 0 0 0 5px var(--un-shadow-color)}
      70% {--un-shadow-opacity: 0.09;--un-shadow: 0 0 0 5.2px var(--un-shadow-color)}
      80% {--un-shadow-opacity: 0.06;--un-shadow: 0 0 0 5.5px var(--un-shadow-color)}
      90% {--un-shadow-opacity: 0.03;--un-shadow: 0 0 0 5.7px var(--un-shadow-color)}
      100% {--un-shadow-opacity: 0;--un-shadow: 0 0 0 6px var(--un-shadow-color)}
    }`,
  },
  durations: { ripple: '0.6s', wave: '0.8s' },
  timingFns: { ripple: 'cubic-bezier(0.4, 0, 0.2, 1)', wave: 'linear' },
};

export function theme(options: PresetMtOptions): Theme {
  return {
    colors: { ...themeColors({ primary: options.color! }) },
    animation: animates,
  };
}
