import type { Theme } from '@unocss/preset-mini';
import type { DynamicShortcut, Rule, ShortcutValue, StaticShortcut } from 'unocss';
import type { ButtonPreset } from './shortcuts/button';

export type CustomRule = Rule<Theme>;

export type CustomShortcut = StaticShortcut | DynamicShortcut<Theme>;

/** 预设配置项 */
export interface PresetMtOptions {
  /**
   * 主题色
   * @default '#3451b2'
   */
  color?: string
  /**
   * 类名前缀
   */
  prefix?: string
  /**
   * 暗黑模式时是否反转亮度
   * @default true
   */
  reverseLightness?: boolean
  /**
   * 自定义预设
   */
  custom?: OptionsCustom
}

export interface OptionsCustom {
  btn?: Record<ButtonPreset, ShortcutValue>
}
