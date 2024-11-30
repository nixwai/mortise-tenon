# 开始使用

mortise-tenon-preset是基于UnoCSS的开发的UI预设，通过使用预设中的CSS样式，你可以快速构建你的UI。
使用UnoCss时需要根据项目使用的打包工具进行配置，请查看有关[文档](https://unocss.dev/integrations/vite)

# 安装

#### 使用 npm

```shell
npm install unocss mortise-tenon-preset -D
```

#### 使用 yarn

```shell
yarn add unocss mortise-tenon-tool -D
```

#### 使用 pnpm

```shell
pnpm add unocss mortise-tenon-tool -D
```

# 配置

在`uno.config.ts`文件中，添加预设：

```ts
import presetMortiseTenon from 'mortise-tenon-preset';
import { defineConfig, presetUno } from 'unocss';

export default defineConfig({ presets: [presetUno(), presetMortiseTenon()] });
```

#### 使用示例

```vue
<template>
  <button class="btn">
    按钮
  </button>
</template>
```
