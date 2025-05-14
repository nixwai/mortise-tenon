<script setup lang="ts">
import { updateThemeColor } from 'mortise-tenon-preset/helper';
import { ref } from 'vue';

const demo = ref<HTMLElement>();
function setTheme(color: string) {
  updateThemeColor({ name: 'primary', color, dom: demo.value });
}
</script>

<template>
  <div class="flex">
    <div>点击切换：</div>
    <button class="c-blue mx-1" @click="setTheme('blue')">
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
  </div>
</template>
