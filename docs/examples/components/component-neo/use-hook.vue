<script setup lang="tsx">
import { MtComponentNeo, useComponentNeo } from 'mortise-tenon-design';
import { h, onMounted, reactive, toRefs } from 'vue';
import Text from './text.vue';

const { getComponentRef, toggleComponent } = useComponentNeo('uniqueId1');

const inputValues = reactive({
  input1: '',
  input2: '',
  input3: '',
});

const valueAsRefs = toRefs(inputValues);

function handleClick(index = 1) {
  switch (index) {
    case 1:
      toggleComponent(
        Text,
        { key: 'input1', vModel: valueAsRefs.input1 },
        {
          text: (slotData: { value: string }) =>
            h('div', `输入框1：${slotData?.value}`),
        },
      );
      break;
    case 2:
      toggleComponent(
        () => import('./text.vue'),
        { 'key': 'input2', 'vModel:modelValue': valueAsRefs.input2 },
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
      toggleComponent(
        h(() => (
          <Text
            key="input3"
            v-model={valueAsRefs.input3.value}
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

function handleToggle() {
  console.warn('已切换', getComponentRef());
}

onMounted(() => {
  handleClick();
});
</script>

<template>
  <div>
    <!-- <Text v-model="inputValue" class="mb-2" /> -->
    <button
      v-for="i in 3"
      :key="i"
      class="mb-2 btn"
      @click="handleClick(i)"
    >
      组件{{ i }}
    </button>
    <MtComponentNeo unique-id="uniqueId1" @toggle-component="handleToggle" />
  </div>
</template>
