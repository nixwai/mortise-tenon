import type { Theme } from '@unocss/preset-mini';
import { mc } from 'magic-color';
import { colorName, hslValue } from '../utils';
import { getContextColor } from '../utils/context';

type Colors = Theme['colors'];

/** 主题颜色 */
const primaryColors = themeColors({ primary: '#3451b2' });

export const theme: Theme = {
  colors: {
    ...primaryColors,
    context: getContextColor(),
  },
};

/**
 * 自定义颜色
 * @param options 名称与颜色映射配置
 * @returns 返回对应的多明亮度的颜色
 */
export function themeColors(options: Record<string, string>): Colors {
  const colors: Record<string, Record<string, string>> = {};
  for (const name in options) {
    const mcColor = mc.theme(options[name], { type: 'hsl' });
    // 颜色值优先使用定义的颜色变量名，让其具备动态颜色生成，未定义时再使用mc.theme获取的颜色值
    colors[name] = {};
    colors[name].DEFAULT = getHslColorValue(`${name}-DEFAULT`, mc(options[name]).hsl().join(' '));
    Object.entries(mcColor).forEach(([k, v]) => {
      colors[name][k] = getHslColorValue(`${name}-${k}`, v);
    });
  }
  return colors;
}

/**
 * 获取hsl动态变量值
 * @param name 名称
 * @param color hsl颜色值
 * @returns hsl动态变量值
 */
function getHslColorValue(name: string, color: string) {
  const [h, s, l] = hslValue(color).split(' ');
  const hue = `var(${colorName(`${name}`, 'h')}, ${h})`;
  const saturation = `var(${colorName(`${name}`, 's')}, ${s})`;
  const lightness = `var(${colorName(`${name}`, 'l')}, ${l})`;
  return `hsl(${hue} ${saturation} ${lightness})`;
}
