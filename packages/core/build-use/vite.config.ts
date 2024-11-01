import { resolve } from 'node:path';
import copy from 'rollup-plugin-copy';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { hookRoot, projRoot, useOutput } from '../paths';

const entryIndex = resolve(__dirname, './index.ts');

export default defineConfig({
  build: {
    emptyOutDir: true,
    sourcemap: true,
    lib: {
      entry: { index: entryIndex },
      name: 'mortise-tenon-use',
      fileName: 'mortise-tenon-use',
    },
    rollupOptions: {
      external: ['vue'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].mjs',
          preserveModules: true,
          exports: 'named',
          dir: resolve(useOutput, 'es'),
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          exports: 'named',
          dir: resolve(useOutput, 'lib'),
        },
      ],
    },
  },
  resolve: { alias: { '@mortise-tenon/hooks': hookRoot } },
  plugins: [
    dts({
      entryRoot: hookRoot,
      include: hookRoot,
      outDir: resolve(useOutput, 'types'),
      tsconfigPath: resolve(projRoot, 'tsconfig.json'),
    }),
    copy({
      verbose: true,
      hook: 'buildStart',
      targets: [
        {
          src: 'README.md',
          dest: useOutput,
        },
        {
          src: 'package.json',
          dest: useOutput,
        },
      ],
    }),
  ],
});
