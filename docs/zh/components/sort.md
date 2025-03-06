# Sort

控制元素排列顺序，能够同时包含子级元素的排列顺序。

## 基础用法

<demo vue="components/sort/base.vue" />

## v-if与v-show差异

使用 v-if 会导致元素在 DOM 中被删除，而 v-show 则不会，因此使用 v-show 时会在保留位置基础上进行换位。
当存在有元素不参与排序时，便会存在一定的差异。

<demo vue="components/sort/if-show-diff.vue" />

## 属性

| 参数     | 说明                        | 类型               | 默认值   |
| -------- | --------------------------- | ------------------ | -------- |
| sortList | 排列顺序                    | (number\|string)[] | []       |
| keyName  | 自定义节点排序属性的key名称 | string             | sort-key |

## 源码

[源代码](https://github.com/nixwai/mortise-tenon/blob/main/packages/components/src/sort/src/sort.ts)
