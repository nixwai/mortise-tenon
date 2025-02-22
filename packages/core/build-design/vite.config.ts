import { resolve } from 'node:path';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { compRoot, designOutput } from '../paths';
import { copyPlugin, dtsPlugin, styleInjectPlugin } from '../vite-configs';

const entryIndex = resolve(__dirname, './index.ts');

export default defineConfig({
  css: { preprocessorOptions: { scss: { api: 'modern-compiler' } } },
  build: {
    emptyOutDir: false,
    sourcemap: true,
    cssCodeSplit: true,
    lib: {
      entry: { index: entryIndex },
      name: 'mortise-tenon-design',
      fileName: 'mortise-tenon-design',
    },
    rollupOptions: {
      external: ['vue', 'lodash-es', '@vueuse/core'],
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
  resolve: { alias: { '@mortise-tenon/components': compRoot } },
  plugins: [
    vue(),
    styleInjectPlugin(),
    dtsPlugin(compRoot, designOutput),
    copyPlugin(designOutput, ['README.md', 'package.json', 'global.d.ts']),
  ],
});
