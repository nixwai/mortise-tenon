import { NavbarConfig } from "vuepress";

export const navbar: NavbarConfig = [
  { text: "指南", link: "/guide/install" },
  { text: "组件", link: "/components/card" },
  {
    text: "更多项目",
    children: [
      {
        text: "ECharts数据大屏",
        link: "https://nixwai.github.io/xwai-echarts-view",
      },
    ],
  },
  { text: "Github", link: "https://github.com/nixwai/ex-design" },
];
