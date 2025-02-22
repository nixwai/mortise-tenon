# ComponentNeo

`ComponentNeo` 是 Vue 内置 `component` 组件的扩展版本，提供了更丰富的切换方式，使组件切换更加灵活，适用于更多场景。

## 基础用法

`ComponentNeo` 的基础用法与 Vue 的 [component](https://cn.vuejs.org/api/built-in-special-elements.html#component) 一致。它额外提供了一个 `toggleComponent` 事件，在组件切换完成后触发。

:::tip 提示
当切换的组件是同一个组件时，建议添加 `key` 属性进行区分，确保每个组件实例独立渲染。
:::

<demo vue="components/component-neo/base.vue"/>

## 核心功能：useComponentNeo

`useComponentNeo` 是 `ComponentNeo` 的核心扩展功能，允许通过函数调用来切换组件，并且可以在不同文件中调用该函数，增强了组件切换的灵活性。

### 参数说明

- **uniqueId** (可选): 当页面内存在多个 `ComponentNeo` 实例时，可以通过 `uniqueId` 参数来区分不同的实例，避免同时修改多个组件。

### 方法

#### toggleComponent

用于切换 `ComponentNeo` 的引用组件。

- **参数**
  1. **component** (可选): 需要显示的组件，可支持 VNode 类型或动态加载方式（如 `()=>import("组件路径")`）。
  2. **attrs** (可选): 组件的属性对象，可支持事件绑定和双向绑定（如 `onEventName` 和 `vModel:property`）。
  3. **slots** (可选): 插槽定义，参考 [h 函数](https://cn.vuejs.org/api/render-function.html#h) 中的插槽定义，不可与传递插槽方式同时使用。

- **返回值**

  返回一个 `Promise<componentRef>`，即切换后组件的引用，可用于调用组件的 [暴露内容](https://cn.vuejs.org/api/sfc-script-setup.html#defineexpose)。

#### getComponentRef

获取当前 `ComponentNeo` 的组件引用。

- **返回值**

  返回当前组件的引用 `componentRef`，可用于调用组件的 [暴露内容](https://cn.vuejs.org/api/sfc-script-setup.html#defineexpose)。

<demo vue="components/component-neo/use-hook.vue"/>

## 使用 KeepAlive

组件并不能对直接通过[KeepAlive](https://cn.vuejs.org/guide/built-ins/keep-alive.html#keepalive)包裹方式进行缓存，为了实现这个目的，我们可以将 KeepAlive 组件放置在插槽内，[Transition](https://vuejs.org/guide/built-ins/transition.html)的实现也是同理

:::warning 注意
插槽内 `component` 必须将 `compRef` 赋值给 `ref`，否则无法获取组件引用实例`componentRef`。
:::

<demo
  vue="components/component-neo/keep-state.vue"
  :vueFiles="['components/component-neo/keep-state.vue', 'components/component-neo/count.vue', 'components/component-neo/text.vue']"
/>

## 传递插槽

可以通过 `component` 的插槽传递内容给引入的组件，但这种方式会导致所有组件使用相同的插槽，并使 `toggleComponent` 中的插槽参数失效，需要谨慎使用。

<demo
  vue="components/component-neo/custom-slot.vue"
  :vueFiles="['components/component-neo/custom-slot.vue', 'components/component-neo/count.vue', 'components/component-neo/text.vue']"
/>

## 属性

| 参数      | 说明           | 类型                    | 默认值 |
| --------- | -------------- | ----------------------- | ------ |
| is        | 引用的组件     | string \| Component     | -      |
| uniqueId  | 唯一标识       | string                  | ''     |

## 事件

| 事件名          | 说明           | 类型                                   |
| --------------- | -------------- | -------------------------------------- |
| toggleComponent | 组件切换后触发 | (compName?:string, compRef?:any)=>void |

## 插槽

| 插槽名  | 说明           | 作用域                                                       |
| ------- | -------------- | ------------------------------------------------------------ |
| default | 自定义组件内容 | Component:VNode (引用节点)<br />compRef:Function (引用)<br />attrs:Record<string,any> (属性)<br />compName?:string (组件名) |

## 暴露

| 属性名       | 说明                       | 类型         |
| ------------ | -------------------------- | ------------ |
| componentRef | 当前 `ComponentNeo` 的组件引用 | any          |
