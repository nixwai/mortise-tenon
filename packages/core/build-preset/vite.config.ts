import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { presetOutput, presetRoot, projRoot } from '../paths';
import { copyPlugin } from '../vite-configs';

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
      external: ['unocss', 'magic-color'],
      output: [{
        format: 'es',
        entryFileNames: 'index.js',
        exports: 'named',
        dir: resolve(presetOutput, 'dist'),
      }],
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
    copyPlugin(presetOutput),
  ],
});
