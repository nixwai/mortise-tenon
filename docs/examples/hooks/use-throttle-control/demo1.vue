<script setup lang="ts">
import { useThrottleControl } from '@mortise-tenon/hooks';
import { ref } from 'vue';

const num = ref(0);

const { throttleFn: handleClick } = useThrottleControl(1000, () => num.value++);
</script>

<template>
  <button @click="handleClick">
    {{ num }}
  </button>
</template>
