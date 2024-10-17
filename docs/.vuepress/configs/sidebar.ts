import type { SidebarOptions } from '@vuepress/theme-default';

export const sidebar: SidebarOptions = {
  '/zh/guide/': [
    {
      text: '基础',
      children: [
        {
          text: '安装',
          link: 'install.md',
        },
      ],
    },
  ],
  '/zh/components/': [
    {
      text: '基础组件',
      children: [
        {
          text: '按钮',
          link: 'button.md',
        },
        {
          text: '折叠面板',
          link: 'expand-box.md',
        },
      ],
    },
  ],
};
