import type { PresetMtOptions } from '../types.ts';
import { resolveCustomShortcut } from './helper.ts';

const buttonPreset = {
  /** 默认样式 */
  default: 'btn-ctx btn-common btn-gap btn-transition btn-md btn-ghost dark:ctx-r-y',
  /** ctx */
  ctx: 'ctx-c-gray_gray-500 ctx-c-mt_primary ctx-c-c_ctx-c-mt ctx-c-b_ctx-c-mt ctx-c-bg_ctx-c-mt',
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
  /** 幽灵（空背景） */
  ghost: `
  c-ctx-c-gray-600 bg-transparent
  hover:(c-ctx-c-c b-ctx-c-b bg-transparent)
  active:(c-ctx-c-c-600 b-ctx-c-b-600 bg-transparent)
  `,
  /** 淡色 */
  pale: `
  c-ctx-c-gray-600 bg-transparent
  hover:(c-ctx-c-c b-ctx-c-b bg-ctx-c-bg/20)
  active:(c-ctx-c-c-600 b-ctx-c-b-600 bg-ctx-c-bg/30)
  `,
  /** 柔和 */
  soft: `
  c-ctx-c-c bg-ctx-c-bg/20
  hover:(c-ctx-c-c-600! b-transparent! bg-ctx-c-bg/40!)
  active:(c-ctx-c-c-600! b-transparent! bg-ctx-c-bg/50!)
  `,
  /** 亮色 */
  bright: `
  c-ctx-c-c bg-ctx-c-bg/20
  hover:(c-white b-ctx-c-b bg-ctx-c-bg)
  active:(c-white b-ctx-c-b-600 bg-ctx-c-bg-600)
  `,
  /** 深色 */
  deep: `
  c-white b-ctx-c-b bg-ctx-c-bg
  hover:(c-white b-ctx-c-b-400 bg-ctx-c-bg-400)
  active:(c-white b-ctx-c-b-600 bg-ctx-c-bg-600)
  `,
  /** 文字按钮 */
  text: `
  ctx-c-bg_gray-300 c-ctx-c-c! b-none
  `,
};

export type ButtonPreset = keyof typeof buttonPreset;

export const button = (options?: PresetMtOptions) => resolveCustomShortcut('btn', buttonPreset, options);
