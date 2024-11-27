import { resolve } from 'node:path';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vitepress';
import { vitepressDemoPlugin } from 'vitepress-demo-plugin';
import { navbar } from './configs/navbar';
import { sidebar } from './configs/sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: 'Mortise Tenon',
  description: '榫卯是极为精巧的设计结构',
  base: '/mortise-tenon/',
  outDir: resolve(__dirname, '../../dist/docs'),
  vite: {
    plugins: [UnoCSS()],
    css: { preprocessorOptions: { scss: { api: 'modern-compiler' } } },
  },
  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    nav: navbar,
    sidebar,
    socialLinks: [{ icon: 'github', link: 'https://github.com/nixwai/mortise-tenon' }],
  },
  markdown: {
    config(md) {
      md.use(vitepressDemoPlugin, { demoDir: resolve(__dirname, '../examples') });
    },
  },
});
