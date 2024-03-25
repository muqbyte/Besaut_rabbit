<template>
    <div>
        <h3 class="main-header mt-2  mb-2" style="text-align: center;">Operation Status </h3>
        <v-row dense class="container mx-auto py-3">
          <v-col v-for="device in devices" :key="device.command" class="grid gap-2">
            <controlStatus :deviceName="device.name" :deviceCommand="device.command" :icon="device.icon"/>
          </v-col>
        </v-row>
    </div>
  </template>
  
  <script setup>
  import controlStatus from './controlStatusSmall';
  
  const devices = [
    { name: 'CW', command: 'RC-10', icon: 'mdi mdi-vacuum-outline'},
    { name: 'CP', command: 'RC-16', icon: 'mdi mdi-pump' },
    // { name: 'Warning', command: 'RC-02', icon: 'mdi mdi-alert-circle-outline' },
    { name: 'SAL', command: 'RC-03', icon: 'mdi mdi-alarm-bell' },
    { name: 'LAL', command: 'RC-04', icon: 'mdi mdi-alarm-light' },
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
  
  