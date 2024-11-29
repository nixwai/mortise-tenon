import type { Theme } from '@unocss/preset-mini';
import type { DynamicShortcut, Rule, StaticShortcut } from 'unocss';

export type CustomRule = Rule<Theme>;
export type CustomShortcut = StaticShortcut | DynamicShortcut<Theme>;
