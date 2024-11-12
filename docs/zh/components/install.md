# 开始使用

mortise-tenon-design 是基于Vue3开发的组件库，提供了最为基础功能的组件，同时开放了特殊的属性插槽，可以通过组件与组件、组件与方法的组合快速扩展各种功能。

# 安装

#### 使用 npm

```shell
npm install mortise-tenon-design
```

#### 使用 yarn

```shell
yarn add mortise-tenon-design
```

#### 使用 pnpm

```shell
pnpm add mortise-tenon-design
```

#### 使用示例

只需从mortise-tenon-design导入你需要的组件，当前组件库样式已在组件中注册，无需额外引入，但不支持SSR。

```vue
<script setup lang="ts">
import { MtExpandBox } from 'mortise-tenon-design';
import { ref } from 'vue';

const open = ref(true);

function toggle() {
  open.value = !open.value;
}
</script>

<template>
  <button @click="toggle">
    点击
  </button>
  <MtExpandBox :open="open">
    展开后内容
  </MtExpandBox>
</template>
```
