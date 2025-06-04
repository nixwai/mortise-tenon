<script setup lang="ts">
import type { ResizeProps } from './resize';
import { ref } from 'vue';

const props = withDefaults(defineProps<ResizeProps>(), { disabled: false });

const contentRef = ref<HTMLDivElement>();
/** 开始拖拽容器 */
function beginResizeContent(event: PointerEvent) {
  if (props.disabled) { return; }
  if (!contentRef.value) { return; }
  contentRef.value.setPointerCapture(event.pointerId);
  const startX = event.clientX;
  const clientWidth = contentRef.value.clientWidth || 0;
  contentRef.value.onpointermove = async (e) => {
    const endX = e.clientX;
    const width = clientWidth - (startX - endX);
    contentRef.value!.style.width = `${width}px`;
  };
  contentRef.value.onpointerup = overResizeContent;
}

/** 结束拖拽容器 */
function overResizeContent(event: PointerEvent) {
  if (!contentRef.value) { return; }
  contentRef.value.onpointermove = null;
  contentRef.value.releasePointerCapture(event.pointerId);
}
</script>

<template>
  <div ref="contentRef" class="mt-resize">
    <div class="right-box" @pointerdown.stop="beginResizeContent" />
    <slot />
  </div>
</template>

<style scoped lang="scss">
.mt-resize {
  position: relative;
  overflow: visible;

  .right-box {
    position: absolute;
    top: 4px;
    right: -4px;
    width: 8px;
    height: calc(100% - 8px);
    cursor: e-resize;
  }
}
</style>
