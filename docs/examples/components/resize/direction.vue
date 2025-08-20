<script setup lang="ts">
import { MtResize } from 'mortise-tenon-design';
import { ref } from 'vue';

const lockAspectRatio = ref(false);
const offset = ref<'position' | 'transform' | 'translate'>('position');
const grid = ref([0.5, 0.5]);
</script>

<template>
  <div class="flex gap-1 mt-4">
    <div>
      <input
        id="unlock"
        v-model="lockAspectRatio"
        type="radio"
        name="lockAspectRatio"
        :value="false"
        class="mb-[3px]"
      >
      <label for="unlock">unlock</label>
    </div>
    <div>
      <input
        id="lock"
        v-model="lockAspectRatio"
        type="radio"
        name="lockAspectRatio"
        :value="true"
        class="mb-[3px]"
      >
      <label for="lock">lock</label>
    </div>
  </div>

  <div class="flex gap-1 mt-4">
    <div>
      <input
        id="position"
        v-model="offset"
        type="radio"
        name="offset"
        value="position"
        class="mb-[3px]"
      >
      <label for="position">position</label>
    </div>
    <div>
      <input
        id="transform"
        v-model="offset"
        type="radio"
        name="offset"
        value="transform"
        class="mb-[3px]"
      >
      <label for="transform">transform</label>
    </div>
    <div>
      <input
        id="translate"
        v-model="offset"
        type="radio"
        name="offset"
        value="translate"
        class="mb-[3px]"
      >
      <label for="translate">translate</label>
    </div>
  </div>

  <div class="flex gap-1 mt-4">
    gridX: <input v-model="grid[0]" class="b-1 b-gray b-solid px-1 b-rounded">
    gridY: <input v-model="grid[1]" class="b-1 b-gray b-solid b-rounded px-1">
  </div>

  <div class="position-relative h-100">
    <MtResize
      :directions="['left', 'right', 'top', 'bottom']"
      :offset="offset"
      :grid="grid"
      :lock-aspect-ratio="lockAspectRatio"
      class="bg-blue min-w-10 w-30 h-30 position-absolute min-h-10 max-w-100 left-[200px] max-h-100 top-[200px]"
    />
  </div>
</template>

<style lang="css" scoped>
.ctxs-btn {
  width: 40px;
  padding: 0 10px;
  margin: 5px;
  border: 1px solid gray;
  border-radius: 4px;
}
</style>
