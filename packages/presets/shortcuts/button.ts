import type { PresetMtOptions } from '../types.ts';
import { resolveCustomShortcut } from './helper.ts';

const buttonPreset = {
  /** 默认样式 */
  default: 'btn-common btn-gap btn-transition btn-md btn-ghost dark:reverse-light',
  /** 通用 */
  common: 'b-1 b-solid c-gray-500 cursor-pointer',
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
  /** 幽灵（空背景） */
  ghost: `
  context-gray-500:600 c-context-600 b-context-600 bg-transparent
  hover:(context-primary:500-600 c-context b-context bg-transparent)
  active:(c-context-600 b-context-600 bg-transparent)
  `,
  /** 淡色 */
  pale: `
  context-gray-500:600 c-context-600 b-context-600 bg-transparent
  hover:(context-primary:500-600 c-context b-context bg-context/20)
  active:(c-context-600 b-context-600 bg-context/30)
  `,
  /** 柔和 */
  soft: `
  context-primary:400-500-600 c-context b-context-400 bg-context/20
  hover:(c-context-600 b-transparent bg-context/40)
  active:(c-context-600 b-transparent bg-context/50)
  `,
  /** 亮色 */
  bright: `
  context-primary:400-500-600 c-context b-context-400 bg-context/20
  hover:(c-white b-context bg-context)
  active:(c-white b-context-600 bg-context-600)
  `,
  /** 深色 */
  deep: `
  context-primary:400-500-600 c-white b-context bg-context
  hover:(c-white b-context-400 bg-context-400)
  active:(c-white b-context-600 bg-context-600)
  `,
};

export type ButtonPreset = keyof typeof buttonPreset;

export const button = (options?: PresetMtOptions) => resolveCustomShortcut('btn', buttonPreset, options);
