import type { DefaultTheme } from 'vitepress';

export const presetsSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: '开发指南',
    items: [
      {
        text: '安装',
        link: '/zh/presets/install.md',
      },
      {
        text: '主题颜色',
        link: '/zh/presets/theme-color.md',
      },
      {
        text: '上下文颜色',
        link: '/zh/presets/context-color.md',
      },
      {
        text: '可配置项',
        link: '/zh/presets/config-option.md',
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
