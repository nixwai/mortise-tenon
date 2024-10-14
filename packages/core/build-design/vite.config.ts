import { dirname, relative, resolve } from 'node:path';
import vue from '@vitejs/plugin-vue';
import copy from 'rollup-plugin-copy';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { compRoot, mtEsOutput, mtLibOutput, mtOutput, projRoot } from '../paths';

const entryIndex = resolve(__dirname, './index.ts');

export default defineConfig({
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
      include: compRoot,
      outDir: [mtEsOutput, mtLibOutput],
      tsconfigPath: resolve(projRoot, 'tsconfig.json'),
    }),
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