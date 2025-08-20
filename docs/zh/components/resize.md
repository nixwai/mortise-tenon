# Resize

调整元素的大小

## 基础用法

<demo vue="components/resize/base.vue"/>

## 更多功能

<demo vue="components/resize/direction.vue"/>

## 属性

| 参数            | 说明                                                         | 类型                                       | 默认值    |
| --------------- | ------------------------------------------------------------ | ------------------------------------------ | --------- |
| directions      | 可调整的方向                                                 | ('left' \| 'right' \| 'top' \| 'bottom')[] | ['right'] |
| disabled        | 是否禁用                                                     | boolean                                    | false     |
| offset          | 使用偏移，适用于元素脱离文档流时使用                         | 'transform' \| 'position' \| 'translate'   | --        |
| lockAspectRatio | 锁定纵横比，directions至少需要设置两个方向横向与纵向方向的值 | boolean                                    | false     |
| grid            | 网格对齐，固定每次调整的最小距离，单位px，使用小数注意精度问题，建议使用0.5的倍数 | number[]                                   | [0.5,0.5] |

## 源码

[源代码](https://github.com/nixwai/mortise-tenon/blob/main/packages/components/src/resize/src/resize.vue)
