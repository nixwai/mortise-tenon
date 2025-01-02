import { updateThemeColor as updatePresetColor } from 'unocss-preset-ctx/helper';

export function updateThemeColor(params: {
  name: string
  color: string
  dom?: HTMLElement
}) {
  if (params.dom) {
    updatePresetColor(params);
    // 修改全局颜色变量mt的颜色
    if (params.name === 'primary') {
      const mtColor = [
        ['--ctx-c-mt-h', 'var(--ctx-primary-DEFAULT-h)'],
        ['--ctx-c-mt-s', 'var(--ctx-primary-DEFAULT-s)'],
        ['--ctx-c-mt-l', 'var(--ctx-primary-DEFAULT-l)'],
      ];
      mtColor.forEach(([key, value]) => {
        params.dom?.style.setProperty(key, value);
      });
    }
  }
}
