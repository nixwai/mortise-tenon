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
  hover:enabled:(c-ctx-c-c b-ctx-c-b bg-transparent)
  active:enabled:(c-ctx-c-c-600 b-ctx-c-b-600 bg-transparent)
  disabled:(c-ctx-c-gray-400 b-ctx-c-gray-400 bg-transparent)
  `,
  /** 淡色 */
  'pale': `
  c-ctx-c-gray-600 bg-transparent
  hover:enabled:(c-ctx-c-c b-ctx-c-b bg-ctx-c-bg/20)
  active:enabled:(c-ctx-c-c-600 b-ctx-c-b-600 bg-ctx-c-bg/30)
  disabled:(c-ctx-c-gray-400 b-ctx-c-gray-400 bg-transparent)
  `,
  /** 柔和 */
  'soft': `
  c-ctx-c-c bg-ctx-c-bg/20
  hover:enabled:(c-ctx-c-c-600 b-transparent bg-ctx-c-bg/40)
  active:enabled:(c-ctx-c-c-600 b-transparent bg-ctx-c-bg/50)
  disabled:(c-ctx-c-c-300 b-ctx-c-b-300 bg-ctx-c-bg-300/20)
  `,
  /** 亮色 */
  'bright': `
  c-ctx-c-c bg-ctx-c-bg/20
  hover:enabled:(ctx-c-c_white c-ctx-c-c b-ctx-c-b bg-ctx-c-bg)
  active:enabled:(ctx-c-c_white c-ctx-c-c b-ctx-c-b-600 bg-ctx-c-bg-600)
  disabled:(c-ctx-c-c-300 b-ctx-c-b-300 bg-ctx-c-bg-300/20)
  `,
  /** 深色 */
  'deep': `
  ctx-c-c_white c-ctx-c-c b-transparent bg-ctx-c-bg
  hover:enabled:(c-ctx-c-c b-transparent bg-ctx-c-bg-400)
  active:enabled:(c-ctx-c-c b-transparent bg-ctx-c-bg-600)
  disabled:(c-ctx-c-c-300 b-transparent bg-ctx-c-bg-300)
  `,
  /** 文字按钮 */
  'text': `
  ctx-c-bg_gray-300 ctx-c-c_ctx-c-mt b-none
  enabled:before:(shadow-black/0)
  hover:enabled:(ctx-c-c_ctx-c-mt)
  active:enabled:(ctx-c-c_ctx-c-mt)
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
  enabled:(pos-relative)
  enabled:after:(content-empty pos-absolute pos-inset-0 rounded-inherit aspect-inherit)
  enabled:after:(bg-center bg-no-repeat bg-gradient-radial)
  enabled:after:(bg-gradient-[circle,#F6F6F6_25%,transparent_0] dark:bg-gradient-[circle,#222222_25%,transparent_0])
  enabled:after:(property-[bg-size,opacity] transition-ease-out)
  enabled:after:(op-0 bg-[size:400%] duration-[0.6s,1s])
  enabled:after:active:(op-50 bg-[size:0%] duration-0)
  enabled:after:not-hover:active:(op-0 bg-[size:400%])
  `,
  /** 波浪效果 */
  'wave': `
  enabled:(pos-relative)
  enabled:before:(content-empty pos-absolute pos-inset-0 rounded-inherit aspect-inherit)
  enabled:before:(property-[box-shadow,opacity] transition-ease-[cubic-bezier(0.08,0.82,0.17,1)])
  enabled:before:(shadow-ctx-c-b op-0 shadow-[0_0_0_6px] duration-[0.4s,1.5s])
  enabled:before:active:(op-30 shadow-[0_0_0_0] duration-0)
  enabled:before:not-hover:active:(op-0 shadow-[0_0_0_6px])
  `,
  /** 立体效果 */
};

export type ButtonPreset = keyof typeof buttonPreset;

export const button = (options?: PresetMtOptions) => resolveCustomShortcut('btn', buttonPreset, options);
