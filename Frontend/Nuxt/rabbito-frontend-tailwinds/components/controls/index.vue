<template>
  <div class="bg-gray-900 p-2 text-center rounded-lg">
        <controls-main-command />
        <mainStatus />
        <lightStatus />
  </div>
</template>

<script setup>
import mainStatus from '../summary/mainStatus.vue'
import lightStatus from '../summary/lightStatus.vue';
</script>