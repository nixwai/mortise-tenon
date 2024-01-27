import { SidebarConfig } from 'vuepress';

export const sidebar: SidebarConfig = {
  '/zh/guide/': [
    {
      text: '基础',
      children: [
        {
          text: '安装',
          link: 'install.md'
        }
      ]
    }
  ],
  '/zh/components/': [
    {
      text: '基础组件',
      children: [
        {
          text: '卡片',
          link: 'card.md'
        }
      ]
    }
  ]
};
