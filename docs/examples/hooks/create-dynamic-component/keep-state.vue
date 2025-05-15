<script setup lang="ts">
import { createDynamicComponent } from 'mortise-tenon-use';
import { ref } from 'vue';
import Count from './count.vue';
import Text from './text.vue';

const { DynamicComponent, renderComponent, getDomRef } = createDynamicComponent();

const val = ref(false);
function handleClick() {
  val.value = !val.value;
  if (val.value) {
    renderComponent(Count, { class: 'c-red' });
  }
  else {
    renderComponent(Text);
  }
}

function handleRendered() {
  console.warn('已切换', getDomRef()?.value);
}

handleClick();
</script>

<template>
  <div>
    <button class="btn mb-2 flex flex-col-reverse" @click="handleClick">
      切换组件
    </button>
    <DynamicComponent v-slot="{ Component }" @rendered="handleRendered">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </DynamicComponent>
  </div>
</template>
