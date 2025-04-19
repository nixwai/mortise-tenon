<script setup lang="ts">
defineOptions({ name: 'ExampleText' });

const value = defineModel<string>({ type: String, default: '' });
</script>

<template>
  <div>
    <slot name="text" :value="value" />
    <input v-model="value" type="text" class="b-1 b-gray b-solid rounded-md mr-1 px-1">
  </div>
</template>
