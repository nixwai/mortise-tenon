import type { ShortcutValue } from 'unocss';
import type { CustomShortcut, OptionsCustom, PresetMtOptions } from '../types';
import { getContextLightness } from '../utils/context';

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
      v = v.replaceAll(new RegExp(`${name}-`, 'g'), `${pName}-`);
      v = v.replaceAll(/reserve-light/g, `${p}reserve-light`);
    }
    return [k, v];
  }));

  const contextLightness = getContextLightness(buttonClasses);

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
        if (contextLightness.length) {
          const contextColor = `${p}context-${s}:${contextLightness.join('-')}`;
          return [contextColor];
        }
      },
    ],
  ];
}
