<template>
    <div>
      <v-row dense class="container mx-auto py-3">
        <v-col v-for="device in devices" :key="device.command" class="grid gap-2">
          <FanControl :deviceName="device.name" :deviceCommand="device.command" />
        </v-col>
      </v-row>
    </div>
  </template>
  
  <script setup>
  import FanControl from './deviceOnOff';
  
  const devices = [
    // { name: 'Ready', command: 'ch1' },
    { name: 'Warn', command: 'ch2' },
    { name: 'AL 1', command: 'ch3' },
    { name: 'AL 2', command: 'ch4' },
  ];
  </script>
  
  
  
  