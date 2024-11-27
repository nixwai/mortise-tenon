import type { DefaultTheme } from 'vitepress';

export const sidebar: DefaultTheme.Sidebar = {
  '/zh/components/': [
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
  ],
  '/zh/hooks/': [
    {
      text: '开发指南',
      items: [
        {
          text: '安装',
          link: '/zh/hooks/install.md',
        },
      ],
    },
    {
      text: '对象',
      items: [
        {
          text: 'useThrottleControl',
          link: '/zh/hooks/use-throttle-control.md',
        },
      ],
    },
  ],
  '/zh/utils/': [
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
  ],
};
