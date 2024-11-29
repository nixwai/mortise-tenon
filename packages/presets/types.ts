import type { DynamicShortcut, PresetUnoTheme, Rule, StaticShortcut } from 'unocss';

export type CustomRule = Rule<PresetUnoTheme>;
export type CustomShortcut = StaticShortcut | DynamicShortcut<PresetUnoTheme>;
