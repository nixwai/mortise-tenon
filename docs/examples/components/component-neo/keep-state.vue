<script setup lang="ts">
import { MtComponentNeo, useComponentNeo } from '@mortise-tenon/components';
import { onMounted, ref } from 'vue';
import Count from './count.vue';
import Text from './text.vue';

const { getComponentRef, toggleComponent } = useComponentNeo('uniqueId2');

const val = ref(false);
function handleClick() {
  val.value = !val.value;
  if (val.value) {
    toggleComponent(Count, { class: 'c-red' });
  }
  else {
    toggleComponent(Text);
  }
}

function handleToggle() {
  console.warn('已切换', getComponentRef());
}

onMounted(() => {
  handleClick();
});
</script>

<template>
  <div>
    <button class="btn mb-2 flex flex-col-reverse" @click="handleClick">
      切换组件
    </button>
    <MtComponentNeo v-slot="{ Component, compRef }" unique-id="uniqueId2" @toggle-component="handleToggle">
      <keep-alive>
        <component :is="Component" :ref="compRef" />
      </keep-alive>
    </MtComponentNeo>
  </div>
</template>
