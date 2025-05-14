<script setup lang="tsx">
import type { RenderedOptions } from 'mortise-tenon-use';
import { createDynamicComponent } from 'mortise-tenon-use';
import { h, ref } from 'vue';
import Text from './text.vue';

const { DynamicComponent, renderComponent } = createDynamicComponent();
const inputValue = ref('');

function handleClick(index = 1) {
  switch (index) {
    case 1:
      renderComponent(
        Text,
        { key: 'input1', vModel: inputValue },
        {
          text: (slotData: { value: string }) =>
            h('div', `输入框1：${slotData?.value}`),
        },
      );
      break;
    case 2:
      renderComponent(
        () => import('./text.vue'),
        { 'key': 'input2', 'vModel:modelValue': inputValue },
        {
          text: (slotData: { value: string }) => (
            <div>
              输入框2：
              { slotData?.value }
            </div>
          ),
        },
      );
      break;
    case 3:
      renderComponent(
        h(() => (
          <Text
            key="input3"
            v-model={inputValue.value}
          >
            {{
              text: (slotData: { value: string }) => (
                <div>
                  输入框3：
                  { slotData?.value }
                </div>
              ),
            }}
          </Text>
        )),
      );
      break;
  }
}

function handleRendered({ name, domRef }: RenderedOptions) {
  console.warn('已切换', name, domRef);
}

handleClick();
</script>

<template>
  <div>
    <Text v-model="inputValue" class="mb-2" />
    <button
      v-for="i in 3"
      :key="i"
      class="mb-2 btn"
      @click="handleClick(i)"
    >
      组件{{ i }}
    </button>
    <DynamicComponent @rendered="handleRendered" />
  </div>
</template>
