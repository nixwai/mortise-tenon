<script lang="ts" setup>
import { MtExpandBox } from '@mortise-tenon-design/components';
import { ref } from 'vue';

const open = ref(true);

function toggle() {
  open.value = !open.value;
}
</script>

<template>
  <button @click="toggle">
    点击
  </button>
  <MtExpandBox :open="open">
    展开后内容
  </MtExpandBox>
</template>
