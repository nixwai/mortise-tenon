import type { PresetMtOptions } from '../types.ts';
import { resolveCustomShortcut } from './helper.ts';

const buttonPreset = {
  /** 默认样式 */
  default: 'btn-common btn-gap btn-transition btn-empty btn-md btn-primary dark:reserve-light',
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
  hover:(c-context b-context-400)
  active:(b-context-600)
  `,
  /** 中等效果 */
  medium: `
  c-gray-600 b-gray-500 bg-transparent
  hover:(c-context b-context-400 bg-context/20)
  active:(c-context b-context-600 bg-context/30)
  `,
  /** 淡色 */
  pale: `
  c-context b-context-400 bg-transparent
  hover:(c-context b-context-400 bg-context/20)
  active:(c-context bg-context/30)
  `,
  /** 柔和背景 */
  soft: `
  c-context b-context-400 bg-context/20
  hover:(c-context b-context-200 bg-context-200)
  active:(c-context b-context-300 bg-context-300)
  `,
  /** 亮色背景 */
  bright: `
  c-context b-context-400 bg-context/20
  hover:(c-white b-context bg-context)
  active:(b-context-600 bg-context-600)
  `,
  /** 深色背景 */
  deep: `
  c-white b-context bg-context
  hover:(c-white b-context-400 bg-context-400)
  active:(b-context-600 bg-context-600)
  `,
};

export type ButtonPreset = keyof typeof buttonPreset;

export const button = (options?: PresetMtOptions) => resolveCustomShortcut('btn', buttonPreset, options);
