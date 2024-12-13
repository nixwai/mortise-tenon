import type { PresetMtOptions } from '../types.ts';
import { resolveCustomShortcut } from './helper.ts';

const buttonPreset = {
  /** 默认样式 */
  default: 'btn-common btn-gap btn-transition btn-empty btn-md btn-primary',
  /** 通用 */
  common: 'b-1 b-solid cursor-pointer',
  /** 间距 */
  gap: '[&+button]:(ml-3)',
  /** 过渡动画 */
  transition: 'transition-all duration-200',
  /** 小小按钮 */
  xs: 'min-w-6 px-1.5 py-0.5 text-xs rounded-0.75',
  /** 小按钮 */
  sm: 'min-w-7.5 px-2 py-1 text-sm font-400 rounded-1',
  /** 中等按钮 */
  md: 'min-w-8.5 px-2.5 py-1.5 text-sm font-400 rounded-1.25',
  /** 大按钮 */
  lg: 'min-w-10.5 px-3 py-2 text-base font-500 rounded-1.5',
  /** 空背景色 */
  empty: `
  c-gray-600 b-gray-500 bg-transparent
  hover:(c-context-500 b-context-400)
  active:(b-context-600)
  `,
  /** 中等效果 */
  medium: `
  c-gray-600 b-gray-500 bg-transparent
  hover:(c-context-400 b-context-400 bg-context-500/20)
  active:(c-context-500 bg-context-500/30)
  `,
  /** 淡色 */
  pale: `
  c-context-500 b-context-400 bg-transparent
  hover:(c-context-400 b-context-400 bg-context-500/20)
  active:(c-context-500 bg-context-500/30)
  `,
  /** 柔和背景 */
  soft: `
  c-context-500 b-context-400 bg-context-500/20
  hover:(c-context-400 b-context-500/30 bg-context-500/30)
  active:(c-context-500 b-context-500/30 bg-context-500/40)
  `,
  /** 亮色背景 */
  bright: `
  c-context-500 b-context-400 bg-context-500/20
  hover:(c-white b-context-500 bg-context-500)
  active:(b-context-600 bg-context-600)
  `,
  /** 深色背景 */
  deep: `
  c-white b-context-500 bg-context-500
  hover:(c-white b-context-400 bg-context-400)
  active:(b-context-600 bg-context-600)
  `,
};

export type ButtonPreset = keyof typeof buttonPreset;

export const button = (options?: PresetMtOptions) => resolveCustomShortcut('btn', buttonPreset, options);
