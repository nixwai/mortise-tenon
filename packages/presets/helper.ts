import { getHslColors } from './utils';

/**
 * 修改颜色变量值
 * @param name 颜色名称
 * @param color 颜色值
 * @param dom 目标元素，转入document.documentElement时会修改整个页面主题
 */
export function updateColorValue(name: string, color: string, dom?: HTMLElement) {
  if (!dom) {
    return;
  }

  const colors = getHslColors(name, color);

  colors.forEach(([name, color]) => {
    dom.style.setProperty(name, color);
  });
}
