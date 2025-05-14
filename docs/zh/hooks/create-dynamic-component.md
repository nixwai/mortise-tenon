# createDynamicComponent

创建动态组件，作用与 Vue 的 [component](https://cn.vuejs.org/api/built-in-special-elements.html#component) 类似，但希望通过更好的方法进行切换组件，可以单独传入切换后组件、参数、插槽。

## DynamicComponent

动态组件，在未通过`renderComponent`进行渲染时的组件默认显示为`is`属性指定的组件。

#### 属性: is

默认渲染的组件，当`renderComponent`未调用或渲染的内容为空时，将显示该属性传入的组件。

#### 事件: rendered

调用`renderComponent`方法渲染组件后触发。返回的参数类型为：
```ts
export interface RenderedOptions {
  /** 组件名称 */
  name?: string
  /** 属性 */
  attributes?: Record<string, unknown>
  /** 实例引用 */
  domRef?: any
};
```

<demo vue="hooks/create-dynamic-component/base.vue"/>

## renderComponent

动态更改`DynamicComponent`渲染的内容。

- **参数**
  1. **component** (可选): 需要显示的组件，可支持 VNode 类型或`import`导入方式（如 `()=>import("组件路径")`）。
  2. **props** (可选): 组件的属性对象，可支持事件绑定和双向绑定（如 `onEventName` 和 `vModel:property`）。
  ```ts
  const inputValues = reactive({
    input1: '',
    input2: '',
    input3: '',
  });

  // renderComponent上的vModel仅能绑定ref类型，对于reactive可使用toRef或toRefs进行绑定
  const valueAsRefs = toRefs(inputValues);

  renderComponent(Text, { vModel: valueAsRefs.input1 });
  ```
  3. **slots** (可选): 插槽定义，参考 [h 函数](https://cn.vuejs.org/api/render-function.html#h) 中的插槽定义，不可与传递插槽方式同时使用。

- **返回值**

  返回当前渲染的组件实例，可用于调用组件的 [暴露内容](https://cn.vuejs.org/api/sfc-script-setup.html#defineexpose)。

:::tip 提示
当切换的组件是同一个组件时，添加 `key` 属性进行区分，确保每个组件实例独立渲染。
:::

<demo
  vue="hooks/create-dynamic-component/use-hook.vue"
  :vueFiles="['hooks/create-dynamic-component/use-hook.vue', 'hooks/create-dynamic-component/text.vue']"
/>

## getDomRef

获取当前渲染的组件实例。

## 使用 KeepAlive

组件并不能对直接通过[KeepAlive](https://cn.vuejs.org/guide/built-ins/keep-alive.html#keepalive)包裹方式进行缓存，为了实现这个目的，我们可以将 KeepAlive 组件放置在插槽内，[Transition](https://vuejs.org/guide/built-ins/transition.html)的实现也是同理。

<demo
  vue="hooks/create-dynamic-component/keep-state.vue"
  :vueFiles="['hooks/create-dynamic-component/keep-state.vue', 'hooks/create-dynamic-component/count.vue', 'hooks/create-dynamic-component/text.vue']"
/>

## 传递插槽

可以通过 `component` 的插槽传递内容给引入的组件，但这种方式会导致所有组件使用相同的插槽，并使 `renderComponent` 中的插槽参数失效，需要谨慎使用。

<demo
  vue="hooks/create-dynamic-component/custom-slot.vue"
  :vueFiles="['hooks/create-dynamic-component/custom-slot.vue', 'hooks/create-dynamic-component/count.vue', 'hooks/create-dynamic-component/text.vue']"
/>

## 全局组件

可以通过`createGlobalState`方法创建全局组件，调用时便可以让组件在不同文件下修改更改。

<demo
  vue="hooks/create-dynamic-component/global-parent.vue"
  :vueFiles="['hooks/create-dynamic-component/global-parent.vue', 'hooks/create-dynamic-component/global-child.vue', 'hooks/create-dynamic-component/use-global.ts']"
/>

## 源码

[源代码](https://github.com/nixwai/mortise-tenon/blob/main/packages/hooks/src/createDynamicComponent/index.ts)
