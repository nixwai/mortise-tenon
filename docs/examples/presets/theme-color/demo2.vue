<script setup lang="ts">
import { updateColorValue } from 'mortise-tenon-preset/helper';
import { ref } from 'vue';

const demo = ref<HTMLElement>();
function setTheme(color: string) {
  updateColorValue('primary', color, demo.value);
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
  <button ref="demo" class="btn btn-deep">
    主题颜色
  </button>
</template>
