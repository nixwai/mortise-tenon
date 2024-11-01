import { resolve } from 'node:path';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  css: { preprocessorOptions: { scss: { api: 'modern-compiler' } } },
  plugins: [vue()],
  base: './',
  build: { outDir: resolve(__dirname, '../dist/examples') },
});
