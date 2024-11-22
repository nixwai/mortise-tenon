import type { SidebarOptions } from '@vuepress/theme-default';

export const sidebar: SidebarOptions = {
  '/zh/components/': [
    {
      text: '开发指南',
      children: [
        {
          text: '安装',
          link: 'install.md',
        },
      ],
    },
    {
      text: '基础组件',
      children: [
        {
          text: 'expand 折叠',
          link: 'expand.md',
        },
        {
          text: 'sort 排序',
          link: 'sort.md',
        },
        {
          text: 'table 表格',
          link: 'table.md',
        },
      ],
    },
  ],
  '/zh/hooks/': [
    {
      text: '开发指南',
      children: [
        {
          text: '安装',
          link: 'install.md',
        },
      ],
    },
    {
      text: '对象',
      children: [
        {
          text: 'useThrottleControl',
          link: 'use-throttle-control.md',
        },
      ],
    },
  ],
  '/zh/utils/': [
    {
      text: '开发指南',
      children: [
        {
          text: '安装',
          link: 'install.md',
        },
      ],
    },
    {
      text: '对象',
      children: [
        {
          text: 'objectFormatKey',
          link: 'object-format-key.md',
        },
      ],
    },
  ],
};
