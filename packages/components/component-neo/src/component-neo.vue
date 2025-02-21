<script setup lang="ts">
import type { VNode } from 'vue';
import type { ComponentNeoProps, InstanceComponent } from './component-neo';
import { Comment, computed, h, nextTick, onBeforeUnmount, ref, shallowRef, unref, useAttrs, watch } from 'vue';
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

const compAttrs = useAttrs();
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

const compInstance = computed(() => componentNeo.value || props.is);

const compVNode = computed(() => {
  if (!compInstance.value) {
    return h(Comment, 'componentNeo is empty');
  }
  else {
    return h(
      compInstance.value,
      { ...renderAttrs.value },
    );
  }
});

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

defineExpose({ componentRef });
</script>

<template>
  <!-- eslint-disable-next-line vue/attribute-hyphenation -->
  <slot :Component="compVNode" :attrs="renderAttrs">
    <component :is="compVNode" ref="componentRef" v-bind="renderAttrs" />
  </slot>
</template>
