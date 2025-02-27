<script setup lang="tsx">
import { MtComponentNeo, useComponentNeo } from 'mortise-tenon-design';
import { h, onMounted, ref } from 'vue';
import Count from './count.vue';
import Text from './text.vue';

const { getComponentRef, toggleComponent } = useComponentNeo('uniqueId1');

const val = ref(false);
function handleClick() {
  val.value = !val.value;
  if (val.value) {
    toggleComponent(Count, { class: 'c-red' }, { count: (slotData: { value: number }) => h('div', `我是Count插槽，点击+1：${slotData?.value}`) });
  }
  else {
    toggleComponent(Text, {}, { text: (slotData: { value: string }) => h('div', `我是Text插槽，输出：${slotData?.value}`) });
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
    <MtComponentNeo unique-id="uniqueId1" @toggle-component="handleToggle" />
  </div>
</template>
