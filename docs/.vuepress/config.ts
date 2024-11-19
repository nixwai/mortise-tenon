import type { Plugin } from 'vuepress';
import { resolve } from 'node:path';
import { demoBlockPlugin } from '@ddongui/vuepress-plugin-demo-block';
import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';
import { navbar } from './configs/navbar';
import { sidebar } from './configs/sidebar';

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Mortise Tenon',
  description: '榫卯是极为精巧的设计结构',
  base: '/mortise-tenon/',
  plugins: [
    demoBlockPlugin({ examplesPath: resolve(__dirname, '../examples') }) as Plugin,
  ],
  bundler: viteBundler(),
  dest: resolve(__dirname, '../../dist/docs'),
  theme: defaultTheme({
    sidebarDepth: 1,
    navbar,
    sidebar,
  }),
});
