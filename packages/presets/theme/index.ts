import type { PresetMiniTheme } from 'unocss';
import { mc } from 'magic-color';

export const theme: PresetMiniTheme = { colors: themeColors({ primary: '#164e63' }) };

type Colors = PresetMiniTheme['colors'];

/**
 * 定义主题颜色
 * @param options 名称与颜色映射配置
 * @return 返回对应的可多调色的颜色配置
 */
export function themeColors(options: Record<string, string>): Colors {
  const colors: Colors = {};
  for (const key in options) {
    const mcColor = mc.theme(options[key]);
    colors[key] = {
      DEFAULT: mcColor[500],
      ...mcColor,
    };
  }
  return colors;
}
