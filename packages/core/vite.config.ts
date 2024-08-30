import { resolve } from 'path';
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
    lib: {
      entry: {
        index: resolve(__dirname, 'index.ts')
      },
      name: 'mortise-tenon-design',
      fileName: 'index',
      formats: ['es', 'umd', 'cjs']
    },
    rollupOptions: {
      //忽略打包vue文件
      external: ['vue'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].mjs',
          preserveModules: true,
          exports: 'named',
          dir: '../mortise-tenon-design/es'
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          exports: 'named',
          dir: '../mortise-tenon-design/lib'
        }
      ]
    }
  },
  plugins: [
    vue(),
    dts({
      outDir: '../mortise-tenon-design/type',
      tsconfigPath: '../../tsconfig.json'
    })
  ]
});
