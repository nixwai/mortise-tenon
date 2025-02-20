<script setup lang="ts">
import type { VNode } from 'vue';
import type { ComponentNeoProps, InstanceComponent } from './component-neo';
import { computed, nextTick, onBeforeUnmount, ref, shallowRef, unref, useAttrs, useSlots, watch } from 'vue';
import { useComponentState } from './hooks/use-component-state';

defineOptions({ name: 'MtComponentNeo', inheritAttrs: false });

const props = withDefaults(
  defineProps<ComponentNeoProps>(),
  { uniqueId: '', onToggle: () => { } },
);

const emit = defineEmits<{
  (e: 'toggleComponent', compName?: string, compRef?: any): void
}>();

const { getComponent, initComponent, removeComponent } = useComponentState();

const componentRef = ref();
const componentNeo = shallowRef<InstanceComponent | VNode>();
const componentAttrs = ref<Record<string, any>>({});

if (getComponent(props.uniqueId)) {
  console.error('同一页面内不可同时存在相同uniqueId的组件！');
}
else {
  initComponent({ Instance: componentRef, comp: componentNeo, attrs: componentAttrs }, props.uniqueId);
  onBeforeUnmount(() => removeComponent(props.uniqueId));
}

const compSlots = useSlots();
const compAttrs = useAttrs();

const compInstance = computed(() => componentNeo.value || props.is);

// 监听组件切换，触发回调
watch(compInstance, async () => {
  await nextTick();
  if (typeof compInstance.value === 'object' && 'name' in compInstance.value) {
    emit('toggleComponent', compInstance.value.name, componentRef.value);
  }
  else {
    emit('toggleComponent', undefined, componentRef.value);
  }
});

/** 结合注入的属性和公共属性 */
const renderAttrs = computed(() => {
  const newAttrs: Record<string, any> = {};
  // 仅传入有值的属性
  for (const key in componentAttrs.value) {
    if (typeof componentAttrs.value[key] !== 'undefined') {
      newAttrs[key] = unref(componentAttrs.value[key]); // 支持ref数据转入
    }
  }
  return Object.assign(newAttrs, compAttrs);
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
