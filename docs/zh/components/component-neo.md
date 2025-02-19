# Component Neo

vue内置组件component的扩展

## 基础用法

基础用法与vue的component一致，同时扩展了切换完成时触发的事件：toggleComponent

<demo vue="components/component-neo/base.vue"/>

## 属性

| 参数           | 说明                 | 类型    | 默认值 |
| -------------- | -------------------- | ------- | ------ |
| is           | 渲染的组件             | string \| Component |  -  |
| uniqueId    | 唯一标识 | string  | ''     |
