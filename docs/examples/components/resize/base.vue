<script setup lang="ts">
import { MtResize } from 'mortise-tenon-design';
import { ref } from 'vue';

const width = ref<number>();

function handleResize(content: { width?: number }) {
  width.value = content.width;
}
</script>

<template>
  鼠标移至元素右侧即可拖拽调整大小
  <MtResize class="min-w-10 bg-blue w-20 h-20 max-w-100% mt-2" @resize="handleResize">
    width: {{ width }}
  </MtResize>
</template>
