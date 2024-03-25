<template>
    <div>
      <v-row dense class="container mx-auto py-1">
        <v-col v-for="device in devices" :key="device.command" class="grid gap-2">
          <deviceControl :deviceName="device.name" :deviceCommand="device.command" :deviceIcon="device.icon" />
        </v-col>
      </v-row>
    </div>
  </template>
  
  <script setup>
  import deviceControl from './deviceOnOff';
  
  const devices = [
    { name: 'L3', command: 'ch3', icon: 'mdi mdi-alarm-bell' },
    { name: 'L4', command: 'ch4', icon: 'mdi mdi-alarm-light' },
  ];
  </script>
  
  
  
  