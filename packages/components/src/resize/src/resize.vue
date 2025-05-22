<script setup lang="ts">
import type { ResizeProps } from './resize';
import { ref } from 'vue';

const props = withDefaults(defineProps<ResizeProps>(), { disabled: false });

const contentRef = ref<HTMLDivElement>();

let containWidth = '0';

function handlePointerdown(event: PointerEvent) {
  if (!contentRef.value) {
    return;
  }
  contentRef.value.setPointerCapture(event.pointerId); // 设置鼠标捕获(之后的事件捕获会作用在当前元素上)
  if (!props.disabled) {
    const startX = event.clientX;
    const clientWidth = contentRef.value?.clientWidth || 0; // 容器的宽度
    contentRef.value.onpointermove = (e) => {
      if (contentRef.value?.style) {
        const endX = e.clientX;
        const width = clientWidth - (startX - endX);
        containWidth = `${width}px`;
        contentRef.value.style.width = containWidth;
      }
    };
  }
}

function handlePointerup(event: PointerEvent) {
  if (!contentRef.value) {
    return;
  }
  contentRef.value.onpointermove = null;
  contentRef.value.releasePointerCapture(event.pointerId); // 释放鼠标捕获
}
</script>

<template>
  <div ref="contentRef" @pointerup="handlePointerup" @pointerdown="handlePointerdown">
    <slot />
  </div>
</template>
