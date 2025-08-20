<script setup lang="ts">
import type { DomResizeContent, DomResizeDirection, DomResizeStyle } from 'mortise-tenon-tool';
import type { ResizeProps } from './resize';
import { domResize } from 'mortise-tenon-tool';
import { computed, ref } from 'vue';

defineOptions({ name: 'MtResize' });

const props = withDefaults(
  defineProps<ResizeProps>(),
  {
    disabled: false,
    directions: () => ['right'],
    lockAspectRatio: false,
    grid: () => [0.5, 0.5],
  },
);

const emit = defineEmits<{
  (e: 'resize', content: DomResizeContent, style: DomResizeStyle): void
}>();

/** 元素实例 */
const contentRef = ref<HTMLDivElement>();
/** 调整的方向 */
const resizeDirection = ref('');
/** 调整函数 */
function handleResize(event: PointerEvent, direction: DomResizeDirection) {
  resizeDirection.value = direction;
  domResize({
    event,
    direction,
    target: contentRef.value,
    offset: props.offset,
    lockAspectRatio: props.lockAspectRatio,
    grid: props.grid,
    callback: (content, style) => {
      emit('resize', content, style);
    },
  });
};

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
      <div v-if="isLeftDir && !lockAspectRatio" class="left-box" @pointerdown.stop.prevent="(e) => handleResize(e, 'left')" />
      <div v-if="isRightDir && !lockAspectRatio" class="right-box" @pointerdown.stop.prevent="(e) => handleResize(e, 'right')" />
      <div v-if="isTopDir && !lockAspectRatio" class="top-box" @pointerdown.stop.prevent="(e) => handleResize(e, 'top')" />
      <div v-if="isBottomDir && !lockAspectRatio" class="bottom-box" @pointerdown.stop.prevent="(e) => handleResize(e, 'bottom')" />
      <div v-if="isLeftDir && isTopDir" class="left-top-box" @pointerdown.stop.prevent="(e) => handleResize(e, 'left-top')" />
      <div v-if="isRightDir && isTopDir" class="right-top-box" @pointerdown.stop.prevent="(e) => handleResize(e, 'right-top')" />
      <div v-if="isLeftDir && isBottomDir" class="left-bottom-box" @pointerdown.stop.prevent="(e) => handleResize(e, 'left-bottom')" />
      <div v-if="isRightDir && isBottomDir" class="right-bottom-box" @pointerdown.stop.prevent="(e) => handleResize(e, 'right-bottom')" />
    </template>
    <slot :direction="resizeDirection" />
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
