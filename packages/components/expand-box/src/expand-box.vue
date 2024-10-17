<script setup lang="ts">
import type { ExpandBoxEmits, ExpandBoxProps } from './expand-box';
import { debounce } from 'lodash-es';
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';

const props = withDefaults(defineProps<ExpandBoxProps>(), {
  open: false,
  targetRange: 0,
  transitionTime: '0.2s',
  placement: 'bottom',
});

const emit = defineEmits<ExpandBoxEmits>();

/** 内容实例 */
const contentRef = ref();
/** 内容大小 */
const contentRange = ref(0);
/** 是否展开更多 */
const hasExtendMore = ref(false);
/** 是否超出目标范围 */
const isOutRange = computed(() => contentRange.value > props.targetRange);
/** 展开或收起后内容样式 */
const contentStyle = computed(() => {
  const size = !isOutRange.value || hasExtendMore.value ? contentRange.value : props.targetRange;
  return {
    overflow: 'hidden',
    height: `${size}px`,
    transition: `height ${props.transitionTime} ease-in-out`,
  };
});

watch(
  () => props.open,
  (value) => {
    hasExtendMore.value = value;
  },
  { immediate: true },
);

/** 修改是否展开更多 */
function changeExtendMore(value: boolean) {
  emit('change', value);
  emit('update:open', value);
  hasExtendMore.value = value;
}

/** 切换是否展开更多 */
function toggleExtendMore() {
  changeExtendMore(!hasExtendMore.value);
}

/** 插槽数据 */
const slotData = computed(() => ({
  hasExtendMore: hasExtendMore.value,
  isOutRange: isOutRange.value,
  toggleExtendMore,
}));

/** 获取内容实际范围 */
function getRealRange() {
  contentRange.value = contentRef.value?.offsetHeight;
}

/** 自动监听触发，重新计算高度 */
const handleResize = debounce(getRealRange, 200);

let resizeObserver: ResizeObserver | undefined;

// 初始化内容
onMounted(() => {
  getRealRange(); // 获取内容实际范围
  // ================= 监听元素尺寸变化 ==================
  resizeObserver = new ResizeObserver(handleResize);
  resizeObserver?.observe(contentRef.value);
});

// 移除监听事件
onBeforeUnmount(() => {
  if (resizeObserver) {
    resizeObserver.disconnect();
  }
});

defineExpose({
  isOutRange,
  hasExtendMore,
  changeExtendMore,
  toggleExtendMore,
});
</script>

<template>
  <div>
    <!-- 展开的内容（位于按钮前方） -->
    <div
      v-if="placement === 'top'"
      :style="contentStyle"
    >
      <div ref="contentRef">
        <slot
          name="content"
          v-bind="slotData"
        />
      </div>
    </div>
    <!-- 控制展开/收起的按钮区域 -->
    <slot
      v-bind="slotData"
      name="custom"
    >
      <div class="button-box">
        <!-- 定义在按钮前方的插槽 -->
        <slot
          name="before"
          v-bind="slotData"
        />
        <!-- 切换按钮，仅在isOutRange为ture时显示 -->
        <div
          v-if="isOutRange"
          class="extend-button"
          :style="buttonStyle"
          @click="toggleExtendMore"
        >
          <slot
            v-bind="slotData"
            name="button"
          />
          <div
            class="btn-icon"
            :class="{ active: hasExtendMore }"
          >
            ﹀
          </div>
        </div>
        <!-- 定义在按钮后方的插槽 -->
        <slot
          name="after"
          v-bind="slotData"
        />
      </div>
    </slot>
    <!-- 展开的内容（位于按钮后方） -->
    <div
      v-if="placement === 'bottom'"
      :style="contentStyle"
    >
      <div ref="contentRef">
        <slot
          name="content"
          v-bind="slotData"
        />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.button-box {
  display: flex;
  align-items: center;

  .extend-button {
    display: flex;
    align-items: center;
    color: rgba(6, 21, 51, 0.65);
    border-radius: 4px;
    cursor: pointer;
  }

  .btn-icon {
    margin: 4px;
    font-size: 12px;
  }

  .active {
    transform: rotateZ(180deg);
  }

  .extend-content {
    color: rgba(6, 21, 51, 0.65);
  }
}
</style>
