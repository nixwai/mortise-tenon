<script setup lang="ts">
defineOptions({ name: 'ExampleText' });

const value = defineModel<string>({ type: String, default: '' });

defineExpose({ value });
</script>

<template>
  <div>
    <slot name="text" :value="value" />
    <input v-model="value" type="text" class="b-1 b-gray b-solid px-1 rounded-md mr-1">
  </div>
</template>
