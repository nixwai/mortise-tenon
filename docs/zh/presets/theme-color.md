# 主题颜色

Mortise Tenon提供了UI的主题颜色（默认为蓝色#3451b2），能够更好的统一项目中的主题样式。在项目您也可以使用'primary'作为主题颜色使用，后缀可添加[50，100，200，300，400，500，600，700，800，900，950]内的数字控制颜色明亮。

可以在参数`color`中传入颜色来修改主题颜色，颜色是通过[magic-color](https://color.zyob.top/)生成，您可以在[官方文档](https://color.zyob.top/)中预览和调试。

```ts
import { presetMortiseTenon } from 'mortise-tenon-preset';
import { defineConfig, presetWind3 } from 'unocss';

export default defineConfig({ presets: [presetWind3(), presetMortiseTenon({ color: '#3451b2' })], });
```

```vue
<template>
  <button class="b-primary">
    Button
  </button>

  <span class="c-primary-700">
    Span
  </span>

  <div class="div-style">
    Div
  </div>
</template>

<style scoped>
.div-style {
  --at-apply: 'bg-primary';
}
</style>
```

## 更多颜色

您可以在uno.config.ts中修改配置更多颜色类型，mortise-tenon-preset已经集成了[unocss-preset-ctx](https://nixwai.github.io/unocss-preset-ctx/zh/custom-color.html)中的`themeColors`与`updateThemeColor`方法，用于生成更多主题颜色和动态修改颜色。例如：'warning'、'danger'、'success'...

#### themeColors

```ts
import { presetMortiseTenon, themeColors } from 'mortise-tenon-preset';
import { defineConfig, presetWind3 } from 'unocss';

export default defineConfig({
  presets: [presetWind3(), presetMortiseTenon()],
  theme: { colors: themeColors({ warning: '#ffb300', danger: '#e53935' }) },
});
```

<demo vue="presets/theme-color/more-scene.vue"/>

#### updateThemeColor

dom来指定覆盖的范围，传入`document.documentElement`时即可覆盖整个页面的颜色。

<demo vue="presets/theme-color/dynamic-theme.vue"/>
