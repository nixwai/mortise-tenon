import type { Theme } from '@unocss/preset-mini';
import type { CSSValue, ShortcutValue } from 'unocss';
import { parseColor } from '@unocss/preset-mini';
import { mc } from 'magic-color';
import { colorName } from '.';

/** 颜色的明亮度差值 */
const colorDiff: Record<string, number> = {
  50: -450,
  100: -400,
  200: -300,
  300: -200,
  400: -100,
  500: 0,
  600: 100,
  700: 200,
  800: 300,
  900: 400,
  950: 450,
};

const colorKeys = Object.keys(colorDiff);

/**
 * 初始化context颜色的配置
 * @returns 预设context颜色
 *
 * @example
 * ```ts
 * getContextColor() =>
 * {
 *   'DEFAULT': 'hsl(var(--mt-context-500))',
 *   '50': 'var(var(--mt-reserve-50, var(--mt-context-50)))',
 *   '100': 'var(var(--mt-reserve-100, var(--mt-context-100)))',
 *   ...
 * }
 * ```
 */
export function getContextColor() {
  const themeColors = Object.fromEntries(colorKeys.map((k) => {
    const reserveValue = colorName('reserve', k); // context的反转的明亮度
    const contextValue = colorName('context', k); // context的正常的明亮度
    return [k, `hsl(var(${reserveValue}, var(${contextValue})))`];
  }));
  themeColors.DEFAULT = 'hsl(var(--mt-context-500))';
  return themeColors;
}

/**
 * 设置的context反转明亮度
 * @returns
 * ```ts
 * {
 *    --mt-reserve-50: var(--mt-context-950);
 *    --mt-reserve-100: var(--mt-context-900);
 *    --mt-reserve-200: var(--mt-context-800);
 *    ...
 * }
  ```
 */
export function reserveContextColor(): CSSValue {
  const cssValue: CSSValue = {};
  colorKeys.forEach((k) => {
    cssValue[`${colorName('reserve', k)}`] = `var(${colorName('context', 500 - colorDiff[k])})`;
  });
  return cssValue;
}

/** 提取预设中的颜色明亮度 */
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
 * @returns context颜色对应的各个明亮度颜色值
 *
 * @example
 * ```ts
 * resolveContextColor(danger-500, theme, [500,400,600])
 * => {
 * '--mt-context-500': 'var(--mt-danger-500-h, 1) var(--mt-danger-500-s, 90) calc(var(--mt-danger-500-l, 60) - -10)',
 * '--mt-context-400': 'var(--mt-danger-500-h, 1) var(--mt-danger-500-s, 90) calc(var(--mt-danger-500-l, 60) - 0)',
 * '--mt-context-600': 'var(--mt-danger-500-h, 1) var(--mt-danger-500-s, 90) calc(var(--mt-danger-500-l, 60) - 10)',
 * }
 * ```
 */
export function resolveContextColor(str: string, theme: Theme, lightness = colorKeys) {
  if (str.includes('context')) {
    return '';
  }

  const parsedColor = parseColor(str, theme);
  if (!parsedColor || !parsedColor.color || !parsedColor.cssColor) {
    return '';
  }

  let hslValue: undefined | (string | number)[];
  // 如果是hsl类型直接赋值
  if (parsedColor.cssColor.type === 'hsl') {
    hslValue = parsedColor.cssColor.components;
  }
  // 否则使用magic-color转化为hsl
  if (!hslValue && mc.valid(parsedColor.color)) {
    hslValue = mc(parsedColor.color).hsl();
  }

  if (hslValue && hslValue.length >= 3) {
    let colorLightness: string[] = [];
    // 过滤可用的颜色明亮度和反转的明亮度
    lightness.forEach((key) => {
      if (!key) {
        colorLightness.push('500');
      }
      if (colorKeys.includes(key)) {
        colorLightness.push(key);
        colorLightness.push(String(500 - colorDiff[key]));
      }
    });
    // 去重颜色的明亮度
    colorLightness = Array.from(new Set(colorLightness));
    // 生成color对应的css变量
    const [h, s, l] = hslValue;
    const lValue = Number.isNaN(Number(l)) ? String(l).replace('%', '') : Number(l);
    const colorValues = colorLightness.map((key) => {
      let countValue = lValue;
      const diff = colorDiff[key] / 10;
      if (diff) {
        countValue = typeof lValue === 'number' ? lValue - diff : `calc(${lValue} - ${diff})`;
      }
      return [h, s, countValue].join(' ');
    });
    return Object.fromEntries(colorLightness.map((key, index) => {
      return [`--mt-context-${key}`, colorValues[index]];
    }));
  }
  return '';
}
