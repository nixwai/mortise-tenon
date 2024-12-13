import type { ShortcutValue } from 'unocss';
import type { CustomShortcut, OptionsCustom, PresetMtOptions } from '../types';
import { getContextLightness, resolveContextColor } from '../utils/context';

const REVERSE_LIGHT = 'reverse-light';

export function resolveCustomShortcut(
  name: keyof OptionsCustom,
  presetShortcuts: Record<string, ShortcutValue>,
  options?: PresetMtOptions,
): CustomShortcut[] {
  const pName = (options?.prefix || '') + name;

  let buttonClasses: Record<string, ShortcutValue> = Object.assign(presetShortcuts, options?.custom?.[name]);
  buttonClasses = Object.fromEntries(Object.entries(buttonClasses).map(([k, v]) => {
    const value = typeof v === 'string' ? v.replaceAll(new RegExp(`${name}-`, 'g'), `${pName}-`) : v;
    return [k, value];
  }));

  const contextLightness = getContextLightness(buttonClasses);

  return [
    [
      new RegExp(`^${pName}$`),
      () => [buttonClasses.default],
    ],
    [
      new RegExp(`^${pName}-(.+)$`),
      ([, s], { theme }) => {
        if (s in buttonClasses) {
          return [buttonClasses[s]];
        }

        if (s.startsWith(REVERSE_LIGHT)) {
          // 反转颜色的明亮度
          const c = s.replace(new RegExp(`${REVERSE_LIGHT}-?(.*)`), '$1');
          if (c) {
            const colors = resolveContextColor(c, theme, contextLightness, true);
            if (colors) {
              return [colors];
            }
          }
        }
        else {
          // 设置颜色以及各明亮度
          const colors = resolveContextColor(s, theme, contextLightness);
          if (colors) {
            return [colors, `dark:(${pName}-${REVERSE_LIGHT}-${s})`];
          }
        }
      },
    ],
  ];
}
