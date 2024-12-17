# 主题颜色

Mortise Tenon提供了UI的主题颜色（默认为蓝色#3451b2），能够更好的统一项目中的主题样式，并提供了'primary'作为颜色属性使用，后缀可添加[50，100，200，300，400，500，600，700，800，900，950]内的数字控制颜色明亮。

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

## 配置主题

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

<demo vue="presets/theme-color/more-scene.vue"/>

## 全局颜色变量

预设中提供了默认的主题颜色primary，同时也为主题颜色添加配置了对应的全局颜色变量，变量值为hsl值，可在style中使用。

```txt
/** 颜色是根据primary生成的hsl值 */
:root {
  --mt-primary-DEFAULT: 226 55 45;
  --mt-primary-50: 215 75 97;
  --mt-primary-100: 216 68 93;
  --mt-primary-200: 215 69 87;
  --mt-primary-300: 213 69 78;
  --mt-primary-400: 215 67 68;
  --mt-primary-500: 219 66 60;
  --mt-primary-600: 224 60 53;
  --mt-primary-700: 226 55 45;
  --mt-primary-800: 227 51 40;
  --mt-primary-900: 226 46 33;
  --mt-primary-950: 227 40 21;
}

/** 使用颜色变量 */
.example {
  background-color: hsl(var(--mt-primary-700));
}
```

您可以在uno.config.ts中配置更多全局颜色变量，mortise-tenon-preset提供了`preflightColors`方法，可用于生成全局颜色变量规则。

:::warning
theme与preflights的颜色互不影响，`preflightColors`生成全局颜色变量，不会影响theme中`themeColors`设置的颜色。
:::

```ts
import { preflightColors, presetMortiseTenon, themeColors } from 'mortise-tenon-preset';
import { defineConfig, presetUno } from 'unocss';

export default defineConfig({
  presets: [presetUno(), presetMortiseTenon()],
  theme: { colors: themeColors({ primary: '#3451b2', warning: '#ffb300', danger: '#e53935' }) },
  preflights: [preflightColors({ warning: '#ffb300' })],
});
```

## 动态主题颜色

通过上面的功能可知，该预设会在CSS中定义颜色变量，因此只要通过修改这个颜色变量，就可以更新对应的颜色。在mortise-tenon-preset中提供了`updateColorValue`方法，可以更加方便去覆盖theme、preflights中配置的颜色。

dom来指定覆盖的范围，传入`document.documentElement`时即可覆盖整个页面的颜色。

type指定修改颜色的类型是主题颜色还是全局颜色变量。

<demo vue="presets/theme-color/dynamic-theme.vue"/>
