import { resolve } from 'node:path';
import copy from 'rollup-plugin-copy';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { presetOutput, presetRoot, projRoot } from '../paths';

const entryIndex = resolve(__dirname, './index.ts');

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: { index: entryIndex },
      name: 'mortise-tenon-preset',
      fileName: 'mortise-tenon-preset',
    },
    rollupOptions: {
      external: ['unocss'],
      output: [
        {
          format: 'es',
          entryFileNames: 'index.mjs',
          dir: resolve(presetOutput, 'es'),
        },
        {
          format: 'cjs',
          entryFileNames: 'index.js',
          dir: resolve(presetOutput, 'lib'),
        },
      ],
    },
  },
  resolve: { alias: { '@mortise-tenon/presets': presetRoot } },
  plugins: [
    dts({
      entryRoot: presetRoot,
      include: presetRoot,
      outDir: resolve(presetOutput, 'types'),
      tsconfigPath: resolve(projRoot, 'tsconfig.json'),
    }),
    copy({
      verbose: true,
      hook: 'buildStart',
      targets: [
        {
          src: 'README.md',
          dest: presetOutput,
        },
        {
          src: 'package.json',
          dest: presetOutput,
        },
      ],
    }),
  ],
});
