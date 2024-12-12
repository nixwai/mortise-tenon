import type { ShortcutValue } from 'unocss';
import type { CustomShortcut, PresetMtOptions } from '../types.ts';
import { getContextLightness, resolveContextColor } from '../utils/context.ts';

const buttonPreset = {
  /** 默认（default） */
  default: 'b-1 b-solid cursor-pointer',
  /** 间距（default） */
  gap: '[&+button]:(ml-3)',
  /** 过渡动画（default） */
  transition: 'transition-all duration-200',
  /** 空背景色（default） */
  empty: `
  c-gray-600 b-gray-500 bg-transparent
  hover:(c-context-500 b-context-300)
  active:(b-context-600)
  `,
  /** 淡色按钮 */
  pale: `
  hover:(bg-context-500/20)
  active:(bg-context-500/30)
  `,
  /** 中等颜色 */
  medium: `
  c-context-500 b-context-400 bg-transparent
  hover:(c-context-400 b-context-400 bg-context-500/20)
  active:(c-context-500 bg-context-500/30)
  `,
  /** 柔和背景 */
  soft: `
  c-context-500 b-context-400 bg-context-500/20
  hover:(c-context-400 b-context-400 bg-context-500/30)
  active:(c-context-500 bg-context-500/40)
  `,
  /** 亮色背景 */
  bright: `
  c-context-500 b-context-400 bg-context-500/20
  hover:(c-white b-context-500 bg-context-500)
  active:(b-context-700 bg-context-700)
  `,
  /** 深色背景 */
  deep: `
  c-white b-context-500 bg-context-500
  hover:(c-white b-context-500/80 bg-context-500/80)
  active:( b-context-700 bg-context-700)
  `,
  /** 小小按钮 */
  xs: 'px-1.5 py-0.5 text-xs rounded-0.75',
  /** 小按钮 */
  sm: 'px-2 py-1 text-sm font-400 rounded-1',
  /** 中等按钮（default） */
  md: 'px-2.5 py-1.5 text-sm font-400 rounded-1.25',
  /** 大按钮 */
  lg: 'px-3 py-2 text-base font-500 rounded-1.5',
};

export type ButtonPreset = keyof typeof buttonPreset;

export function button(options?: PresetMtOptions): CustomShortcut[] {
  const p = options?.prefix || '';
  const buttonClasses: Record<ButtonPreset, ShortcutValue> = Object.assign(buttonPreset, options?.custom?.button);
  const contextLightness = getContextLightness(buttonClasses);

  return [
    [
      `${p}btn`,
      [buttonClasses.md, buttonClasses.default, buttonClasses.gap, buttonClasses.transition, buttonPreset.empty],
    ],
    [
      new RegExp(`^${p}btn-?(.+)$`),
      ([, s], { theme }) => {
        if (s in buttonClasses) {
          return [buttonClasses[s as ButtonPreset]];
        }
        const colors = resolveContextColor(s, theme, contextLightness);
        if (colors) {
          return [colors];
        }
      },
    ],
  ];
}
