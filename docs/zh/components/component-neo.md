# Component Neo

vue内置组件component的扩展，提供了更丰富的切换方式，切换的方式更加灵活。

## 基础用法

基础用法与vue的[component](https://cn.vuejs.org/api/built-in-special-elements.html#component)一致，同时扩展了切换完成时触发的事件：toggleComponent。

<demo vue="components/component-neo/base.vue"/>

## useComponentNeo

核心扩展功能，通过调用函数的方式的进行切换组件，并且切换函数的调用与组件实例可以在不同的文件下，使调用更加灵活。

当页面内存在多个ComponentNeo时，可通过uniqueId参数进行区分，以防切换组件时同时修改多个ComponentNeo。

<demo vue="components/component-neo/use-hook.vue"/>

### toggleComponent

切换ComponentNeo的引入组件。

- **参数**
  1. 需要显示的组件，可以是VNode类型，也支持 ()=>import("组件路径") 的动态加载方式。
  2. 组件的属性，为对象类型，支持ref传入动态控制，事件可以通过“on事件名”方式传入，双向绑定可使用“vModel:属性”方式进行绑定。
  3. 组件的插槽，类型Slot，参考[h函数](https://cn.vuejs.org/api/render-function.html#h)中的插槽定义，不可与“传递插槽”方式同时使用。

- **返回值**

  Promise\<compoentRef\>，切换后的组件引用，用于调用所切换后组件的[暴露内容](https://cn.vuejs.org/api/sfc-script-setup.html#defineexpose)。

------

### getComponentRef

获取当前ComponentNeo的组件引用。

- **参数**

  无

- **返回值**

  compoentRef，当前组件的引用，可用于调用当前引用组件的[暴露内容](https://cn.vuejs.org/api/sfc-script-setup.html#defineexpose)。

## 使用KeepAlive
组件并不能对直接通过[KeepAlive](https://cn.vuejs.org/guide/built-ins/keep-alive.html#keepalive)包裹方式进行缓存，为了实现这个目的，我们可以将 KeepAlive 组件放置在插槽内，[Transition](https://vuejs.org/guide/built-ins/transition.html)的实现也是同理

:::warning
插槽内component除了传入is属性外，必须将compRef赋值给ref，否则将获取不到组件的引用实例。
:::

<demo
  vue="components/component-neo/keep-state.vue"
  :vueFiles="['components/component-neo/keep-state.vue', 'components/component-neo/count.vue', 'components/component-neo/text.vue']"
/>

## 传递插槽

使用component插槽给引入的组件传递插槽。实践中通常不会这么做，因为这样会导致所有组件**都使用相同的插槽，且使toggleComponent中的插槽参数失效**。

<demo
  vue="components/component-neo/custom-slot.vue"
  :vueFiles="['components/component-neo/custom-slot.vue', 'components/component-neo/count.vue', 'components/component-neo/text.vue']"
/>

## 属性

| 参数           | 说明                 | 类型    | 默认值 |
| -------------- | -------------------- | ------- | ------ |
| is           | 引用的组件           | string \| Component |  -  |
| uniqueId    | 唯一标识 | string  | ''     |

## 事件

| 事件名          | 说明           | 类型                                   |
| --------------- | -------------- | -------------------------------------- |
| toggleComponent | 组件切换后触发 | (compName?:string, compRef?:any)=>void |

## 插槽

| 插槽名  | 说明           | 作用域                                                       |
| ------- | -------------- | ------------------------------------------------------------ |
| default | 自定义组件内容 | Component:VNode (引用节点)<br />compRef:Function (引用)<br />attrs:Record<string,any> (属性)<br />compName?:string (组件名)<br /> |

## 暴露

| 属性名       | 说明                       | 类型 |
| ------------ | -------------------------- | ---- |
| componentRef | 当前ComponentNeo的组件引用 | -    |
