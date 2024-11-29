<script setup lang="ts">
import { useThrottleControl } from '@mortise-tenon/hooks';
import { ref } from 'vue';

const num = ref(0);

const { throttling, throttleFn: handleClick } = useThrottleControl(1000, () => num.value++);
</script>

<template>
  <button :style="{ color: throttling ? 'red' : 'green' }" @click="handleClick">
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
