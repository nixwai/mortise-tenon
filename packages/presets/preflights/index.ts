import type { Preflight } from 'unocss';

export const preflights: Preflight[] = [{
  // 定义选中文字选中的颜色
  getCSS: ({ theme }: Record<string, any>) => {
    const themeColor: string | undefined = theme.colors?.primary;
    if (themeColor) {
      return `
      :root {
        --mt-primary-color: ${themeColor[500]};
        --mt-primary-text: ${themeColor[100]};
      }

      .dark {
        --mt-primary-color: ${themeColor[600]};
        --mt-primary-text: ${themeColor[950]};
      }

      ::selection {
        color: var(--mt-primary-color);
        background-color: var(--mt-primary-text);
      }
    `;
    }
  },
}];
