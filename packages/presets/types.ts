import type { DynamicShortcut, PresetMiniTheme, Rule, StaticShortcut } from 'unocss';

export type CustomRule = Rule<PresetMiniTheme>;
export type CustomShortcut = StaticShortcut | DynamicShortcut<PresetMiniTheme>;
