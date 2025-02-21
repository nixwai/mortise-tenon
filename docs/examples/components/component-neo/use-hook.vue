<script setup lang="ts">
import { MtComponentNeo, useComponentNeo } from '@mortise-tenon/components';
import { h, ref } from 'vue';

const comp1 = h('div', 'Hollo');
const comp2 = h('div', 'World');

const { getComponentRef, toggleComponent } = useComponentNeo('uniqueId1');

const val = ref(false);
function handleClick() {
  val.value = !val.value;
  if (val.value) {
    toggleComponent(comp1, { class: 'c-red' });
  }
  else {
    toggleComponent(comp2, { class: 'c-blue' });
  }
}

function handleToggle() {
  console.warn('已切换', getComponentRef());
}

handleClick();
</script>

<template>
  <div>
    <button class="btn mb-2" @click="handleClick">
      切换组件
    </button>
    <MtComponentNeo unique-id="uniqueId1" @toggle-component="handleToggle" />
  </div>
</template>
