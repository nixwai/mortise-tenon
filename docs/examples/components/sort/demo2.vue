<script setup lang="ts">
import { MtSort } from '@mortise-tenon/components';
import { ref } from 'vue';

const list = ref([2, 7, 9, 6, 4, 3, 1]);
</script>

<template>
  序号5、8不在排序修改范围中
  <h6>使用v-if隐藏元素</h6>
  <MtSort :sort-list="list">
    <div>
      <div v-for="i in 5" :key="i" :sort-key="i">
        {{ i }}
      </div>
    </div>
    <div :sort-key="6">
      6
    </div>
    <div>
      <div v-if="false" :sort-key="7">
        7
      </div>
      <div>
        8
      </div>
      <div :sort-key="9">
        9
      </div>
    </div>
  </MtSort>
  <h6>使用v-show隐藏元素</h6>
  <MtSort :sort-list="list">
    <div>
      <div v-for="i in 5" :key="i" :sort-key="i">
        {{ i }}
      </div>
    </div>
    <div :sort-key="6">
      6
    </div>
    <div>
      <div v-show="false" :sort-key="7">
        7
      </div>
      <div>
        8
      </div>
      <div :sort-key="9">
        9
      </div>
    </div>
  </MtSort>
</template>

<style scoped>
div {
  display: inline-block;
}
</style>
