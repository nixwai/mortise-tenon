# 主题颜色

Mortise Tenon提供了UI的主题颜色（默认为蓝色#3451b2），可单独将'primary'作为颜色属性使用，能够更好的统一项目中的主题样式。

```vue
<template>
  <button bg-primary>
    Button
  </button>

  <span c-primary-700>
    Span
  </span>
</template>
```

您可以在uno.config.ts中修改配置主题颜色，mortise-tenon-preset提供了`themeColors`方法，用于生成主题颜色。

除了主题颜色，该方法也支持您自定义一些特殊的场景颜色，例如：'warning'、'danger'、'success'...

颜色是通过[magic-color](https://color.zyob.top/)生成，您可以在[官方文档](https://color.zyob.top/)中预览和调试。

```ts
import { presetMortiseTenon, themeColors } from 'mortise-tenon-preset';
import { defineConfig, presetUno } from 'unocss';

export default defineConfig({
  presets: [presetUno(), presetMortiseTenon()],
  theme: { colors: themeColors({ primary: '#3451b2', warning: '#ffb300', danger: '#e53935' }) },
});
```

<demo vue="presets/theme-color/demo1.vue"/>
