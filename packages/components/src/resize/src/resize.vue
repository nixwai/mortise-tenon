<script setup lang="ts">
import type { ResizeProps } from './resize';
import { computed, ref } from 'vue';

defineOptions({ name: 'MtResize' });

const props = withDefaults(
  defineProps<ResizeProps>(),
  {
    disabled: false,
    positioned: false,
    directions: () => ['right'],
  },
);

/** 元素实例 */
const contentRef = ref<HTMLDivElement>();

const isCustomPosition = typeof props.positioned === 'object';
/** X轴位移 */
let contentTranslateX = isCustomPosition ? props.positioned.x || 0 : 0;
/** Y轴位移 */
let contentTranslateY = isCustomPosition ? props.positioned.y || 0 : 0;

/** 向前调整（往右或者往下） */
function resizingForward(start: number, end: number, clientValue: number, offsetValue: number) {
  const move = start - end;
  const value = clientValue + move;
  return value > 0 ? { value, offset: offsetValue - move } : { value, offset: offsetValue + clientValue };
}

/** 向后调整（往左或者往上） */
function resizingBackward(start: number, end: number, clientValue: number, offsetValue: number) {
  const move = start - end;
  const value = clientValue - move;
  return value > 0 ? { value, offset: offsetValue } : { value, offset: offsetValue + value };
}

/** 设置宽度 */
const setStyleWidth = props.positioned
  ? (width: number) => contentRef.value!.style.width = `${Math.abs(width)}px`
  : (width: number) => contentRef.value!.style.width = `${width > 0 ? width : 0}px`;

/** 设置高度 */
const setStyleHeight = props.positioned
  ? (height: number) => contentRef.value!.style.height = `${Math.abs(height)}px`
  : (height: number) => contentRef.value!.style.height = `${height > 0 ? height : 0}px`;

/** 设置位移 */
const setStyletTransform = props.positioned
  ? (translateX: number, translateY: number) => contentRef.value!.style.transform = `translate(${translateX}px, ${translateY}px)`
  : () => {};

/** 开始拖拽容器 */
function beginResizeContent(
  beginEvent: PointerEvent,
  resizingContent: (moveEvent: PointerEvent, clientSize: { clientWidth: number, clientHeight: number }) => void,
) {
  if (props.disabled) { return; }
  if (!contentRef.value) { return; }
  const { clientWidth, clientHeight } = contentRef.value;
  contentRef.value.setPointerCapture(beginEvent.pointerId);
  contentRef.value.onpointerup = overResizeContent;
  contentRef.value.onpointermove = moveEvent => resizingContent(moveEvent, { clientWidth, clientHeight });
}

const translateValueReg = /translate\((.+)px,(.+)px\)/;
/** 结束拖拽容器 */
function overResizeContent(overEvent: PointerEvent) {
  if (!contentRef.value) { return; }
  contentTranslateX = Number(contentRef.value.style.transform?.match(translateValueReg)?.[1] || 0);
  contentTranslateY = Number(contentRef.value.style.transform?.match(translateValueReg)?.[2] || 0);
  contentRef.value.onpointermove = null;
  contentRef.value.releasePointerCapture(overEvent.pointerId);
}

/** 选择调整左侧 */
function handleResizeLeft(beginEvent: PointerEvent) {
  const { clientX: startX } = beginEvent;
  beginResizeContent(beginEvent, ({ clientX: endX }, { clientWidth }) => {
    const { value, offset } = resizingForward(startX, endX, clientWidth, contentTranslateX);
    setStyleWidth(value);
    setStyletTransform(offset, contentTranslateY);
  });
}

/** 选择调整右侧 */
function handleResizeRight(beginEvent: PointerEvent) {
  const { clientX: startX } = beginEvent;
  beginResizeContent(beginEvent, ({ clientX: endX }, { clientWidth }) => {
    const { value, offset } = resizingBackward(startX, endX, clientWidth, contentTranslateX);
    setStyleWidth(value);
    setStyletTransform(offset, contentTranslateY);
  });
}

/** 选择调整上方 */
function handleResizeTop(beginEvent: PointerEvent) {
  const { clientY: startY } = beginEvent;
  beginResizeContent(beginEvent, ({ clientY: endY }, { clientHeight }) => {
    const { value, offset } = resizingForward(startY, endY, clientHeight, contentTranslateY);
    setStyleHeight(value);
    setStyletTransform(contentTranslateX, offset);
  });
}

/** 选择调整下方 */
function handleResizeBottom(beginEvent: PointerEvent) {
  const { clientY: startY } = beginEvent;
  beginResizeContent(beginEvent, ({ clientY: endY }, { clientHeight }) => {
    const { value, offset } = resizingBackward(startY, endY, clientHeight, contentTranslateY);
    setStyleHeight(value);
    setStyletTransform(contentTranslateX, offset);
  });
}

/** 选择调整左上方 */
function handleResizeLeftTop(beginEvent: PointerEvent) {
  const { clientX: startX, clientY: startY } = beginEvent;
  beginResizeContent(beginEvent, ({ clientX: endX, clientY: endY }, { clientWidth, clientHeight }) => {
    const { value: width, offset: translateX } = resizingForward(startX, endX, clientWidth, contentTranslateX);
    const { value: height, offset: translateY } = resizingForward(startY, endY, clientHeight, contentTranslateY);
    setStyleWidth(width);
    setStyleHeight(height);
    setStyletTransform(translateX, translateY);
  });
}

/** 选择调整右上方 */
function handleResizeRightTop(beginEvent: PointerEvent) {
  const { clientX: startX, clientY: startY } = beginEvent;
  beginResizeContent(beginEvent, ({ clientX: endX, clientY: endY }, { clientWidth, clientHeight }) => {
    const { value: width, offset: translateX } = resizingBackward(startX, endX, clientWidth, contentTranslateX);
    const { value: height, offset: translateY } = resizingForward(startY, endY, clientHeight, contentTranslateY);
    setStyleWidth(width);
    setStyleHeight(height);
    setStyletTransform(translateX, translateY);
  });
}

/** 选择调整左下方 */
function handleResizeLeftBottom(beginEvent: PointerEvent) {
  const { clientX: startX, clientY: startY } = beginEvent;
  beginResizeContent(beginEvent, ({ clientX: endX, clientY: endY }, { clientWidth, clientHeight }) => {
    const { value: width, offset: translateX } = resizingForward(startX, endX, clientWidth, contentTranslateX);
    const { value: height, offset: translateY } = resizingBackward(startY, endY, clientHeight, contentTranslateY);
    setStyleWidth(width);
    setStyleHeight(height);
    setStyletTransform(translateX, translateY);
  });
}

/** 选择调整右下方 */
function handleResizeRightBottom(beginEvent: PointerEvent) {
  const { clientX: startX, clientY: startY } = beginEvent;
  beginResizeContent(beginEvent, ({ clientX: endX, clientY: endY }, { clientWidth, clientHeight }) => {
    const { value: width, offset: translateX } = resizingBackward(startX, endX, clientWidth, contentTranslateX);
    const { value: height, offset: translateY } = resizingBackward(startY, endY, clientHeight, contentTranslateY);
    setStyleWidth(width);
    setStyleHeight(height);
    setStyletTransform(translateX, translateY);
  });
}

const isLeftDir = computed(() => props.directions.includes('left'));
const isRightDir = computed(() => props.directions.includes('right'));
const isTopDir = computed(() => props.directions.includes('top'));
const isBottomDir = computed(() => props.directions.includes('bottom'));
</script>

<template>
  <div
    ref="contentRef"
    class="mt-resize"
    :style="isCustomPosition ? { transform: `translate(${contentTranslateX}px,${contentTranslateY}px)` } : {}"
  >
    <template v-if="!disabled">
      <div v-if="isLeftDir" class="left-box" @pointerdown.stop.prevent="handleResizeLeft" />
      <div v-if="isRightDir" class="right-box" @pointerdown.stop.prevent="handleResizeRight" />
      <div v-if="isTopDir" class="top-box" @pointerdown.stop.prevent="handleResizeTop" />
      <div v-if="isBottomDir" class="bottom-box" @pointerdown.stop.prevent="handleResizeBottom" />
      <div v-if="isLeftDir && isTopDir" class="left-top-box" @pointerdown.stop.prevent="handleResizeLeftTop" />
      <div v-if="isRightDir && isTopDir" class="right-top-box" @pointerdown.stop.prevent="handleResizeRightTop" />
      <div v-if="isLeftDir && isBottomDir" class="left-bottom-box" @pointerdown.stop.prevent="handleResizeLeftBottom" />
      <div v-if="isRightDir && isBottomDir" class="right-bottom-box" @pointerdown.stop.prevent="handleResizeRightBottom" />
    </template>
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
