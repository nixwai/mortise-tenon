import type { CustomShortcut, PresetMtOptions } from '../types';

export function contexts(options?: PresetMtOptions): CustomShortcut[] {
  const p = options?.prefix || '';
  return [
    [
      new RegExp(`^${p}ctxs-(.+)$`),
      ([,s]) => {
        return `${p}ctx-${s} [&>*]:(${p}ctx-${s})`;
      },
    ],
    [
      new RegExp(`^${p}reverse-ctxs$`),
      () => {
        return `^${p}reverse-ctx [&>*]:(${p}reverse-ctx)`;
      },
    ],
  ];
}
