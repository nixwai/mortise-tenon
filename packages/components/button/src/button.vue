<script setup lang="ts">
import type { ButtonProps } from './types';
import { computed, onMounted, ref } from 'vue';

defineOptions({ name: 'MtButton' });

const props = withDefaults(defineProps<ButtonProps>(), { time: '1s' });
const emit = defineEmits(['click']);

/** 禁止点击状态 */
const forbidStatus = ref(false);
const buttonDisabled = computed(() => {
  if (props.disabled) {
    return true;
  }
  return props.mode === 'throttle' && forbidStatus.value;
});

const hasMode = props.mode && ['throttle', 'debounce'].includes(props.mode);
const buttonRef = ref<Element>();

onMounted(() => {
  if (hasMode) {
    // 监听动画执行结束
    buttonRef.value?.addEventListener('animationend', () => {
      forbidStatus.value = false;
    });
  }
});

function handleClick(e: MouseEvent) {
  if (forbidStatus.value) {
    return;
  }
  emit('click', e);
  if (hasMode) {
    forbidStatus.value = true;
  }
}
</script>

<template>
  <button
    ref="buttonRef"
    :disabled="buttonDisabled"
    class="mt-button"
    :class="{ 'ex-button': hasMode }"
    :style="{ 'animation-duration': time, 'pointer-events': buttonDisabled ? 'none' : 'all' }"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
@import url('./style/index.scss');

.mt-button {
  display: flex;
  padding: 4px 8px;
  cursor: pointer;
  background-color: #fff;
  border: #2d2d2d solid 1px;
  border-radius: 5px;
}
</style>
