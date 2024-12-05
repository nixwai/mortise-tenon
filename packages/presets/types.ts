import type { DynamicShortcut, PresetMiniTheme, Rule, StaticShortcut } from 'unocss';

export type CustomRule = Rule<PresetMiniTheme>;

export type CustomShortcut = StaticShortcut | DynamicShortcut<PresetMiniTheme>;

/** 预设配置项 */
export interface PresetMtOptions {
  /**
   * 类名前缀
   */
  prefix?: string
}
