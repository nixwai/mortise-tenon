import { resolve } from 'node:path';
import vue from '@vitejs/plugin-vue';
import copy from 'rollup-plugin-copy';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { compRoot, mtEsOutput, mtLibOutput, mtOutput, projRoot } from '../paths';

const entryIndex = resolve(__dirname, './index.ts');

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: { index: entryIndex },
      name: 'mortise-tenon-design',
      fileName: 'mortise-tenon-design',
    },
    sourcemap: true,
    rollupOptions: {
      external: ['vue', /\.scss/],
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
      include: compRoot,
      outDir: [mtEsOutput, mtLibOutput],
      tsconfigPath: resolve(projRoot, 'tsconfig.json'),
    }),
    {
      name: 'style',
      generateBundle(_config, bundle) {
        for (const key in bundle) {
          const bundler = bundle[key];
          if ('code' in bundler && bundler.code.includes('.scss')) {
            // 替换scss为css，覆盖原文件
            this.emitFile({
              type: 'asset',
              fileName: key, // 文件名名不变
              source: bundler.code.replace(/\.scss/g, '.css'),
            });
          }
        }
      },
    },
    copy({
      verbose: true,
      hook: 'buildStart',
      targets: [
        {
          src: 'README.md',
          dest: mtOutput,
        },
        {
          src: 'package.json',
          dest: mtOutput,
        },
      ],
    }),
  ],
});
