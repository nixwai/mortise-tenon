import type { ShortcutValue } from 'unocss';
import type { CustomShortcut, OptionsCustom, PresetMtOptions } from '../types';

export function resolveCustomShortcut(
  name: keyof OptionsCustom,
  presetShortcuts: Record<string, ShortcutValue>,
  options?: PresetMtOptions,
): CustomShortcut[] {
  const p = options?.prefix || '';
  const pName = p + name;

  let buttonClasses: Record<string, ShortcutValue> = Object.assign(presetShortcuts, options?.custom?.[name]);
  buttonClasses = Object.fromEntries(Object.entries(buttonClasses).map(([k, v]) => {
    if (typeof v === 'string') {
      v = v.replaceAll(new RegExp(`\s${name}-`, 'g'), `\s${pName}-`);
    }
    return [k, v];
  }));

  return [
    [
      new RegExp(`^${pName}$`),
      () => [buttonClasses.default],
    ],
    [
      new RegExp(`^${pName}-(.+)$`),
      ([, s]) => {
        if (s in buttonClasses) {
          return [buttonClasses[s]];
        }
        return [`[&.${pName}]:(ctx-c-mt_${s})`];
      },
    ],
  ];
}
