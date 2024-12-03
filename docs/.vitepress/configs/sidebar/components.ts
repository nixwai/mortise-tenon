import type { DefaultTheme } from 'vitepress';

export const componentsSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: '开发指南',
    items: [
      {
        text: '安装',
        link: '/zh/components/install.md',
      },
    ],
  },
  {
    text: '基础组件',
    items: [
      {
        text: 'expand 折叠',
        link: '/zh/components/expand.md',
      },
      {
        text: 'sort 排序',
        link: '/zh/components/sort.md',
      },
      {
        text: 'table 表格',
        link: '/zh/components/table.md',
      },
    ],
  },
];
