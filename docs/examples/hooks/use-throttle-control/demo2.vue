<script setup lang="ts">
import { useThrottleControl } from '@mortise-tenon/hooks';
import { ref } from 'vue';

const num = ref(0);

const {
  throttling,
  openThrottle,
  closeThrottle,
} = useThrottleControl(3000);

/** 当请求等待超过3s或者请求结束时会结束节流 */
function handleClick() {
  if (throttling.value) {
    return;
  }
  const timer = openThrottle();
  addNum().finally(() => {
    closeThrottle(timer); // 请求结束时关闭节流
  });
}

/** 模拟远程请求 */
function addNum() {
  return new Promise<void>((resolve) => {
    const sm = num.value * 1000;
    setTimeout(() => {
      num.value++;
      resolve();
    }, sm);
  });
}
</script>

<template>
  <div>当前请求所需时间：{{ num }}秒</div>
  <button
    :style="{ color: throttling ? 'red' : 'green' }"
    class="btn"
    @click="handleClick()"
  >
    {{ num }}
  </button>
</template>
