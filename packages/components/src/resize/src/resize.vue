<script setup lang="ts">
import type { ResizeProps } from './resize';
import { ref } from 'vue';

type ResizingContent = (moveEvent: PointerEvent, size: { clientWidth: number, clientHeight: number }) => void;

const props = withDefaults(defineProps<ResizeProps>(), { disabled: false });

const contentRef = ref<HTMLDivElement>();

let contentTranslateX = 0;
let contentTranslateY = 0;

/** 选择调整左侧 */
function handleResizeLeft(beginEvent: PointerEvent) {
  const { clientX: startX } = beginEvent;
  beginResizeContent(beginEvent, ({ clientX: endX }, { clientWidth }) => {
    const { width, translateX } = resizingLeft(startX, endX, clientWidth);
    contentRef.value!.style.width = `${width}px`;
    contentRef.value!.style.transform = `translate(${translateX}px, ${contentTranslateY}px)`;
  });
}

/** 选择调整右侧 */
function handleResizeRight(beginEvent: PointerEvent) {
  const { clientX: startX } = beginEvent;
  beginResizeContent(beginEvent, ({ clientX: endX }, { clientWidth }) => {
    const { width } = resizingRight(startX, endX, clientWidth);
    contentRef.value!.style.width = `${width}px`;
  });
}

/** 选择调整上方 */
function handleResizeTop(beginEvent: PointerEvent) {
  const { clientY: startY } = beginEvent;
  beginResizeContent(beginEvent, ({ clientY: endY }, { clientHeight }) => {
    const { height, translateY } = resizingTop(startY, endY, clientHeight);
    contentRef.value!.style.height = `${height}px`;
    contentRef.value!.style.transform = `translate(${contentTranslateX}px, ${translateY}px)`;
  });
}

/** 选择调整下方 */
function handleResizeBottom(beginEvent: PointerEvent) {
  const { clientY: startY } = beginEvent;
  beginResizeContent(beginEvent, ({ clientY: endY }, { clientHeight }) => {
    const { height } = resizingBottom(startY, endY, clientHeight);
    contentRef.value!.style.height = `${height}px`;
  });
}

/** 选择调整左上方 */
function handleResizeLeftTop(beginEvent: PointerEvent) {
  const { clientX: startX, clientY: startY } = beginEvent;
  beginResizeContent(beginEvent, ({ clientX: endX, clientY: endY }, { clientWidth, clientHeight }) => {
    const { width, translateX } = resizingLeft(startX, endX, clientWidth);
    const { height, translateY } = resizingTop(startY, endY, clientHeight);
    contentRef.value!.style.width = `${width}px`;
    contentRef.value!.style.height = `${height}px`;
    contentRef.value!.style.transform = `translate(${translateX}px, ${translateY}px)`;
  });
}

/** 选择调整右上方 */
function handleResizeRightTop(beginEvent: PointerEvent) {
  const { clientX: startX, clientY: startY } = beginEvent;
  beginResizeContent(beginEvent, ({ clientX: endX, clientY: endY }, { clientWidth, clientHeight }) => {
    const { width } = resizingRight(startX, endX, clientWidth);
    const { height, translateY } = resizingTop(startY, endY, clientHeight);
    contentRef.value!.style.width = `${width}px`;
    contentRef.value!.style.height = `${height}px`;
    contentRef.value!.style.transform = `translate(${contentTranslateX}px, ${translateY}px)`;
  });
}

/** 选择调整左下方 */
function handleResizeLeftBottom(beginEvent: PointerEvent) {
  const { clientX: startX, clientY: startY } = beginEvent;
  beginResizeContent(beginEvent, ({ clientX: endX, clientY: endY }, { clientWidth, clientHeight }) => {
    const { width, translateX } = resizingLeft(startX, endX, clientWidth);
    const { height } = resizingBottom(startY, endY, clientHeight);
    contentRef.value!.style.width = `${width}px`;
    contentRef.value!.style.height = `${height}px`;
    contentRef.value!.style.transform = `translate(${translateX}px, ${contentTranslateY}px)`;
  });
}

/** 选择调整右下方 */
function handleResizeRightBottom(beginEvent: PointerEvent) {
  const { clientX: startX, clientY: startY } = beginEvent;
  beginResizeContent(beginEvent, ({ clientX: endX, clientY: endY }, { clientWidth, clientHeight }) => {
    const { width } = resizingRight(startX, endX, clientWidth);
    const { height } = resizingBottom(startY, endY, clientHeight);
    contentRef.value!.style.width = `${width}px`;
    contentRef.value!.style.height = `${height}px`;
  });
}

/** 调整容器左侧 */
function resizingLeft(startX: number, endX: number, clientWidth: number) {
  const moveX = startX - endX;
  const width = clientWidth + moveX;
  return width > 0 ? { width, translateX: contentTranslateX - moveX } : { width: 0, translateX: contentTranslateX + clientWidth };
}

/** 调整右侧 */
function resizingRight(startX: number, endX: number, clientWidth: number) {
  const moveX = startX - endX;
  const width = clientWidth - moveX;
  return width > 0 ? { width } : { width: 0 };
}

/** 调整上方 */
function resizingTop(startY: number, endY: number, clientHeight: number) {
  const moveY = startY - endY;
  const height = clientHeight + moveY;
  return height > 0 ? { height, translateY: contentTranslateY - moveY } : { height: 0, translateY: contentTranslateY + clientHeight };
}

/** 调整下方 */
function resizingBottom(startY: number, endY: number, clientHeight: number) {
  const moveY = startY - endY;
  const height = clientHeight - moveY;
  return height > 0 ? { height } : { height: 0 };
}

/** 开始拖拽容器 */
function beginResizeContent(beginEvent: PointerEvent, resizingContent: ResizingContent) {
  if (props.disabled) { return; }
  if (!contentRef.value) { return; }
  const { clientWidth, clientHeight } = contentRef.value;
  contentRef.value!.setPointerCapture(beginEvent.pointerId);
  contentRef.value!.onpointermove = (moveEvent) => {
    resizingContent(moveEvent, { clientWidth, clientHeight });
  };
  contentRef.value!.onpointerup = overResizeContent;
}

const translateValueReg = /translate\((.+)px,(.+)px\)/;
/** 结束拖拽容器 */
function overResizeContent(overEvent: PointerEvent) {
  if (!contentRef.value) { return; }
  contentTranslateX = Number(contentRef.value!.style.transform?.match(translateValueReg)?.[1] || 0);
  contentTranslateY = Number(contentRef.value!.style.transform?.match(translateValueReg)?.[2] || 0);
  contentRef.value.onpointermove = null;
  contentRef.value.releasePointerCapture(overEvent.pointerId);
}
</script>

<template>
  <div ref="contentRef" class="mt-resize">
    <div class="left-box" @pointerdown.stop.prevent="handleResizeLeft" />
    <div class="right-box" @pointerdown.stop.prevent="handleResizeRight" />
    <div class="top-box" @pointerdown.stop.prevent="handleResizeTop" />
    <div class="bottom-box" @pointerdown.stop.prevent="handleResizeBottom" />
    <div class="left-top-box" @pointerdown.stop.prevent="handleResizeLeftTop" />
    <div class="right-top-box" @pointerdown.stop.prevent="handleResizeRightTop" />
    <div class="left-bottom-box" @pointerdown.stop.prevent="handleResizeLeftBottom" />
    <div class="right-bottom-box" @pointerdown.stop.prevent="handleResizeRightBottom" />
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

  .left-top-box {
    position: absolute;
    top: -4px;
    left: -4px;
    width: 8px;
    height: 8px;
    cursor: nw-resize;
  }

  .right-top-box {
    position: absolute;
    top: -4px;
    right: -4px;
    width: 8px;
    height: 8px;
    cursor: ne-resize;
  }

  .left-bottom-box {
    position: absolute;
    bottom: -4px;
    left: -4px;
    width: 8px;
    height: 8px;
    cursor: sw-resize;
  }

  .right-bottom-box {
    position: absolute;
    right: -4px;
    bottom: -4px;
    width: 8px;
    height: 8px;
    cursor: se-resize;
  }
}
</style>
