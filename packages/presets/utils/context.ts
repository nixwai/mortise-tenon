import type { Theme } from '@unocss/preset-mini';
import type { ShortcutValue } from 'unocss';
import { parseColor } from '@unocss/preset-mini';
import { mc } from 'magic-color';
import { colorName, hslValue } from '.';

/** 颜色的明亮度差值 */
const colorDiff: Record<string, number> = {
  50: -500,
  100: -400,
  200: -300,
  300: -200,
  400: -100,
  500: 0,
  600: 100,
  700: 200,
  800: 300,
  900: 400,
  950: 500,
};

/**
 * 初始化context颜色的颜色为主题颜色
 * @param primaryColors 预设主题颜色
 * @returns 预设context颜色
 */
export function getContextColor(primaryColors: Record<string, string>) {
  const keys = Object.keys(colorDiff).concat('DEFAULT');
  const colorValue = resolveContextColor('primary', { colors: { primary: primaryColors } }, keys);
  if (colorValue) {
    return Object.fromEntries(
      Object.values(colorValue).map((value, index) =>
        [keys[index], `hsl(var(${colorName('context', keys[index])}, ${value}))`],
      ),
    );
  }
  return {};
}

/** 获取预设中的颜色明亮度 */
export function getContextLightness(preset: Record<string, ShortcutValue>) {
  const lightness: string[] = [];
  Object.values(preset).forEach((str) => {
    if (typeof str === 'string') {
      const matches = str.match(/-context([-\d]*)/g);
      if (matches) {
        matches.forEach((match) => {
          const value = match.replace(/-context-?/, '');
          lightness.push(value);
        });
      }
    }
  });
  return Array.from(new Set(lightness));
}

/**
 * 指定context的颜色以及所对应的颜色明亮度
 * @param str 颜色值，可以是theme中设置的颜色，css中颜色值
 * @param theme 预设主题
 * @param lightness 需要生成的明亮度
 * @param isReverse 是否反转明亮度
 * @returns context颜色对应的各个明亮度颜色值
 *
 * @example
 * ```ts
 * resolveContextColor(danger-500, theme, [500,400,600])
 * => {
 * '--mt-context-500': 'var(--mt-danger-600, 1 77 55)',
 * '--mt-context-400': 'var(--mt-danger-500, 1 90 60)',
 * '--mt-context-600': 'var(--mt-danger-700, 1 78 42)',
 * }
 * ```
 */
export function resolveContextColor(str: string, theme: Theme, lightness: string[], isReverse?: boolean) {
  if (str.includes('context')) {
    return '';
  }

  const parsedColor = parseColor(str, theme);
  if (!parsedColor) {
    return '';
  }

  let { color, name, no, cssColor } = parsedColor;
  // 颜色是theme中配置的预设颜色
  if (color && color.includes('var(--mt-')) {
    if (no === 'DEFAULT') {
      const colorValue = hslValue(color);
      no = Object.keys(colorDiff).find(k => hslValue(parseColor(`${name}-${k}`, theme)?.color) === colorValue) || '';
    }
    if (no) {
      // 直接用50跟950计算时，会有150，850这类不存在的明亮度，要转下
      let l = Number(no);
      l = l < 100 ? 0 : l;
      l = l > 900 ? 1000 : l;
      const newLightness = lightness.map((key) => {
        if (!key || key === 'DEFAULT') {
          return Number(no);
        }
        const diff = colorDiff[key];
        let value = l + (diff * (isReverse ? -1 : 1));
        value = value < 50 ? 50 : value;
        value = value > 950 ? 950 : value;
        return value;
      });
      return Object.fromEntries(lightness.map((key, index) => {
        const colorName = `${name}-${newLightness[index]}`;
        const colorValue = parseColor(colorName, theme)?.cssColor?.components?.[0] || undefined;
        return [`--mt-context-${key || 'DEFAULT'}`, colorValue];
      }));
    }
    return '';
  }

  if (color && mc.valid(color) && cssColor) {
    const [h, s, l] = mc(color).hsl();
    const colorValues = lightness.map((key) => {
      if (!key || key === 'DEFAULT') {
        return [h, s, l].join(' ');
      }
      const diff = colorDiff[key] / 10;
      let value = l - (diff * (isReverse ? -1 : 1));
      value = value < 5 ? 5 : value;
      value = value > 95 ? 95 : value;
      return [h, s, value].join(' ');
    });
    return Object.fromEntries(lightness.map((key, index) => {
      return [`--mt-context-${key || 'DEFAULT'}`, colorValues[index]];
    }));
  }

  return '';
}