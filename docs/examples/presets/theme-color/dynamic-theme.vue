<script setup lang="ts">
import { updateColorValue } from 'mortise-tenon-preset/helper';
import { ref } from 'vue';

const demo = ref<HTMLElement>();
function setTheme(color: string) {
  updateColorValue({ name: 'primary', color, type: ['theme', 'preflight'], dom: demo.value });
}
</script>

<template>
  <div class="flex">
    <div>点击切换：</div>
    <button class="mx-1 c-blue" @click="setTheme('blue')">
      蓝色
    </button>
    <button class="c-green" @click="setTheme('green')">
      绿色
    </button>
  </div>
  <div ref="demo" class="flex items-center">
    <button class="btn btn-deep mr-2">
      按钮
    </button>

    <div style="color: hsl(var(--mt-primary-500));">
      文本
    </div>
  </div>
</template>
