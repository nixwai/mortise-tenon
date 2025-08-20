import { resolve } from 'node:path';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { defineConfig } from 'vite';
import { dtsPlugin, styleInjectPlugin } from '../vite-configs';
import { designOutput, designRoot } from './paths';

export default defineConfig({
  css: { preprocessorOptions: { scss: { api: 'modern-compiler' } } },
  build: {
    emptyOutDir: false,
    sourcemap: true,
    cssCodeSplit: true,
    lib: { entry: { index: resolve(designRoot, 'src/index.ts') } },
    rollupOptions: {
      external: ['vue', 'lodash-es', '@vueuse/core', 'dom-transform-tool'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].mjs',
          preserveModules: true,
          exports: 'named',
          dir: resolve(designOutput, 'es'),
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          exports: 'named',
          dir: resolve(designOutput, 'lib'),
        },
      ],
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    styleInjectPlugin(),
    dtsPlugin(resolve(designRoot, 'src'), designOutput),
  ],
});
