<script lang="ts" setup>
import { MtExpand } from 'mortise-tenon-design';
import { ref } from 'vue';

const open = ref(false);

function toggle() {
  open.value = !open.value;
}
</script>

<template>
  <button @click="toggle">
    点击
  </button>
  <MtExpand :open="open">
    展开后内容
  </MtExpand>
</template>
