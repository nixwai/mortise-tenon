<script setup lang="ts">
import { MtComponentNeo, useComponentNeo } from 'mortise-tenon-design';
import { onMounted, ref } from 'vue';
import Count from './count.vue';
import Text from './text.vue';

const { toggleComponent } = useComponentNeo('uniqueId3');

const val = ref(false);
function handleClick() {
  val.value = !val.value;
  if (val.value) {
    toggleComponent(Count, { class: 'c-green' });
  }
  else {
    toggleComponent(Text);
  }
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
    <MtComponentNeo v-slot="{ Component, compRef, compName }" unique-id="uniqueId3">
      <component :is="Component" :ref="compRef">
        <template #count="{ value }">
          <div>我是{{ compName }}的自定义插槽，点击+1：{{ value }}</div>
        </template>
        <template #text="{ value }">
          <div>我是{{ compName }}的自定义插槽，输出：{{ value }}</div>
        </template>
      </component>
    </MtComponentNeo>
  </div>
</template>
