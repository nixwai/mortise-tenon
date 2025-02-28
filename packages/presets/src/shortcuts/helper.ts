import type { ShortcutValue } from 'unocss';
import type { CustomShortcut, OptionsCustom, PresetMtOptions } from '../types';

type PresetShortcuts = Record<string, ShortcutValue | ShortcutValue[]>;

export function resolveCustomShortcut(
  name: keyof OptionsCustom,
  presetShortcuts: PresetShortcuts,
  options?: PresetMtOptions,
): CustomShortcut[] {
  const p = options?.prefix || '';
  const pName = p + name;
  const asShortcuts = Object.assign(presetShortcuts, options?.custom?.[name] || {});
  const mtShortcuts = transformShortcuts(asShortcuts, p);

  return [
    [
      pName,
      [
        'disabled:(cursor-not-allowed)', // 禁用状态
        options?.reverseLightness ? 'dark:ctx-r-y' : '', // 是否暗黑模式反转颜色
        ...(mtShortcuts.default || []),
      ],
    ],
    [
      new RegExp(`^${pName}-(.+)$`),
      ([, s]) => {
        if (s in mtShortcuts) {
          return mtShortcuts[s];
        }
        return [`[&.${pName}]:(ctx-c-mt_${s})`];
      },
      { layer: 'components' },
    ],
  ];
}

/** 转化快捷方式 */
function transformShortcuts(shortcuts: PresetShortcuts, prefix = '') {
  return Object.fromEntries(Object.entries(shortcuts).map(([k, v]) => {
    const classes = ([] as ShortcutValue[]).concat(v);
    const prefixV = classes.map((item) => {
      if (typeof item === 'string') {
        item = ` ${item}`.replaceAll(/([\s.])pmt-/g, `$1${prefix}`); // 前缀修改
      }
      return item;
    });
    return [k, prefixV];
  }));
}
