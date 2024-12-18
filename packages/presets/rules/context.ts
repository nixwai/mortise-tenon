import type { CustomRule, PresetMtOptions } from '../types';
import { resolveContextColor } from '../utils/context';

export function context(options?: PresetMtOptions): CustomRule[] {
  const p = options?.prefix || '';
  return [
    [
      new RegExp(`^${p}context-(.+)$`),
      ([,s], { theme }) => {
        const [color, lightness] = s.split(':');
        // 设置颜色以及各明亮度
        const colors = resolveContextColor(color, theme, lightness?.split('-'));
        if (colors) {
          return [colors];
        }
      },
    ],
  ];
}
