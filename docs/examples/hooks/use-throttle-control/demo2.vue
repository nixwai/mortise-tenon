<script setup lang="ts">
import { useThrottleControl } from '@mortise-tenon/hooks';
import { ref } from 'vue';

const num = ref(0);

const {
  throttling,
  openThrottle,
  closeThrottle,
} = useThrottleControl(1000);

/** 模拟远程请求，等待0~2秒 */
function addNum() {
  if (throttling.value) {
    return;
  }
  const timer = openThrottle();
  return new Promise<void>((resolve) => {
    const sm = Math.random() * 2000; // 随机0~2000
    setTimeout(() => {
      num.value++;
      closeThrottle(timer); // 结束时可提前关闭节流
      resolve();
    }, sm);
  });
}
</script>

<template>
  <button :style="{ color: throttling ? 'red' : 'green' }" @click="addNum()">
    {{ num }}
  </button>
</template>

<style scoped>
button {
  padding: 5px 15px;
  cursor: pointer;
  background-color: #fff;
  border-radius: 4px;
}
</style>
