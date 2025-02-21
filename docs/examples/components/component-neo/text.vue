<script setup lang="ts">
import { ref } from 'vue';

defineOptions({ name: 'ExampleText' });

const value = ref('');
</script>

<template>
  <input v-model="value" type="text" class="b-1 b-gray b-solid rounded-md mr-1 px-1">
  <slot name="text" :value="value">
    {{ value }}
  </slot>
</template>
