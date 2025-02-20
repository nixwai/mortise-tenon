<script setup lang="ts">
import { MtComponentNeo } from '@mortise-tenon/components';
import { h, ref } from 'vue';

const comp1 = h('div', 'Hollo');
const comp2 = h('div', 'World');

const val = ref(true);

function handleToggle(_name?: string, componentRef?: any) {
  console.warn('已切换', componentRef);
}
</script>

<template>
  <div>
    <button class="btn mb-2" @click="val = !val">
      切换组件
    </button>
    <MtComponentNeo :is="val ? comp1 : comp2" @toggle-component="handleToggle" />
  </div>
</template>
