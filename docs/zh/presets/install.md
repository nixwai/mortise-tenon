# 开始使用

mortise-tenon-preset是基于UnoCSS的开发的UI预设，通过使用预设中的CSS样式，你可以快速构建你的UI。

使用前请先按照[UnoCss](https://unocss.dev/integrations/vite)官方文档要求，为项目添加所需的UnoCss依赖与配置后，再根据以下步骤进行使用。

# 安装

#### 使用 npm

```shell
npm install mortise-tenon-preset -D
```

#### 使用 yarn

```shell
yarn add mortise-tenon-tool -D
```

#### 使用 pnpm

```shell
pnpm add mortise-tenon-tool -D
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
