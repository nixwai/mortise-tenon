import type { OptionsCustom } from './types';

type ShortcutMap = Readonly<Record<keyof OptionsCustom, string>>;

export const PREFIX = 'pmt';

export const SHORTCUT_NAME: ShortcutMap = { btn: 'btn' };

const classes = Object.fromEntries(Object.entries(SHORTCUT_NAME).map(([key, value]) => [key, `${PREFIX}-${value}`])) as ShortcutMap;

export const { btn: mtBtn } = classes;

export type ShortcutKey = keyof typeof SHORTCUT_NAME;
