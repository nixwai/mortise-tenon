import { resolve } from 'node:path';
import vue from '@vitejs/plugin-vue';
import copy from 'rollup-plugin-copy';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { compRoot, mtEsOutput, mtLibOutput, mtOutput, projRoot } from './paths';

const entryIndex = resolve(__dirname, './index.ts');

export default defineConfig({
  build: {
    emptyOutDir: true,
    lib: {
      entry: { index: entryIndex },
      name: 'mortise-tenon-design',
      fileName: 'mortise-tenon-design',
    },
    sourcemap: true,
    rollupOptions: {
      external: ['vue'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].mjs',
          preserveModules: true,
          exports: 'named',
          dir: mtEsOutput,
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          exports: 'named',
          dir: mtLibOutput,
        },
      ],
    },
  },
  resolve: { alias: { '@mortise-tenon-design/components': compRoot } },
  plugins: [
    vue(),
    dts({
      include: [entryIndex, compRoot],
      outDir: [mtEsOutput, mtLibOutput],
      tsconfigPath: resolve(projRoot, 'tsconfig.json'),
    }),
    copy({
      verbose: true,
      hook: 'buildStart',
      targets: [
        {
          src: '../mortise-tenon-design/README.md',
          dest: mtOutput,
        },
        {
          src: '../mortise-tenon-design/package.json',
          dest: mtOutput,
        },
      ],
    }),
  ],
});
