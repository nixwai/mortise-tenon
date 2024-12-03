import type { DefaultTheme } from 'vitepress';

export const presetsSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: '开发指南',
    items: [
      {
        text: '安装',
        link: '/zh/presets/install.md',
      },
    ],
  },
  {
    text: '基础',
    items: [
      {
        text: '按钮',
        link: '/zh/presets/button.md',
      },
    ],
  },
];
