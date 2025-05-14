<script setup lang="ts">
import GlobalChild from './global-child.vue';
import { globalDynamicComponent } from './use-global';

const { DynamicComponent } = globalDynamicComponent();
</script>

<template>
  <div>
    <GlobalChild />
    <DynamicComponent />
  </div>
</template>
