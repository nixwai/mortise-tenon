<script setup lang="ts">
import type { ResizeProps } from './resize';
import { ref } from 'vue';

const props = withDefaults(defineProps<ResizeProps>(), { disabled: false });

const contentRef = ref<HTMLDivElement>();
function handlePointerdown(event: PointerEvent) {
  if (props.disabled) {
    return;
  }
  if (!contentRef.value) {
    return;
  }
  contentRef.value.setPointerCapture(event.pointerId);
  const startX = event.clientX;
  const clientWidth = contentRef.value?.clientWidth || 0;
  contentRef.value.onpointermove = (e) => {
    if (contentRef.value?.style) {
      const endX = e.clientX;
      const width = clientWidth - (startX - endX);
      contentRef.value.style.width = `${width}px`;
    }
  };
  contentRef.value.onpointerup = handlePointerup;
}

function handlePointerup(event: PointerEvent) {
  if (!contentRef.value) {
    return;
  }
  contentRef.value.onpointermove = null;
  contentRef.value.releasePointerCapture(event.pointerId);
}
</script>

<template>
  <div ref="contentRef" @pointerdown="handlePointerdown">
    <slot />
  </div>
</template>
