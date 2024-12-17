import { mc } from 'magic-color';
import { colorName, hslValue } from './utils';

export type ChangeType = 'theme' | 'preflight';

/**
 * 修改颜色变量值
 * @param params 参数对象
 * @param params.name 颜色名称
 * @param params.color 颜色值
 * @param params.type 修改类型，主题和全局变量
 * @param params.dom 目标元素，转入document.documentElement时会修改整个页面主题
 */
export function updateColorValue(params: { name: string, color: string, type: ChangeType[], dom?: HTMLElement }) {
  const { name, color, type, dom } = params;
  if (!dom) {
    return;
  }

  const colors = getHslColors(name, color, type);

  colors.forEach(([name, color]) => {
    dom.style.setProperty(name, color);
  });
}

/**
 * 获取hsl颜色值
 * @param name 颜色名称
 * @param color 颜色值
 * @return 返回hsl颜色值组合列表
 */
function getHslColors(name: string, color: string, type: ChangeType[]) {
  const theme = mc.theme(color, { type: 'hsl' });
  const colors: string[][] = [];
  const defaultHsl = mc(color).hsl();
  if (type.includes('theme')) {
    colors.push(
      [colorName(name, 'DEFAULT', 'h'), String(defaultHsl[0])],
      [colorName(name, 'DEFAULT', 's'), String(defaultHsl[1])],
      [colorName(name, 'DEFAULT', 'l'), String(defaultHsl[2])],
    );
    Object.entries(theme).forEach(([k, v]) => {
      const [h, s, l] = hslValue(v).split(' ');
      colors.push(
        [colorName(name, k, 'h'), h],
        [colorName(name, k, 's'), s],
        [colorName(name, k, 'l'), l],
      );
    });
  }
  if (type.includes('preflight')) {
    colors.push([colorName(name, 'DEFAULT'), defaultHsl.join(' ')]);
    Object.entries(theme).forEach(([k, v]) => {
      colors.push([colorName(name, k), hslValue(v)]);
    });
  }
  return colors;
}
