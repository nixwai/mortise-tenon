import { defineUserConfig } from 'vuepress';
import { defaultTheme } from '@vuepress/theme-default';
import type { Plugin } from 'vuepress';
import { navbar } from './configs/navbar';
import { sidebar } from './configs/sidebar';
import { demoBlockPlugin } from '@ddongui/vuepress-plugin-demo-block';
import { viteBundler } from '@vuepress/bundler-vite';
import { resolve } from 'path';

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Mortise Tenon Design',
  description: '一个可简单可复杂的组件库',
  base: '/',
  plugins: [demoBlockPlugin({ examplesPath: resolve(__dirname, '../examples') }) as Plugin],
  bundler: viteBundler(),
  dest: resolve(__dirname, '../../dist/docs'),
  theme: defaultTheme({
    navbar,
    sidebar,
  }),
});
