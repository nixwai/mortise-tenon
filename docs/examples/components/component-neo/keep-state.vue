<script setup lang="ts">
import { MtComponentNeo, useComponentNeo } from '@mortise-tenon/components';
import { ref } from 'vue';

const { getComponentRef, toggleComponent } = useComponentNeo('uniqueId2');

const val = ref(false);
function handleClick() {
  val.value = !val.value;
  if (val.value) {
    toggleComponent(() => import('./count.vue'), { class: 'c-red' });
  }
  else {
    toggleComponent(() => import('./text.vue'));
  }
}

function handleToggle() {
  console.warn('已切换', getComponentRef());
}

handleClick();
</script>

<template>
  <div>
    <button class="btn mb-2 flex flex-col-reverse" @click="handleClick">
      切换组件
    </button>
    <MtComponentNeo v-slot="{ Component, compRef }" unique-id="uniqueId2" @toggle-component="handleToggle">
      <keep-alive>
        <component :is="Component" :ref="compRef" aa="666" />
      </keep-alive>
    </MtComponentNeo>
  </div>
</template>
