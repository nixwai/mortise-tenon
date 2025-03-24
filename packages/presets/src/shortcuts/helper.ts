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

/** 提取使用括号选择器的规则（如：[&+.pmt-btn]:(ml-3)） */
const bracketReg = /[\w:-]*\[[^\]]+\]:\([^)]+\)/g;
/** 前缀的匹配规则，匹配 .pmt-、空格pmt、[pmt 开头的名称 */
const prefixReg = /([[\s.])pmt-/g;

/** 转化快捷方式 */
function transformShortcuts(shortcuts: PresetShortcuts, prefix = '') {
  return Object.fromEntries(Object.entries(shortcuts).map(([k, v]) => {
    const classes = ([] as ShortcutValue[]).concat(v);
    const prefixV = classes.map((classesItem) => {
      if (typeof classesItem === 'string') {
        // 兼容presetAttributify模式（https://unocss.dev/presets/attributify#installation）
        const bracketStyles = classesItem.match(bracketReg)?.filter(str => str.includes(`.pmt-`)) || [];
        classesItem += ` ${bracketStyles.map(str => str
          .replace(/\.pmt-(\w+)-([\w-]+)/g, '[pmt-$1~="$2"]')
          .replace(/\.pmt-(\w+)(?!-)/g, '[pmt-$1~="\\~"]'),
        ).join(' ')}`;

        // 替换前缀
        classesItem = ` ${classesItem}`.replaceAll(prefixReg, `$1${prefix}`);
      }
      return classesItem;
    });
    return [k, prefixV];
  }));
}
