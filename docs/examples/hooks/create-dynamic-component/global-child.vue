<script setup lang="ts">
import { h, ref } from 'vue';
import { globalDynamicComponent } from './use-global';

const comp1 = h('div', 'Hollo');
const comp2 = h('div', 'World');

const val = ref(true);

const { renderComponent } = globalDynamicComponent();

function handleClick() {
  val.value = !val.value;
  if (val.value) {
    renderComponent(comp1);
  }
  else {
    renderComponent(comp2);
  }
}

handleClick();
</script>

<template>
  <button class="btn mb-2" @click="handleClick">
    切换组件
  </button>
</template>
