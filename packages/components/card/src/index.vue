<template>
  <div class="text-red">一个卡片组件1</div>
</template>

<script setup lang="ts">
defineOptions({ name: 'XCard' });

defineProps<{
  title?: string;
}>();
</script>

<style scoped>
.text-red {
  width: 100px;
  color: red;
}
</style>
