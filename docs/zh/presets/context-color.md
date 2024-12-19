# 上下文颜色

预设中定义了一个特殊的颜色值 `context`，您可以使用 `context-${color}:${lightness}` 指定元素的context的颜色，那么当前元素下便可使用 `context` 作为对应颜色使用。

### 基本用法

<demo vue="presets/context-color/base.vue"/>

## 颜色的明亮度

`context` 同样可以使用50、100、200 ~ 900、950内的值指定颜色的明亮度。

默认为`500`，`c-context`等同于`c-context-500`。

如果你使用了多种明亮度时，那么在指定context的颜色时，需要在冒号后同时添加这些明亮度值，否则会把50~950之间的明亮度值都生成。

<demo vue="presets/context-color/lightness.vue"/>

## 反转明亮度

预设中提供了 `reverse-light` ，可以用来反转context的颜色的明亮，这个在一些暗色主题下比较有用。

<demo vue="presets/context-color/reverse.vue"/>
