<script setup lang="ts">
import { createDynamicComponent } from 'mortise-tenon-use';
import { h, ref } from 'vue';

const comp1 = h('div', 'Hollo');
const comp2 = h('div', 'World');

const val = ref(true);

const { DynamicComponent } = createDynamicComponent();
</script>

<template>
  <div>
    <button class="btn mb-2" @click="val = !val">
      切换默认内容
    </button>
    <DynamicComponent :is="val ? comp1 : comp2" class="c-blue" />
  </div>
</template>
