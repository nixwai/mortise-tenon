import type { PresetMtOptions } from '../types.ts';
import { mtBtn } from '../config.ts';
import { resolveCustomShortcut } from './helper.ts';

const buttonPreset = {
  /** 默认样式 */
  'default': `${mtBtn}-ctx ${mtBtn}-common ${mtBtn}-gap ${mtBtn}-transition ${mtBtn}-md ${mtBtn}-ghost`,
  /** ctx */
  'ctx': `
  c-ctx-c-c b-ctx-c-b bg-ctx-c-bg ctx-c-deep-gray_gray-600 ctx-c-shadow_ctx-c-bg
  disabled:(ctx-deg-c-350 ctx-deg-b-350 ctx-deg-bg-350)
  `,
  /** 通用 */
  'common': 'b-1 b-solid cursor-pointer',
  /** 间距 */
  'gap': `[&+.${mtBtn}]:(ml-3)`,
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
  ctx-c-c_ctx-c-deep-gray-500 ctx-c-b_ctx-c-deep-gray-500 ctx-c-bg_gray/0
  hover:enabled:(ctx-c-c_ctx-c-mt ctx-c-b_ctx-c-mt ctx-c-bg_gray/0)
  active:enabled:(ctx-c-c_ctx-c-mt-600 ctx-c-b_ctx-c-mt-600 ctx-c-bg_gray-600/0)
  `,
  /** 淡色 */
  'pale': `
  ctx-c-c_ctx-c-deep-gray-500 ctx-c-b_ctx-c-deep-gray-500 ctx-c-bg_gray/0
  hover:enabled:(ctx-c-c_ctx-c-mt ctx-c-b_ctx-c-mt ctx-c-bg_ctx-c-mt/20)
  active:enabled:(ctx-c-c_ctx-c-mt-600 ctx-c-b_ctx-c-mt-600 ctx-c-bg_ctx-c-mt-600/30)
  `,
  /** 柔和 */
  'soft': `
  ctx-c-c_ctx-c-mt ctx-c-b_ctx-c-mt ctx-c-bg_ctx-c-mt/20
  hover:enabled:(ctx-c-c_ctx-c-mt ctx-c-b_ctx-c-mt/0 ctx-c-bg_ctx-c-mt/40)
  active:enabled:(ctx-c-c_ctx-c-mt-600 ctx-c-b_ctx-c-mt-600/0 ctx-c-bg_ctx-c-mt-600/50)
  `,
  /** 亮色 */
  'bright': `
  ctx-c-c_ctx-c-mt ctx-c-b_ctx-c-mt ctx-c-bg_ctx-c-mt/20
  hover:enabled:(ctx-c-c_white ctx-c-b_ctx-c-mt ctx-c-bg_ctx-c-mt)
  active:enabled:(ctx-c-c_white ctx-c-b_ctx-c-mt-600 ctx-c-bg_ctx-c-mt-600)
  `,
  /** 深色 */
  'deep': `
  ctx-c-c_white ctx-c-b_ctx-c-mt/0 ctx-c-bg_ctx-c-mt
  hover:enabled:(ctx-c-c_white ctx-c-b_ctx-c-mt/0 ctx-c-bg_ctx-c-mt-400)
  active:enabled:(ctx-c-c_white ctx-c-b_ctx-c-mt-600/0 ctx-c-bg_ctx-c-mt-600)
  `,
  /** 文字按钮 */
  'text': `
  c-ctx-c-txt-c ctx-c-txt-c_ctx-c-mt ctx-deg-txt-c_ctx-deg-c-500
  b-op-0 ctx-c-shadow_gray
  bg-ctx-c-txt-bg ctx-c-txt-bg_gray ctx-deg-txt-bg_ctx-deg-bg-300 ctx-op-txt-bg_ctx-op-bg-100
  `,
  /** 按钮组 */
  'group': `
  flex items-center
  [&>.${mtBtn}]:(m-0)
  not-first:[&>.${mtBtn}]:(rounded-l-0 b-l-0) 
  not-last:[&>.${mtBtn}]:(rounded-r-0)
  `,
  /** 按钮组（纵向） */
  'group-v': `
  flex flex-col justify-center
  [&>.${mtBtn}]:(m-0)
  not-first:[&>.${mtBtn}]:(rounded-t-0 b-t-0) 
  not-last:[&>.${mtBtn}]:(rounded-b-0)
  `,
  /** 波纹效果 */
  'ripple': `
  enabled:(
    pos-relative
    after:(
      content-empty pos-absolute pos-inset-0 rounded-inherit aspect-inherit bg-center bg-no-repeat bg-gradient-radial
      bg-gradient-[circle,#F6F6F6_25%,transparent_0] dark:bg-gradient-[circle,#222222_25%,transparent_0]
      property-[bg-size,opacity] transition-ease-out op-0 bg-[size:400%] duration-[0.6s,1s]
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
      content-empty pos-absolute pos-inset-0 rounded-inherit aspect-inherit shadow-ctx-c-shadow shadow-op-[var(--un-border-opacity,1)]
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
      w-full h-[calc(100%_+_0.25rem)] content-empty pos-absolute bottom-0 pos-inset-0 rounded-inherit aspect-inherit ${mtBtn}-transition
      shadow-[0.0625rem_0.1875rem_0.3125rem] shadow-ctx-c-gray-300
    )
    before:enabled:active:(h-[calc(100%_+_0.125rem)] shadow-[0.0625rem_0.0625rem_0.1875rem])
    before:disabled:(shadow-ctx-c-gray-150)
    after:(
      w-full h-full content-empty pos-absolute bottom-0 pos-inset-0 rounded-inherit aspect-inherit ${mtBtn}-transition
      shadow-[0_0.25rem_0_0] shadow-ctx-c-shadow ctx-deg-shadow_ctx-deg-bg-620 ctx-op-shadow_ctx-op-bg-110
    )
    after:enabled:active:(shadow-[0_0.125rem_0_0])
  `,
};

export type ButtonPreset = keyof typeof buttonPreset;

export const button = (options?: PresetMtOptions) => resolveCustomShortcut('btn', buttonPreset, options);
