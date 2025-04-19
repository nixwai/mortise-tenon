<script setup lang="ts">
import type { ExpandProps } from './expand.ts';
import { useDebounceFn, useResizeObserver } from '@vueuse/core';
import { computed, ref } from 'vue';

defineOptions({ name: 'MtExpand' });

const props = withDefaults(defineProps<ExpandProps>(), {
  open: false,
  targetRange: 0,
  transitionTime: 200,
});

const transitionDuration = computed(() => `${props.transitionTime}ms`);

/** 容器实例 */
const contentRef = ref<HTMLDivElement>();
/** 容器的范围 */
const contentRange = ref(0);
// 监听容器变化
useResizeObserver(contentRef, useDebounceFn(() => {
  contentRange.value = contentRef.value?.scrollHeight || 0;
}, 200));

/** 是否超出目标范围 */
const isOutRange = computed(() => contentRange.value > props.targetRange);

/** 展开或收起后容器样式 */
const contentStyle = computed(() => {
  if (!contentRange.value) {
    return {};
  }
  const size = !isOutRange.value || props.open ? contentRange.value : props.targetRange;
  return { height: `${size}px` };
});
</script>

<template>
  <div
    ref="contentRef"
    class="mt-expand"
    :class="{ 'mt-expand-transition': !!transitionTime }"
    :style="contentStyle"
  >
    <slot :open="open" :is-out-range="isOutRange" />
  </div>
</template>

<style lang="scss" scoped>
.mt-expand {
  overflow: hidden;
}

.mt-expand-transition {
  transition: height v-bind(transitionDuration) ease-in-out;
}
</style>
