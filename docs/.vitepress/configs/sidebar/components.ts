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
    text: '数据',
    items: [
      {
        text: 'Table 表格',
        link: '/zh/components/table.md',
      },
    ],
  },
  {
    text: '功能',
    items: [
      {
        text: 'Expand 折叠',
        link: '/zh/components/expand.md',
      },
      {
        text: 'Sort 排序',
        link: '/zh/components/sort.md',
      },
    ],
  },
  {
    text: '变更日志',
    link: '/zh/components/changelog.md',
  },
];
