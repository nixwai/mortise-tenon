<script setup lang="ts">
import { MtComponentNeo, useComponentNeo } from '@mortise-tenon/components';
import { ref } from 'vue';
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
    toggleComponent(Text, { class: '' });
  }
}

function handleToggle() {
  console.warn('已切换', getComponentRef());
}

// handleClick();
</script>

<template>
  <div>
    <button class="btn mb-2 flex flex-col-reverse" @click="handleClick">
      切换组件
    </button>
    <MtComponentNeo v-slot="{ Component }" unique-id="uniqueId2" @toggle-component="handleToggle">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </MtComponentNeo>
  </div>
</template>
