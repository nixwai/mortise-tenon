import type { OptionsCustom } from './types';

type ShortcutMap = Readonly<Record<keyof OptionsCustom, string>>;

/** 用于辨别库的预设前缀，可以随意设置，但不能与已有的类名前缀冲突 */
export const PREFIX = 'prefixmt';

/** 预设的类名名称 */
export const SHORTCUT_NAME: ShortcutMap = { btn: 'btn' };

const classes = Object.fromEntries(Object.entries(SHORTCUT_NAME).map(([key, value]) => [key, `${PREFIX}-${value}`])) as ShortcutMap;

export const { btn: mtBtn } = classes;

export type ShortcutKey = keyof typeof SHORTCUT_NAME;
