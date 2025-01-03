import type { PresetMtOptions } from '../types.ts';
import { resolveCustomShortcut } from './helper.ts';

const buttonPreset = {
  /** 默认样式 */
  'default': 'pmt-btn-ctx pmt-btn-common pmt-btn-gap pmt-btn-transition pmt-btn-md pmt-btn-ghost',
  /** ctx */
  'ctx': 'ctx-c-c_ctx-c-mt ctx-c-b_ctx-c-mt ctx-c-bg_ctx-c-mt',
  /** 通用 */
  'common': 'b-1 b-solid cursor-pointer',
  /** 间距 */
  'gap': '[&+.pmt-btn]:(ml-3)',
  /** 过渡动画 */
  'transition': 'transition-all duration-200',
  /** 小小按钮 */
  'xs': 'min-w-6 px-1.5 py-0.5 text-xs rounded-0.75',
  /** 小按钮 */
  'sm': 'min-w-7.5 px-2 py-1 text-sm font-400 rounded-1',
  /** 中等按钮 */
  'md': 'min-w-8.5 px-2.5 py-1.5 text-sm font-400 rounded-1.25',
  /** 大按钮 */
  'lg': 'min-w-10.5 px-3 py-2 text-base font-500 rounded-1.5',
  /** 幽灵（空背景） */
  'ghost': `
  c-ctx-c-gray-600 bg-transparent
  not-disabled:hover:(c-ctx-c-c b-ctx-c-b bg-transparent)
  not-disabled:active:(c-ctx-c-c-600 b-ctx-c-b-600 bg-transparent)
  disabled:(c-ctx-c-gray-400 b-ctx-c-gray-400 bg-transparent)
  `,
  /** 淡色 */
  'pale': `
  c-ctx-c-gray-600 bg-transparent
  not-disabled:hover:(c-ctx-c-c b-ctx-c-b bg-ctx-c-bg/20)
  not-disabled:active:(c-ctx-c-c-600 b-ctx-c-b-600 bg-ctx-c-bg/30)
  disabled:(c-ctx-c-gray-400 b-ctx-c-gray-400 bg-transparent)
  `,
  /** 柔和 */
  'soft': `
  c-ctx-c-c bg-ctx-c-bg/20
  not-disabled:hover:(c-ctx-c-c-600 b-transparent bg-ctx-c-bg/40)
  not-disabled:active:(c-ctx-c-c-600 b-transparent bg-ctx-c-bg/50)
  disabled:(c-ctx-c-c-300 b-ctx-c-b-300 bg-ctx-c-bg-300/20)
  `,
  /** 亮色 */
  'bright': `
  c-ctx-c-c bg-ctx-c-bg/20
  not-disabled:hover:(ctx-c-c_white c-ctx-c-c b-ctx-c-b bg-ctx-c-bg)
  not-disabled:active:(ctx-c-c_white c-ctx-c-c b-ctx-c-b-600 bg-ctx-c-bg-600)
  disabled:(c-ctx-c-c-300 b-ctx-c-b-300 bg-ctx-c-bg-300/20)
  `,
  /** 深色 */
  'deep': `
  ctx-c-c_white c-ctx-c-c b-transparent bg-ctx-c-bg
  not-disabled:hover:(c-ctx-c-c b-transparent bg-ctx-c-bg-400)
  not-disabled:active:(c-ctx-c-c b-transparent bg-ctx-c-bg-600)
  disabled:(c-ctx-c-c-300 b-transparent bg-ctx-c-bg-300)
  `,
  /** 文字按钮 */
  'text': `
  ctx-c-bg_gray-300 ctx-c-c_ctx-c-mt b-none
  not-disabled:before:(shadow-black/0)
  not-disabled:hover:(ctx-c-c_ctx-c-mt)
  not-disabled:active:(ctx-c-c_ctx-c-mt)
  `,
  /** 按钮组 */
  'group': `
  flex items-center
  [&>.pmt-btn]:(m-0)
  not-first:[&>.pmt-btn]:(rounded-l-0 b-l-0) 
  not-last:[&>.pmt-btn]:(rounded-r-0)
  `,
  /** 按钮组 */
  'group-v': `
  flex flex-col justify-center
  [&>.pmt-btn]:(m-0)
  not-first:[&>.pmt-btn]:(rounded-t-0 b-t-0) 
  not-last:[&>.pmt-btn]:(rounded-b-0)
  `,
  /** 波纹效果 */
  'ripple': `
  not-disabled:(pos-relative)
  not-disabled:after:(content-empty pos-absolute pos-inset-0 rounded-inherit aspect-inherit)
  not-disabled:after:(bg-gradient-radial bg-gradient-to-op-0 bg-gradient-[circle,var(--un-gradient-to),transparent_0])
  not-disabled:after:(bg-gradient-to-light dark:bg-gradient-to-dark animate-ripple animate-iteration-0)
  not-disabled:after:focus:(animate-iteration-1)
  not-disabled:after:active:(animate-unset)
  `,
  /** 波浪效果 */
  'wave': `
  not-disabled:(pos-relative)
  not-disabled:before:(content-empty pos-absolute pos-inset-0 rounded-inherit aspect-inherit)
  not-disabled:before:(shadow-none shadow-ctx-c-b animate-wave animate-iteration-0)
  not-disabled:before:focus:(animate-iteration-1)
  not-disabled:before:active:(animate-unset)
  `,
};

export type ButtonPreset = keyof typeof buttonPreset;

export const button = (options?: PresetMtOptions) => resolveCustomShortcut('btn', buttonPreset, options);
