import { resolve } from 'node:path';
import copy from 'rollup-plugin-copy';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { projRoot, toolOutput, utilRoot } from '../paths';

const entryIndex = resolve(__dirname, './index.ts');

export default defineConfig({
  build: {
    emptyOutDir: false,
    sourcemap: true,
    lib: {
      entry: { index: entryIndex },
      name: 'mortise-tenon-tool',
      fileName: 'mortise-tenon-tool',
    },
    rollupOptions: {
      external: ['lodash-es'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].mjs',
          preserveModules: true,
          exports: 'named',
          dir: resolve(toolOutput, 'es'),
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          exports: 'named',
          dir: resolve(toolOutput, 'lib'),
        },
      ],
    },
  },
  resolve: { alias: { '@mortise-tenon/utils': utilRoot } },
  plugins: [
    dts({
      entryRoot: utilRoot,
      include: utilRoot,
      outDir: resolve(toolOutput, 'types'),
      tsconfigPath: resolve(projRoot, 'tsconfig.json'),
    }),
    copy({
      verbose: true,
      hook: 'buildStart',
      targets: [
        {
          src: 'README.md',
          dest: toolOutput,
        },
        {
          src: 'package.json',
          dest: toolOutput,
        },
      ],
    }),
  ],
});
