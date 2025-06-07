<script setup lang="ts">
defineOptions({ name: 'ExampleText' });

const value = defineModel<string>({ type: String, default: '' });

defineExpose({ value });
</script>

<template>
  <div>
    <slot name="text" :value="value" />
    <input v-model="value" type="text" class="b-solid b-1 b-gray rounded-md mr-1 px-1">
  </div>
</template>
