<template>
    <div>
        <h3 class="main-header mt-2  mb-2" style="text-align: center;">Exhaust Fan (XF) Status </h3>
        <v-row dense class="container mx-auto py-1">
            <v-col v-for="device in devices" :key="device.command" class="grid gap-2">
            <controlStatus :deviceName="device.name" :deviceCommand="device.command" />
            </v-col>
        </v-row>
    </div>
  </template>
  
  <script setup>
  import controlStatus from './controlStatusSmall';
  
  const devices = [
    { name: 'XF1', command: 'RC-11' },
    { name: 'XF2', command: 'RC-12' },
    { name: 'XF3', command: 'RC-13' },
    { name: 'XF4', command: 'RC-14' },
  ];
  </script>
<style scoped>
.main-header {
    font-family: Chakra Petch, sans-serif;
    color: deepskyblue;
    text-align: center;
    text-shadow: 1px 1px black;
    font-size: 16px;
    font-weight: bold;
  }
</style>
  