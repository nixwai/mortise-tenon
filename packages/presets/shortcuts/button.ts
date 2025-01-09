import type { PresetMtOptions } from '../types.ts';
import { resolveCustomShortcut } from './helper.ts';

const buttonPreset = {
  /** 默认样式 */
  'default': 'pmt-btn-ctx pmt-btn-common pmt-btn-gap pmt-btn-transition pmt-btn-md pmt-btn-ghost',
  /** ctx */
  'ctx': 'c-ctx-c-c b-ctx-c-b bg-ctx-c-bg',
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
  ctx-c-c_ctx-c-gray-600 ctx-c-b_ctx-c-gray-600 ctx-c-bg_ctx-c-gray bg-op-0
  hover:enabled:(ctx-c-c_ctx-c-mt ctx-c-b_ctx-c-mt ctx-c-bg_ctx-c-gray)
  hover:enabled:(bg-op-0 ctx-l-bg-500)
  active:enabled:(ctx-c-c_ctx-c-mt ctx-c-b_ctx-c-mt-600 ctx-c-bg_ctx-c-gray)
  active:enabled:(bg-op-0 ctx-l-c-600 ctx-l-bg-600)
  disabled:(ctx-l-c-300 ctx-l-b-300 ctx-l-bg-300)
  `,
  /** 淡色 */
  'pale': `
  ctx-c-c_ctx-c-gray-600 ctx-c-b_ctx-c-gray-600 ctx-c-bg_ctx-c-gray bg-op-0
  hover:enabled:(ctx-c-c_ctx-c-mt ctx-c-b_ctx-c-mt ctx-c-bg_ctx-c-mt)
  hover:enabled:(bg-op-20 ctx-l-bg-500)
  active:enabled:(ctx-c-c_ctx-c-mt ctx-c-b_ctx-c-mt-600 ctx-c-bg_ctx-c-mt)
  active:enabled:(bg-op-30 ctx-l-c-600 ctx-l-bg-600)
  disabled:(ctx-l-c-300 ctx-l-b-300 ctx-l-bg-300)
  `,
  /** 柔和 */
  'soft': `
  ctx-c-c_ctx-c-mt ctx-c-b_ctx-c-mt ctx-c-bg_ctx-c-mt bg-op-20
  hover:enabled:(ctx-c-c_ctx-c-mt ctx-c-b_ctx-c-mt/0 ctx-c-bg_ctx-c-mt)
  hover:enabled:(bg-op-40 ctx-l-bg-500)
  active:enabled:(ctx-c-c_ctx-c-mt ctx-c-b_ctx-c-mt-600/0 ctx-c-bg_ctx-c-mt)
  active:enabled:(bg-op-50 ctx-l-c-600 ctx-l-bg-600)
  disabled:(ctx-l-c-300 ctx-l-b-300 ctx-l-bg-300)
  `,
  /** 亮色 */
  'bright': `
  ctx-c-c_ctx-c-mt ctx-c-b_ctx-c-mt ctx-c-bg_ctx-c-mt bg-op-20
  hover:enabled:(ctx-c-c_white ctx-c-b_ctx-c-mt ctx-c-bg_ctx-c-mt)
  hover:enabled:(bg-op-100 ctx-l-bg-500)
  active:enabled:(ctx-c-c_white ctx-c-b_ctx-c-mt-600 ctx-c-bg_ctx-c-mt)
  active:enabled:(bg-op-100 ctx-l-c-600 ctx-l-bg-600)
  disabled:(ctx-l-c-300 ctx-l-b-300 ctx-l-bg-300)
  `,
  /** 深色 */
  'deep': `
  ctx-c-c_white ctx-c-b_ctx-c-mt/0 ctx-c-bg_ctx-c-mt bg-op-100
  hover:enabled:(ctx-c-c_white ctx-c-b_ctx-c-mt/0 ctx-c-bg_ctx-c-mt)
  hover:enabled:(bg-op-100 ctx-l-bg-400)
  active:enabled:(ctx-c-c_white ctx-c-b_ctx-c-mt-600/0 ctx-c-bg_ctx-c-mt)
  active:enabled:(bg-op-100 ctx-l-c-600 ctx-l-bg-600)
  disabled:(ctx-l-c-300 ctx-l-b-300 ctx-l-bg-300)
  `,
  /** 文字按钮 */
  'text': `
  ctx-c-c_ctx-c-mt! ctx-c-b_black/0! ctx-c-bg_gray-300!
  `,
  /** 按钮组 */
  'group': `
  flex items-center
  [&>.pmt-btn]:(m-0)
  not-first:[&>.pmt-btn]:(rounded-l-0 b-l-0) 
  not-last:[&>.pmt-btn]:(rounded-r-0)
  `,
  /** 按钮组（纵向） */
  'group-v': `
  flex flex-col justify-center
  [&>.pmt-btn]:(m-0)
  not-first:[&>.pmt-btn]:(rounded-t-0 b-t-0) 
  not-last:[&>.pmt-btn]:(rounded-b-0)
  `,
  /** 波纹效果 */
  'ripple': `
  enabled:(
    pos-relative
    after:(
      content-empty pos-absolute pos-inset-0 rounded-inherit aspect-inherit bg-center bg-no-repeat bg-gradient-radial
      bg-gradient-[circle,#F6F6F6_25%,transparent_0] dark:bg-gradient-[circle,#222222_25%,transparent_0]
      property-[bg-size,opacity] transition-ease-out
      op-0 bg-[size:400%] duration-[0.6s,1s]
      active:(op-50 bg-[size:0%] duration-0)
      not-hover:active:(op-0 bg-[size:400%])
    )
  )
  `,
  /** 波浪效果 */
  'wave': `
  enabled:(
    pos-relative
    before:(
      content-empty pos-absolute pos-inset-0 rounded-inherit aspect-inherit shadow-ctx-c-b/100
      property-[box-shadow,opacity] transition-ease-[cubic-bezier(0.08,0.82,0.17,1)]
      op-0 shadow-[0_0_0_0.375rem] duration-[0.4s,1.5s]
      active:(op-30 shadow-[0_0_0_0] duration-0)
      not-hover:active:(op-0 shadow-[0_0_0_0.375rem])
    )
  )
  `,
  /** 立体效果 */
  '3d': `
    b-none pos-relative
    enabled:active:translate-y-0.5
    before:(
      w-full h-[calc(100%_+_0.25rem)] content-empty pos-absolute bottom-0 pos-inset-0 rounded-inherit aspect-inherit pmt-btn-transition
      shadow-[0.0625rem_0.1875rem_0.3125rem] shadow-ctx-c-gray-350
    )
    before:enabled:active:(h-[calc(100%_+_0.125rem)] shadow-[0.0625rem_0.0625rem_0.1875rem])
    after:(
      w-full h-full content-empty pos-absolute bottom-0 pos-inset-0 rounded-inherit aspect-inherit pmt-btn-transition
      shadow-[0_0.25rem_0_0] shadow-op-[calc(var(--un-bg-opacity)_+_0.1)] ctx-c-shadow_ctx-c-bg shadow-ctx-c-shadow ctx-l-shadow_ctx-l-bg-600
    )
    after:enabled:active:(shadow-[0_0.125rem_0_0])
  `,
};

export type ButtonPreset = keyof typeof buttonPreset;

export const button = (options?: PresetMtOptions) => resolveCustomShortcut('btn', buttonPreset, options);
