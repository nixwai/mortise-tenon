# Component Neo

vue内置组件component的扩展，提供了更丰富的切换方式，切换的方式更加灵活。

## 基础用法

基础用法与vue的[component](https://cn.vuejs.org/api/built-in-special-elements.html#component)一致，同时扩展了切换完成时触发的事件：toggleComponent

<demo vue="components/component-neo/base.vue"/>

## useComponentNeo

核心扩展功能，通过调用函数的方式的进行切换组件，并且切换函数的调用与组件实例可以在不同的文件下，使调用更加灵活。

当页面内存在多个ComponentNeo时，需要添加唯一标识，通过uniqueId进行区分。

<demo vue="components/component-neo/use-hook.vue"/>

## KeepAlive
组件并不能对直接通过[KeepAlive](https://cn.vuejs.org/guide/built-ins/keep-alive.html#keepalive)包裹方式进行缓存，为了实现这个目的，我们可以将 KeepAlive 组件放置在插槽内，同理也可如此实现[Transition](https://vuejs.org/guide/built-ins/transition.html)

<demo vue="components/component-neo/keep-state.vue"/>

## 属性

| 参数           | 说明                 | 类型    | 默认值 |
| -------------- | -------------------- | ------- | ------ |
| is           | 渲染的组件             | string \| Component |  -  |
| uniqueId    | 唯一标识 | string  | ''     |
