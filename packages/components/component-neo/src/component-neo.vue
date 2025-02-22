<script setup lang="ts">
import type { ComponentNeoProps } from './component-neo';
import { Comment, computed, h, nextTick, unref, useAttrs, watch } from 'vue';
import { useComponentState } from './hooks/use-component-state';

defineOptions({ name: 'MtComponentNeo', inheritAttrs: false });

const props = withDefaults(
  defineProps<ComponentNeoProps>(),
  { uniqueId: '', onToggle: () => { } },
);

const emit = defineEmits<{
  (e: 'toggleComponent', name?: string, ref?: any): void
}>();

const { initComponent } = useComponentState();
const { componentRef, componentNeo, componentAttrs, componentSlots } = initComponent(props.uniqueId);
const compRef = (el: Element) => componentRef.value = el;

const commonAttrs = useAttrs();
/** 结合注入的属性和公共属性 */
const compAttrs = computed(() => {
  const newAttrs: Record<string, unknown> = {};
  // 仅传入有值的属性
  for (const key in componentAttrs.value) {
    if (typeof componentAttrs.value[key] !== 'undefined') {
      newAttrs[key] = unref(componentAttrs.value[key]); // 支持ref数据转入
    }
  }
  return Object.assign(newAttrs, commonAttrs);
});

const compInstance = computed(() => componentNeo.value || props.is);

const compVNode = computed(() => {
  return !compInstance.value ? h(Comment, 'componentNeo is empty') : h(compInstance.value, compAttrs.value, componentSlots.value);
});

const compName = computed(() => {
  return typeof compInstance.value === 'object' && 'name' in compInstance.value ? compInstance.value.name : undefined;
});

// 监听组件切换，触发回调
watch(compInstance, async () => {
  await nextTick();
  emit('toggleComponent', compName.value, componentRef.value);
});

defineExpose({ componentRef });
</script>

<template>
  <!-- eslint-disable-next-line vue/attribute-hyphenation -->
  <slot :Component="compVNode" :compRef="compRef" :attrs="compAttrs" :compName="compName">
    <component :is="compVNode" :ref="compRef" />
  </slot>
</template>
