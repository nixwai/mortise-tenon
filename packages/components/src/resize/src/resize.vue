<script setup lang="ts">
import type { ResizeProps } from './resize';
import { ref } from 'vue';

const props = withDefaults(defineProps<ResizeProps>(), { disabled: false });

const contentRef = ref<HTMLDivElement>();

let translateX = 0;
let translateY = 0;

/** 左侧拖拽容器 */
function resizeLeftDirection(beginEvent: PointerEvent) {
  const startX = beginEvent.clientX;
  beginResizeContent(beginEvent, (moveEvent, { clientWidth }) => {
    const moveX = startX - moveEvent.clientX;
    const width = clientWidth + moveX;
    if (width > 0) {
      contentRef.value!.style.width = `${width}px`;
      contentRef.value!.style.transform = `translate(${translateX - moveX}px, ${translateY}px)`;
    }
    else {
      contentRef.value!.style.width = `${-width}px`;
    }
  });
}

/** 右侧拖拽容器 */
function resizeRightDirection(beginEvent: PointerEvent) {
  const startX = beginEvent.clientX;
  beginResizeContent(beginEvent, (moveEvent, { clientWidth }) => {
    const moveX = moveEvent.clientX - startX;
    const width = clientWidth + moveX;
    if (width > 0) {
      contentRef.value!.style.width = `${width}px`;
    }
    else {
      contentRef.value!.style.transform = `translate(${translateX + width}px, ${translateY}px)`;
      contentRef.value!.style.width = `${-width}px`;
    }
  });
}

/** 上方拖拽容器 */
function resizeTopDirection(beginEvent: PointerEvent) {
  const startY = beginEvent.clientY;
  beginResizeContent(beginEvent, (moveEvent, { clientHeight }) => {
    const moveY = startY - moveEvent.clientY;
    const height = clientHeight + moveY;
    if (height > 0) {
      contentRef.value!.style.height = `${height}px`;
      contentRef.value!.style.transform = `translate(${translateX}px, ${translateY - moveY}px)`;
    }
    else {
      contentRef.value!.style.height = `${-height}px`;
    }
  });
}

/** 下方拖拽容器 */
function resizeBottomDirection(beginEvent: PointerEvent) {
  const startY = beginEvent.clientY;
  beginResizeContent(beginEvent, (moveEvent, { clientHeight }) => {
    const moveY = moveEvent.clientY - startY;
    const height = clientHeight + moveY;
    if (height > 0) {
      contentRef.value!.style.height = `${height}px`;
    }
    else {
      contentRef.value!.style.height = `${-height}px`;
      contentRef.value!.style.transform = `translate(${translateX}px, ${translateY + height}px)`;
    }
  });
}

/** 开始拖拽容器 */
function beginResizeContent(
  beginEvent: PointerEvent,
  resizingContent: (moveEvent: PointerEvent, size: { clientWidth: number, clientHeight: number }) => void,
) {
  if (props.disabled) { return; }
  if (!contentRef.value) { return; }
  const { clientWidth, clientHeight } = contentRef.value;
  contentRef.value!.setPointerCapture(beginEvent.pointerId);
  contentRef.value!.onpointermove = moveEvent => resizingContent(moveEvent, { clientWidth, clientHeight });
  contentRef.value!.onpointerup = overResizeContent;
}

const translateValueReg = /translate\((.+)px,(.+)px\)/;
/** 结束拖拽容器 */
function overResizeContent(overEvent: PointerEvent) {
  if (!contentRef.value) { return; }
  translateX = Number(contentRef.value!.style.transform?.match(translateValueReg)?.[1] || 0);
  translateY = Number(contentRef.value!.style.transform?.match(translateValueReg)?.[2] || 0);
  contentRef.value.onpointermove = null;
  contentRef.value.releasePointerCapture(overEvent.pointerId);
}
</script>

<template>
  <div ref="contentRef" class="mt-resize">
    <div class="left-box" @pointerdown.stop.prevent="resizeLeftDirection" />
    <div class="right-box" @pointerdown.stop.prevent="resizeRightDirection" />
    <div class="top-box" @pointerdown.stop.prevent="resizeTopDirection" />
    <div class="bottom-box" @pointerdown.stop.prevent="resizeBottomDirection" />
    <slot />
  </div>
</template>

<style scoped lang="scss">
.mt-resize {
  position: relative;
  overflow: visible;

  .left-box {
    position: absolute;
    top: 4px;
    left: -4px;
    width: 8px;
    height: calc(100% - 8px);
    cursor: w-resize;
  }

  .right-box {
    position: absolute;
    top: 4px;
    right: -4px;
    width: 8px;
    height: calc(100% - 8px);
    cursor: e-resize;
  }

  .top-box {
    position: absolute;
    top: -4px;
    left: 4px;
    width: calc(100% - 8px);
    height: 8px;
    cursor: n-resize;
  }

  .bottom-box {
    position: absolute;
    bottom: -4px;
    left: 4px;
    width: calc(100% - 8px);
    height: 8px;
    cursor: s-resize;
  }
}
</style>
