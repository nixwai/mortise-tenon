<script setup lang="ts">
import { MtExpand } from '@mortise-tenon/components';
import { useThrottleControl } from '@mortise-tenon/hooks';
import { ref } from 'vue';

const open = ref(true);

function toggle() {
  open.value = !open.value;
}

const { throttleFn } = useThrottleControl(2000, toggle);
</script>

<template>
  <button @click="throttleFn">
    点击
  </button>
  <MtExpand :open="open">
    展开后内容
  </MtExpand>
</template>
