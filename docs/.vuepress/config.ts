import { defineUserConfig, defaultTheme } from 'vuepress';
import type { Plugin } from 'vuepress';
import { navbar } from './configs/navbar';
import { sidebar } from './configs/sidebar';
import { demoBlockPlugin } from '@ddongui/vuepress-plugin-demo-block';
import path from 'path';

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'MtDesign',
  description: '一个可简单可复杂的组件库',
  base: '/',
  plugins: [demoBlockPlugin({ examplesPath: path.resolve(__dirname, '../examples') }) as Plugin],
  theme: defaultTheme({
    navbar,
    sidebar
  })
});
