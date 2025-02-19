<script setup lang="ts">
import type { ComponentNeoProps } from './component-neo';
import { camelCase, kebabCase, upperFirst } from 'lodash-es';
import { computed, nextTick, onBeforeUnmount, ref, toRef, unref, useAttrs, useSlots, watch } from 'vue';
import { useComponentNeo } from './hooks/use-component-neo';
import { useComponentRef } from './hooks/use-component-ref';

defineOptions({ name: 'MtComponentNeo', inheritAttrs: false });

const props = withDefaults(
  defineProps<ComponentNeoProps>(),
  { uniqueId: '', onToggle: () => { } },
);

const emit = defineEmits<{
  (e: 'toggleComponent', compName?: string, compRef?: any): void
}>();

const { setComponentRef, removeComponentRef } = useComponentRef();
const { componentNeoMap } = useComponentNeo();

const componentRef = ref();
setComponentRef(componentRef, props.uniqueId);
onBeforeUnmount(() => removeComponentRef(props.uniqueId));

const compSlots = useSlots();
const compAttrs = useAttrs();

const compInstance = computed(() => componentNeoMap.value[props.uniqueId]?.comp || props.is);
const injectAttrs = toRef(() => componentNeoMap.value[props.uniqueId]?.attrs);

// 监听组件切换，触发回调
watch(compInstance, async () => {
  await nextTick();
  emit('toggleComponent', compInstance.value.name, componentRef.value);
});

/** 组件公共属性 */
const commonAttrs = computed(() => {
  const newAttrs: Record<string, any> = {};
  // 添加外面组件外传入的公共事件
  compInstance.value.emits?.forEach((key: string) => {
    // 事件名称转换大驼峰
    const emitKey = `on${upperFirst(key.split(':').map(camelCase).join(':'))}`;
    if (compAttrs[emitKey]) {
      newAttrs[emitKey] = compAttrs[emitKey];
    }
  });
  // 添加外面组件外传入的属性
  for (const key in compInstance.value?.props) {
    const propKey = kebabCase(key);
    if (propKey in compAttrs) {
      newAttrs[propKey] = compAttrs[propKey];
    }
  }
  return newAttrs;
});

/** 结合注入的属性和公共属性 */
const renderAttrs = computed(() => {
  const newAttrs: Record<string, any> = {};
  // 仅传入有值的属性
  for (const key in injectAttrs.value) {
    if (typeof injectAttrs.value[key] !== 'undefined') {
      newAttrs[key] = unref(injectAttrs.value[key]); // 支持ref数据转入
    }
  }
  return Object.assign(newAttrs, commonAttrs.value);
});

defineExpose({ componentRef });
</script>

<template>
  <component :is="compInstance" ref="componentRef" v-bind="renderAttrs">
    <!-- 继承插槽 -->
    <template v-for="(_index, name) in compSlots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </component>
</template>
