import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    //打包文件目录
    outDir: 'es',
    //压缩
    //minify: false,
    emptyOutDir: true,
    rollupOptions: {
      //忽略打包vue文件
      external: ['vue'],
      input: ['../components/index.ts'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].mjs',
          preserveModules: true,
          exports: 'named',
          dir: '../../dist/es'
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          exports: 'named',
          dir: '../../dist/lib'
        }
      ]
    },
    lib: {
      entry: '../components/index.ts'
    }
  },
  plugins: [
    vue(),
    dts({
      entryRoot: '../components/index.ts',
      outDir: ['../../dist/es/src', '../../dist/lib/src'],
      // 指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
      tsconfigPath: '../../tsconfig.json'
    })
  ]
});
