<script setup lang="ts">
import type { ButtonProps } from './types';
import { computed, onMounted, ref } from 'vue';
import './button.scss';

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
const buttonRef = ref();

onMounted(() => {
  if (hasMode) {
    // 监听动画执行结束
    buttonRef.value.$el.addEventListener('animationend', () => {
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
    :class="{ 'ex-button': hasMode }"
    :style="{ 'animation-duration': time, 'pointer-events': buttonDisabled ? 'none' : 'all' }"
    @click="handleClick"
  >
    <slot />
  </button>
</template>
