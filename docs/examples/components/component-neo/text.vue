<script setup lang="ts">
import { ref } from 'vue';

const value = ref('');
</script>

<template>
  <input v-model="value" type="text" class="b-1 b-gray b-solid rounded-md">
</template>
