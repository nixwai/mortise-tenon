<script setup lang="ts">
import { ref } from 'vue';

defineOptions({ name: 'ExampleCount' });

const value = ref(0);

defineExpose({ value });
</script>

<template>
  <div class="cursor-pointer" @click="value++">
    <slot name="count" :value="value">
      点击：{{ value }}
    </slot>
  </div>
</template>
