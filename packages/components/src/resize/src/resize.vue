<script setup lang="ts">
import type { DomResizeOptions, ResizeDirection, ResizeStatus } from 'mortise-tenon-tool';
import type { ResizeProps } from './resize';
import { domResize } from 'mortise-tenon-tool';
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
  (e: 'resize', status: ResizeStatus, direction: ResizeDirection): void
}>();

/** 元素实例 */
const contentRef = ref<HTMLDivElement>();
const resizeStatus = ref<ResizeStatus>('idle');
const resizeDirection = ref<ResizeDirection>('');

const resizeOptions = computed<DomResizeOptions>(() => ({
  target: contentRef.value,
  translated: props.translated,
  lockAspectRatio: props.lockAspectRatio,
}));

const onResize = domResize((status: ResizeStatus, direction: ResizeDirection) => {
  resizeStatus.value = status;
  resizeDirection.value = direction;
  emit('resize', status, direction);
});

/** 选择调整左侧 */
function handleResizeLeft(event: PointerEvent) {
  onResize({ ...resizeOptions.value, event, direction: 'left' });
}

/** 选择调整右侧 */
function handleResizeRight(event: PointerEvent) {
  onResize({ ...resizeOptions.value, event, direction: 'right' });
}

/** 选择调整上方 */
function handleResizeTop(event: PointerEvent) {
  onResize({ ...resizeOptions.value, event, direction: 'top' });
}

/** 选择调整下方 */
function handleResizeBottom(event: PointerEvent) {
  onResize({ ...resizeOptions.value, event, direction: 'bottom' });
}

/** 选择调整左上方 */
function handleResizeLeftTop(event: PointerEvent) {
  onResize({ ...resizeOptions.value, event, direction: 'left-top' });
}

/** 选择调整右上方 */
function handleResizeRightTop(event: PointerEvent) {
  onResize({ ...resizeOptions.value, event, direction: 'right-top' });
}

/** 选择调整左下方 */
function handleResizeLeftBottom(event: PointerEvent) {
  onResize({ ...resizeOptions.value, event, direction: 'left-bottom' });
}

/** 选择调整右下方 */
function handleResizeRightBottom(event: PointerEvent) {
  onResize({ ...resizeOptions.value, event, direction: 'right-bottom' });
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
    <slot :status="resizeStatus" :direction="resizeDirection" />
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
