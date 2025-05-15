import type { DefaultTheme } from 'vitepress';

export const hooksSidebar: DefaultTheme.SidebarItem[] = [
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
    text: '实用工具',
    items: [
      {
        text: 'useThrottleControl',
        link: '/zh/hooks/use-throttle-control.md',
      },
    ],
  },
  {
    text: '组件',
    items: [
      {
        text: 'createDynamicComponent',
        link: '/zh/hooks/create-dynamic-component.md',
      },
    ],
  },
  {
    text: '变更日志',
    link: '/zh/hooks/changelog.md',
  },
];
