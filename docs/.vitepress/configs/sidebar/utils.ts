import type { DefaultTheme } from 'vitepress';

export const utilsSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: '开发指南',
    items: [
      {
        text: '安装',
        link: '/zh/utils/install.md',
      },
    ],
  },
  {
    text: '对象',
    items: [
      {
        text: 'objectFormatKey',
        link: '/zh/utils/object-format-key.md',
      },
    ],
  },
  {
    text: '时间',
    items: [
      {
        text: 'getTimeRange',
        link: '/zh/utils/get-time-range.md',
      },
    ],
  },
];
