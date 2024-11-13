# 开始使用

mortise-tenon-use 是基础的 Vue 组合式工具的集合，包含多种不同场景下的功能函数，vue2与vue3中均能使用。

# 安装

#### 使用 npm

```shell
npm install mortise-tenon-use
```

#### 使用 yarn

```shell
yarn add mortise-tenon-use
```

#### 使用 pnpm

```shell
pnpm add mortise-tenon-use
```

#### 使用示例

只需从mortise-tenon-use导入你需要的方法。

```vue
<script setup lang="ts">
import { useThrottleControl } from 'mortise-tenon-use';
import { ref } from 'vue';

const num = ref(0);

const { throttleFn: handleClick } = useThrottleControl(1000, () => num.value++);
</script>

<template>
  <button @click="handleClick">
    {{ num }}
  </button>
</template>
```
