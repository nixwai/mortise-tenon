import type { ShortcutValue } from 'unocss';
import type { ShortcutKey } from '../config';
import type { CustomShortcut, PresetMtOptions } from '../types';
import { PREFIX, SHORTCUT_NAME } from '../config';

type PresetShortcuts = Record<string, ShortcutValue | ShortcutValue[]>;

export function resolveCustomShortcut(
  shortcutKey: ShortcutKey,
  presetShortcuts: PresetShortcuts,
  options?: PresetMtOptions,
): CustomShortcut[] {
  const shortcutName = SHORTCUT_NAME[shortcutKey];
  const p = options?.prefix || '';
  const pName = p + shortcutName;
  const asShortcuts = Object.assign(presetShortcuts, options?.custom?.[shortcutKey] || {});
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

const names = Object.values(SHORTCUT_NAME).join('|');
/** 提取使用括号选择器的规则（如：[&+.${PREFIX}-btn]:(ml-3)） */
const bracketReg1 = new RegExp(`\\.${PREFIX}-(${names})-([\\w-]+)`, 'g');
const bracketReg2 = new RegExp(`\\.${PREFIX}-(${names})(?!-)`, 'g');
/** 前缀的匹配规则，匹配 .${PREFIX}-、空格${PREFIX}-、[${PREFIX}- 开头的名称 */
const prefixReg = new RegExp(`([[\\s.])${PREFIX}-`, 'g');

/** 转化快捷方式 */
function transformShortcuts(shortcuts: PresetShortcuts, prefix = '') {
  return Object.fromEntries(Object.entries(shortcuts).map(([k, v]) => {
    const classes = ([] as ShortcutValue[]).concat(v);
    const prefixV = classes.map((classesItem) => {
      if (typeof classesItem === 'string') {
        // 兼容presetAttributify模式（https://unocss.dev/presets/attributify#installation）
        // unocss是无法兼容这种括号内放多个的写法after:[&.class1,&[class2]]()
        classesItem = classesItem.replace(/(\[[^\]]+\]:)([^()\s]+)/g, '$1($2)'); // 补充括号：[class]:any => [class]:(any)
        // 提取格式为 [class]:(any)的属性样式
        // eslint-disable-next-line regexp/no-super-linear-backtracking
        const bracketStyles = classesItem.match(/[^\s(]*\[[^\]]+\]:\([^)]+\)/g)?.filter(str => str.includes(`.${PREFIX}-`)) || [];
        let strIndex = 0;
        for (const str of bracketStyles) {
          // 将类选择器替换为unocss的属性选择器
          const newStr = str
            .replace(bracketReg1, `[${PREFIX}-$1~="$2"]`)
            .replace(bracketReg2, `[${PREFIX}-$1]`);
          strIndex = classesItem.indexOf(str, strIndex) + str.length;
          // 将新的选择器插入到原选择器后面的位置
          classesItem = `${classesItem.slice(0, strIndex)} ${newStr}${classesItem.slice(strIndex)}`;
        }

        // 替换前缀
        classesItem = ` ${classesItem}`.replaceAll(prefixReg, `$1${prefix}`);
      }
      return classesItem;
    });
    return [k, prefixV];
  }));
}
