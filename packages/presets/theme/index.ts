import type { Theme } from '@unocss/preset-mini';
import { mc } from 'magic-color';
import { colorName, hslValue } from '../utils';

type Colors = Theme['colors'];

/** 主题颜色 */
const primaryColor = themeColors({ primary: '#3451b2' })!.primary;
/** 用于UI的颜色控制，默认跟主题颜色一致 */
const contextColor = Object.fromEntries(Object.entries(primaryColor).map(([k]) =>
  [k, `hsl(var(${colorName('context', k)}, var(${colorName('primary', k)})))`],
));

export const theme: Theme = {
  colors: {
    primary: primaryColor,
    context: contextColor,
  },
};

/**
 * 自定义颜色
 * @param options 名称与颜色映射配置
 * @returns 返回对应的可多调色的颜色配置
 */
export function themeColors(options: Record<string, string>): Colors {
  const colors: Record<string, Record<string, string>> = {};
  for (const name in options) {
    const mcColor = mc.theme(options[name], { type: 'hsl' });
    // 颜色值优先使用定义的颜色变量名，让其具备动态颜色生成，未定义时再使用mc.theme获取的颜色值
    colors[name] = { DEFAULT: `hsl(var(${colorName(name, 'DEFAULT')}, ${mc(options[name]).hsl().join(' ')}))` };
    Object.entries(mcColor).forEach(([k, v]) => {
      colors[name][k] = `hsl(var(${colorName(name, k)}, ${hslValue(v)}))`;
    });
  }
  return colors;
}
