import type { Theme } from '@unocss/preset-mini';
import type { DynamicShortcut, Rule, ShortcutValue, StaticShortcut } from 'unocss';
import type { ButtonPreset } from './shortcuts/button';

export type CustomRule = Rule<Theme>;

export type CustomShortcut = StaticShortcut | DynamicShortcut<Theme>;

/** 预设的UI大小 */
export type SizeType = 'xs' | 'sm' | 'md' | 'lg';

/** 预设配置项 */
export interface PresetMtOptions {
  /**
   * 类名前缀
   */
  prefix?: string
  /**
   * 自定义预设
   */
  custom?: OptionsCustom
}

export interface OptionsCustom {
  btn?: Record<ButtonPreset, ShortcutValue>
}
