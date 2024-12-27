# 可配置项

```ts
export interface PresetMtOptions {
  /**
   * 主题色
   * @default '#3451b2'
   */
  color?: string
  /**
   * 类名前缀
   */
  prefix?: string
  /**
   * 自定义预设
   */
  custom?: OptionsCustom
}
```

## color

主题颜色，默认为`#3451b2`。

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

## custom

预设自定义，可以自定义预设，自定义的预设会覆盖原有的预设，因此需要先通过复制源码的配置进行修改覆盖，每个预设UI的文档中均有源码链接。

例如：

```ts
import type { OptionsCustom } from 'mortise-tenon-preset';
import { presetMortiseTenon } from 'mortise-tenon-preset';
import { defineConfig, presetUno } from 'unocss';

const customPreset: OptionsCustom = {
  btn: {
    // 覆盖后原有的btn样式便默认没有边框
    common: 'b-none cursor-pointer',
  },
};

export default defineConfig({
  presets: [
    presetUno(),
    presetMortiseTenon({ custom: customPreset }),
  ],
});
```
