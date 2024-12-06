import type { PresetMiniTheme } from 'unocss';
import { mc } from 'magic-color';
import { colorName, rgbValue } from '../utils';

export const theme: PresetMiniTheme = { colors: { ...themeColors({ primary: '#164e63' }) } };

type Colors = PresetMiniTheme['colors'];

/**
 * 自定义颜色
 * @param options 名称与颜色映射配置
 * @return 返回对应的可多调色的颜色配置
 */
export function themeColors(options: Record<string, string>): Colors {
  const colors: Record<string, Record<string, string>> = {};
  for (const name in options) {
    const mcColor = mc.theme(options[name], { type: 'rgb' });
    colors[name] = { DEFAULT: `rgb(var(${colorName(name, 500)}, ${rgbValue(mcColor[500])}))` };
    Object.entries(mcColor).forEach(([k, v]) => {
      colors[name][k] = `rgb(var(${colorName(name, k)}, ${rgbValue(v)}))`;
    });
  }
  return colors as Colors;
}
