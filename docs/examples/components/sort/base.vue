<script setup lang="ts">
import { MtSort } from 'mortise-tenon-design';
import { ref } from 'vue';

const list = ref([2, 7, 9, 6, 4, 3, 1]);

function handleClick() {
  list.value = list.value.reverse();
}
</script>

<template>
  <button @click="handleClick">
    点击
  </button>
  <br>
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
      <div :sort-key="7">
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
