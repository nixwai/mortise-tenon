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
        text: 'objectFormatPath',
        link: '/zh/utils/object-format-path.md',
      },
    ],
  },
  {
    text: '集合',
    items: [
      {
        text: 'dataFormatPath',
        link: '/zh/utils/data-format-path.md',
      },
    ],
  },
  {
    text: '时间',
    items: [
      {
        text: 'soonerAndLater[times]',
        link: '/zh/utils/sooner-and-later-times.md',
      },
    ],
  },
  {
    text: 'DOM',
    items: [
      {
        text: 'domResize',
        link: '/zh/utils/dom-resize.md',
      },
    ],
  },
  {
    text: '变更日志',
    link: '/zh/utils/changelog.md',
  },
];
