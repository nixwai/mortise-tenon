<script setup lang="ts">
import type { ResizeProps, ResizeStatus } from './resize';
import { computed, ref } from 'vue';

defineOptions({ name: 'MtResize' });

const props = withDefaults(
  defineProps<ResizeProps>(),
  {
    disabled: false,
    positioned: false,
    directions: () => ['right'],
    lockAspectRatio: false,
  },
);

const emit = defineEmits<{
  (e: 'resize', status: ResizeStatus): void
}>();

/** 元素实例 */
const contentRef = ref<HTMLDivElement>();
/** 是否自定义位置 */
const isCustomPosition = typeof props.positioned === 'object';
/** X轴位移 */
let cacheTranslateX = isCustomPosition ? props.positioned.x || 0 : 0;
/** Y轴位移 */
let cacheTranslateY = isCustomPosition ? props.positioned.y || 0 : 0;

/** 调整状态 */
const resizeStatus = ref<ResizeStatus>('idle');

function updateResizeStatus(status: ResizeStatus) {
  resizeStatus.value = status;
  emit('resize', status);
}

type ResizingFn = (start: number, end: number, clientValue: number, offsetValue: number) => { value: number, offset: number };
/** 向前调整（往右或者往下） */
const resizingForward: ResizingFn = (start, end, clientValue, offsetValue) => {
  const move = start - end;
  const value = clientValue - move;
  return value > 0 ? { value, offset: offsetValue } : { value, offset: offsetValue + value };
};

/** 向后调整（往左或者往上） */
const resizingBackward: ResizingFn = (start, end, clientValue, offsetValue) => {
  const move = start - end;
  const value = clientValue + move;
  return value > 0 ? { value, offset: offsetValue - move } : { value, offset: offsetValue + clientValue };
};

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
  resizingContent: (moveEvent: PointerEvent, clientSize: { clientWidth: number, clientHeight: number, aspectRatio: number }) => void,
) {
  if (props.disabled) { return; }
  if (!contentRef.value) { return; }
  const { clientWidth, clientHeight } = contentRef.value;
  const aspectRatio = clientWidth / clientHeight;
  contentRef.value.setPointerCapture(beginEvent.pointerId);
  contentRef.value.onpointermove = (moveEvent) => {
    resizingContent(moveEvent, { clientWidth, clientHeight, aspectRatio });
    updateResizeStatus('moving');
  };
  contentRef.value.onpointerup = overResizeContent;
  updateResizeStatus('prepare');
}

const translateValueReg = /translate\((.+)px,(.+)px\)/;
/** 结束拖拽容器 */
function overResizeContent(overEvent: PointerEvent) {
  if (!contentRef.value) { return; }
  cacheTranslateX = Number(contentRef.value.style.transform?.match(translateValueReg)?.[1] || 0);
  cacheTranslateY = Number(contentRef.value.style.transform?.match(translateValueReg)?.[2] || 0);
  contentRef.value.onpointermove = null;
  contentRef.value.releasePointerCapture(overEvent.pointerId);
  updateResizeStatus('idle');
}

/** 调整宽度 */
function resizingWidth(beginEvent: PointerEvent, resizingWidthFn: ResizingFn) {
  const { clientX: startX } = beginEvent;
  beginResizeContent(beginEvent, ({ clientX: endX }, { clientWidth }) => {
    const { value: width, offset: translateX } = resizingWidthFn(startX, endX, clientWidth, cacheTranslateX);
    setStyleWidth(width);
    setStyletTransform(translateX, cacheTranslateY);
  });
}

/** 选择调整左侧 */
function handleResizeLeft(beginEvent: PointerEvent) {
  resizingWidth(beginEvent, resizingBackward);
}

/** 选择调整右侧 */
function handleResizeRight(beginEvent: PointerEvent) {
  resizingWidth(beginEvent, resizingForward);
}

/** 调整高度 */
function resizingHeight(beginEvent: PointerEvent, resizingHeightFn: ResizingFn) {
  const { clientY: startY } = beginEvent;
  beginResizeContent(beginEvent, ({ clientY: endY }, { clientHeight }) => {
    const { value: height, offset: translateY } = resizingHeightFn(startY, endY, clientHeight, cacheTranslateY);
    setStyleHeight(height);
    setStyletTransform(cacheTranslateX, translateY);
  });
}

/** 选择调整上方 */
function handleResizeTop(beginEvent: PointerEvent) {
  resizingHeight(beginEvent, resizingBackward);
}

/** 选择调整下方 */
function handleResizeBottom(beginEvent: PointerEvent) {
  resizingHeight(beginEvent, resizingForward);
}

/** 调整高度与宽度 */
function resizingWidthAndHeight(beginEvent: PointerEvent, resizingWidthFn: ResizingFn, resizingHeightFn: ResizingFn) {
  const updateDom = (options: { startX: number, startY: number, endX: number, endY: number, clientWidth: number, clientHeight: number }) => {
    const { value: width, offset: translateX } = resizingWidthFn(options.startX, options.endX, options.clientWidth, cacheTranslateX);
    const { value: height, offset: translateY } = resizingHeightFn(options.startY, options.endY, options.clientHeight, cacheTranslateY);
    setStyleWidth(width);
    setStyleHeight(height);
    setStyletTransform(translateX, translateY);
  };

  if (props.lockAspectRatio) {
    // 固定比例时，宽度根据鼠标位置决定，高度的调整根据宽度的变化与元素宽高比例决定
    const { clientX: startX } = beginEvent;
    const dir = resizingWidthFn === resizingHeightFn ? 1 : -1; // 宽高调整的方向不是同向时，需要反向调整高度
    beginResizeContent(beginEvent, ({ clientX: endX }, { clientWidth, clientHeight, aspectRatio }) => {
      const startY = dir * startX / aspectRatio;
      const endY = dir * endX / aspectRatio;
      updateDom({ startX, startY, endX, endY, clientWidth, clientHeight });
    });
  }
  else {
    // 不固定比例时，宽高根据鼠标位置决定
    const { clientX: startX, clientY: startY } = beginEvent;
    beginResizeContent(beginEvent, ({ clientX: endX, clientY: endY }, { clientWidth, clientHeight }) => {
      updateDom({ startX, startY, endX, endY, clientWidth, clientHeight });
    });
  }
}

/** 选择调整左上方 */
function handleResizeLeftTop(beginEvent: PointerEvent) {
  resizingWidthAndHeight(beginEvent, resizingBackward, resizingBackward);
}

/** 选择调整右上方 */
function handleResizeRightTop(beginEvent: PointerEvent) {
  resizingWidthAndHeight(beginEvent, resizingForward, resizingBackward);
}

/** 选择调整左下方 */
function handleResizeLeftBottom(beginEvent: PointerEvent) {
  resizingWidthAndHeight(beginEvent, resizingBackward, resizingForward);
}

/** 选择调整右下方 */
function handleResizeRightBottom(beginEvent: PointerEvent) {
  resizingWidthAndHeight(beginEvent, resizingForward, resizingForward);
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
    :style="isCustomPosition ? { transform: `translate(${cacheTranslateX}px,${cacheTranslateY}px)` } : {}"
  >
    <template v-if="!disabled">
      <div v-if="isLeftDir && !lockAspectRatio" class="left-box" @pointerdown.stop.prevent="handleResizeLeft" />
      <div v-if="isRightDir && !lockAspectRatio" class="right-box" @pointerdown.stop.prevent="handleResizeRight" />
      <div v-if="isTopDir && !lockAspectRatio" class="top-box" @pointerdown.stop.prevent="handleResizeTop" />
      <div v-if="isBottomDir && !lockAspectRatio" class="bottom-box" @pointerdown.stop.prevent="handleResizeBottom" />
      <div v-if="isLeftDir && isTopDir" class="left-top-box" @pointerdown.stop.prevent="handleResizeLeftTop" />
      <div v-if="isRightDir && isTopDir" class="right-top-box" @pointerdown.stop.prevent="handleResizeRightTop" />
      <div v-if="isLeftDir && isBottomDir" class="left-bottom-box" @pointerdown.stop.prevent="handleResizeLeftBottom" />
      <div v-if="isRightDir && isBottomDir" class="right-bottom-box" @pointerdown.stop.prevent="handleResizeRightBottom" />
    </template>
    <slot :status="resizeStatus" />
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
