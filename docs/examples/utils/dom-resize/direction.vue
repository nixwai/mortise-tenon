<script setup lang="ts">
import type { ResizeDirection } from '../../../../packages/utils/src';
import { ref } from 'vue';
import { domResize } from '../../../../packages/utils/src';

const resizeTarget1 = ref<HTMLDivElement>();

const directionList: ResizeDirection[] = [
  'all',
  'left',
  'right',
  'top',
  'bottom',
  'left-top',
  'left-bottom',
  'right-top',
  'right-bottom',
  'left-right',
  'top-bottom',
  'left-top-right',
  'left-bottom-right',
  'top-left-bottom',
  'top-right-bottom',
];

const direction = ref(directionList[0]);
const lockAspectRatio = ref(false);
const offset = ref<'position' | 'transform'>('position');
const grid = ref([0.5, 0.5]);
const crossAxis = ref(false);

function handleTargetResize(event: PointerEvent) {
  domResize({
    target: resizeTarget1.value,
    event,
    offset: offset.value,
    lockAspectRatio: lockAspectRatio.value,
    direction: direction.value,
    grid: grid.value,
    crossAxis: crossAxis.value,
  });
}

function changeTargetResize(dis: { x: number, y: number }) {
  domResize({
    target: resizeTarget1.value,
    offset: offset.value,
    lockAspectRatio: lockAspectRatio.value,
    direction: direction.value,
    distanceX: dis.x,
    distanceY: dis.y,
    grid: grid.value,
  });
}
</script>

<template>
  <div class="flex flex-wrap gap-1">
    <div v-for="(dir, index) in directionList" :key="dir">
      <input
        :id="`dir${index}`"
        v-model="direction"
        type="radio"
        name="direction"
        :value="dir"
        class="mb-[3px]"
      >
      <label :for="`dir${index}`">{{ dir }}</label>
    </div>
  </div>

  <div class="flex gap-1 mt-4">
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
  </div>

  <div class="flex gap-1 mt-4">
    <div>
      <input
        id="lock"
        v-model="offset"
        type="radio"
        name="offset"
        value="position"
        class="mb-[3px]"
      >
      <label for="lock">position</label>
    </div>
    <div>
      <input
        id="unlock"
        v-model="offset"
        type="radio"
        name="offset"
        value="transform"
        class="mb-[3px]"
      >
      <label for="unlock">transform</label>
    </div>
  </div>

  <div class="flex gap-1 mt-4">
    <div>
      <input
        id="cross"
        v-model="crossAxis"
        type="radio"
        name="crossAxis"
        :value="true"
        class="mb-[3px]"
      >
      <label for="cross">cross</label>
    </div>
    <div>
      <input
        id="uncross"
        v-model="crossAxis"
        type="radio"
        name="crossAxis"
        :value="false"
        class="mb-[3px]"
      >
      <label for="uncross">uncross</label>
    </div>
  </div>

  <div class="flex gap-1 mt-4">
    gridX: <input v-model="grid[0]" class="b-1 b-gray b-solid b-rounded px-1">
    gridY: <input v-model="grid[1]" class="b-1 b-gray b-solid b-rounded px-1">
  </div>

  <div class="flex mt-4 justify-center items-center flex-col ctxs-btn_b-1,b-gray,b-solid,px-2,b-rounded,w-8,mt-1 w-30">
    <button class="ctxs-btn" @click="changeTargetResize({ x: 0, y: -5 })">
      -5
    </button>
    <div class="flex gap-1 items-center justify-center">
      <button class="ctxs-btn" @click="changeTargetResize({ x: -5, y: 0 })">
        -5
      </button>
      调整
      <button class="ctxs-btn" @click="changeTargetResize({ x: 5, y: 0 })">
        +5
      </button>
    </div>
    <button class="ctxs-btn" @click="changeTargetResize({ x: 0, y: 5 })">
      +5
    </button>
  </div>

  <div class="position-relative h-100">
    <div
      ref="resizeTarget1"
      class="w-30 h-30 position-absolute bg-blue min-w-10 min-h-10 max-w-100 left-[30%] max-h-100 top-[30%]"
      @pointerdown.stop.prevent="handleTargetResize"
    />
  </div>
</template>
