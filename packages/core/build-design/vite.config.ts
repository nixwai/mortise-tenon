import { dirname, relative, resolve } from 'node:path';
import vue from '@vitejs/plugin-vue';
import copy from 'rollup-plugin-copy';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { compRoot, designOutput, projRoot } from '../paths';

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
    UnoCSS({ mode: 'vue-scoped' }),
    {
      name: 'style-inject',
      generateBundle({ format }, bundle) {
        const cssPath: Record<string, string[]> = {};
        const vueBundler: Record<string, any> = {};
        for (const bundler of Object.values(bundle)) {
          const { fileName } = bundler;
          const directoryMatch = fileName.split('/').slice(0, 2).join('/');
          // 收集需要组件的css文件地址
          if (fileName.includes('.css')) {
            if (!cssPath[directoryMatch]) {
              cssPath[directoryMatch] = [];
            }
            cssPath[directoryMatch].push(fileName);
          }
          // 收集需要插入css的组件入口文件
          if (directoryMatch && 'code' in bundler && [`${directoryMatch}/index.js`, `${directoryMatch}/index.mjs`].includes(fileName)) {
            vueBundler[directoryMatch] = bundler;
          }
        }
        for (const key in vueBundler) {
          const bundler = vueBundler[key];
          if (!cssPath[key]) {
            continue;
          }
          // 生成引入文件代码
          const injection = cssPath[key].map((cssFilePath) => {
            cssFilePath = relative(dirname(bundler.fileName), cssFilePath).replaceAll(/[\\/]+/g, '/');
            cssFilePath = cssFilePath.startsWith('.') ? cssFilePath : `./${cssFilePath}`;
            return format === 'es' ? `import '${cssFilePath}';\n` : `require('${cssFilePath}');\n`;
          }).join('');
            // 插入代码
          bundler.code = bundler.code.concat(injection);
        }
      },
    },
    dts({
      entryRoot: compRoot,
      include: compRoot,
      exclude: [resolve(compRoot, '**/__test__')],
      outDir: resolve(designOutput, 'types'),
      tsconfigPath: resolve(projRoot, 'tsconfig.json'),
    }),
    copy({
      verbose: true,
      hook: 'buildStart',
      targets: [
        {
          src: 'README.md',
          dest: designOutput,
        },
        {
          src: 'package.json',
          dest: designOutput,
        },
      ],
    }),
  ],
});
