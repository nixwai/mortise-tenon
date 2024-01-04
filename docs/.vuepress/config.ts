import { defineUserConfig, defaultTheme } from "vuepress";
import { navbar } from "./configs/navbar";

export default defineUserConfig({
  lang: "zh-CN",
  title: "XDesign",
  description: "一个可简单可复杂的组件库",
  base: "/",
  theme: defaultTheme({
    navbar,
  }),
});
