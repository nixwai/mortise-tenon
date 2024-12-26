import type { PresetMtOptions } from '../types.ts';
import { resolveCustomShortcut } from './helper.ts';

const buttonPreset = {
  /** 默认样式 */
  default: 'btn-common btn-gap btn-transition btn-md btn-ctx btn-ghost dark:ctx-r-y',
  /** ctx */
  ctx: 'ctx-c-mt_primary ctx-c-gray_gray-500 ',
  /** 通用 */
  common: 'b-1 b-solid c-gray-500 cursor-pointer ctx-c-mt_primary',
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
  c-ctx-c-gray-600 b-ctx-c-gray bg-transparent
  hover:(c-ctx-c-mt b-ctx-c-mt bg-transparent)
  active:(c-ctx-c-mt-600 b-ctx-c-mt-600 bg-transparent)
  `,
  /** 淡色 */
  pale: `
  c-ctx-c-gray-600 b-ctx-c-gray bg-transparent
  hover:(c-ctx-c-mt b-ctx-c-mt bg-ctx-c-mt/20)
  active:(c-ctx-c-mt-600 b-ctx-c-mt-600 bg-ctx-c-mt/30)
  `,
  /** 柔和 */
  soft: `
  c-ctx-c-mt b-ctx-c-mt bg-ctx-c-mt/20
  hover:(c-ctx-c-mt-600! b-transparent! bg-ctx-c-mt/40!)
  active:(c-ctx-c-mt-600! b-transparent! bg-ctx-c-mt/50!)
  `,
  /** 亮色 */
  bright: `
  c-ctx-c-mt b-ctx-c-mt bg-ctx-c-mt/20
  hover:(c-white b-ctx-c-mt bg-ctx-c-mt)
  active:(c-white b-ctx-c-mt-600 bg-ctx-c-mt-600)
  `,
  /** 深色 */
  deep: `
  c-white b-ctx-c-mt bg-ctx-c-mt
  hover:(c-white b-ctx-c-mt-400 bg-ctx-c-mt-400)
  active:(c-white b-ctx-c-mt-600 bg-ctx-c-mt-600)
  `,
};

export type ButtonPreset = keyof typeof buttonPreset;

export const button = (options?: PresetMtOptions) => resolveCustomShortcut('btn', buttonPreset, options);
