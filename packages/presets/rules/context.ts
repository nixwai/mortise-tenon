import type { CustomRule, PresetMtOptions } from '../types';
import { resolveContextColor, reverseContextColor } from '../utils/context';

export function context(options?: PresetMtOptions): CustomRule[] {
  const p = options?.prefix || '';
  return [
    [
      new RegExp(`^${p}ctx-(.+)$`),
      ([,s], { theme }) => {
        const [color, lightness] = s.split(':');
        // 设置颜色以及各明亮度
        const colors = resolveContextColor(color, theme, lightness?.split('-'));
        if (colors) {
          return [colors];
        }
      },
    ],
    [
      new RegExp(`^${p}reverse-ctx$`),
      () => [reverseContextColor()],
    ],
  ];
}
