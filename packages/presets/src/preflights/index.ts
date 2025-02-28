import type { Theme } from '@unocss/preset-mini';
import type { Preflight } from 'unocss';
import { resolveCtxColor } from 'unocss-preset-ctx';

export const preflights: Preflight[] = [
  {
    getCSS: ({ theme }) => {
      const ctxColor = Object.assign(
        {},
        resolveCtxColor('ctx-c-gray_gray-500', theme),
        resolveCtxColor('ctx-c-mt_primary', theme),
      );
      return `
        :root {
          ${Object.entries(ctxColor).map(([k, v]) => `${k}: ${v};`).join('\n')}
        }
      `;
    },
  },
  {
  // 定义选中文字选中的颜色
    getCSS: ({ theme }: { theme: Theme }) => {
      const themeColor = theme.colors?.primary;
      if (themeColor && typeof themeColor === 'object') {
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
  },
];
