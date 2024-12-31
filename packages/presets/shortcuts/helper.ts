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
  const transfShortcuts = transformShortcuts(asShortcuts, name);
  const mtShortcuts = addPrefix(transfShortcuts, p);

  return [
    [
      new RegExp(`^${pName}$`),
      () => [
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
    ],
  ];
}

/** 转化快捷方式 */
function transformShortcuts(shortcuts: PresetShortcuts, name: keyof OptionsCustom) {
  const defaultClasses = JSON.stringify(shortcuts.default) || '';
  return Object.fromEntries(Object.entries(shortcuts).map(([k, v]) => {
    let classes = ([] as ShortcutValue[]).concat(v);
    if (k !== 'default') {
      // 提升下非默认设置的优先级
      if (!defaultClasses.includes(`mt-${name}-${k}`)) {
        classes = classes.map(item => typeof item === 'string' ? `[&.mt-${name}]:(${item})` : item);
      }
    }
    return [k, classes];
  }));
}

/** 添加配置的前缀 */
function addPrefix(shortcuts: Record<string, ShortcutValue[]>, prefix = '') {
  return Object.fromEntries(Object.entries(shortcuts).map(([k, v]) => {
    const prefixV = v.map((item) => {
      if (typeof item === 'string') {
        item = ` ${item}`.replaceAll(/([\s.])mt-/g, `$1${prefix}`); // 前缀修改
      }
      return item;
    });
    return [k, prefixV];
  }));
}
