<script setup lang="ts">
import { createDynamicComponent } from 'mortise-tenon-use';
import { ref } from 'vue';
import Count from './count.vue';
import Text from './text.vue';

const { DynamicComponent, renderComponent } = createDynamicComponent();

const val = ref(false);
function handleClick() {
  val.value = !val.value;
  if (val.value) {
    renderComponent(Count, { class: 'c-green' });
  }
  else {
    renderComponent(Text);
  }
}

handleClick();
</script>

<template>
  <div>
    <button class="btn mb-2 flex flex-col-reverse" @click="handleClick">
      切换组件
    </button>
    <DynamicComponent v-slot="{ Component, compName }" unique-id="uniqueId3">
      <component :is="Component">
        <template #count="{ value }">
          <div>我是{{ compName }}的自定义插槽，点击+1：{{ value }}</div>
        </template>
        <template #text="{ value }">
          <div>我是{{ compName }}的自定义插槽，输出：{{ value }}</div>
        </template>
      </component>
    </DynamicComponent>
  </div>
</template>
