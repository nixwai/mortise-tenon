<script setup lang="ts">
import type { ExpandBoxProps } from './expand-box';
import { useResizeObserver } from '@vueuse/core';
import { debounce } from 'lodash-es';
import { computed, onMounted, ref } from 'vue';

defineOptions({ name: 'MtExpandBox' });

const props = withDefaults(defineProps<ExpandBoxProps>(), {
  open: false,
  targetRange: 0,
  transitionTime: 200,
});

const transitionDuration = computed(() => `${props.transitionTime}ms`);

/** 内容的范围 */
const contentRange = ref(0);

/** 是否超出目标范围 */
const isOutRange = computed(() => contentRange.value > props.targetRange);

/** 展开或收起后内容样式 */
const contentStyle = computed(() => {
  const size = !isOutRange.value || props.open ? contentRange.value : props.targetRange;
  return { height: `${size}px` };
});

/** 内容实例 */
const contentRef = ref();

/** 获取内容实际范围 */
const getContentRange = debounce(() => {
  contentRange.value = contentRef.value?.offsetHeight;
}, props.transitionTime);

// 监听内容高度变化
useResizeObserver(contentRef, getContentRange);

// 初始化内容
onMounted(() => {
  getContentRange();
});
</script>

<template>
  <div
    class="mt-expand-box"
    :class="{ 'mt-expand-transition': !!transitionTime }"
    :style="contentStyle"
  >
    <div ref="contentRef">
      <slot :open="open" :is-out-range="isOutRange" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mt-expand-box {
  overflow: hidden;
}

.mt-expand-transition {
  transition: height v-bind(transitionDuration) ease-in-out;
}
</style>
