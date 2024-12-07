# 可配置项

```ts
export interface PresetMtOptions {
  /**
   * 类名前缀
   */
  prefix?: string
}
```

## prefix

类名前缀，为mortise-tenon-preset配置前缀，可以让你在项目中同时使用多种预设或快捷方式时避免类名冲突，导致样式覆盖。

```ts
import { presetMortiseTenon } from 'mortise-tenon-preset';
import { defineConfig, presetUno } from 'unocss';

export default defineConfig({
  presets: [presetUno(), presetMortiseTenon({ prefix: 'mt-' })],
  shortcuts: [
    { btn: 'py-2 px-4 font-semibold rounded-lg shadow-md' },
  ]
});
```

```vue
<template>
  <button mt-btn>
    presets button
  </button>

  <button btn>
    shortcuts button
  </button>
</template>
```
