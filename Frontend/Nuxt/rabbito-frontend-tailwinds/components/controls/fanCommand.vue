<template>
    <div>
      <v-row dense class="container mx-auto py-1">
        <v-col v-for="device in devices" :key="device.command" class="grid gap-2">
          <FanControl :deviceName="device.name" :deviceCommand="device.command" :deviceIcon="device.icon" />
        </v-col>
      </v-row>
    </div>
  </template>
  
  <script setup>
  import FanControl from './deviceOnOff';
  
  const devices = [
    { name: 'F1', command: 'ch11', icon: 'mdi mdi-fan' },
    { name: 'F2', command: 'ch12', icon: 'mdi mdi-fan' },
    { name: 'F3', command: 'ch13', icon: 'mdi mdi-fan' },
    { name: 'F4', command: 'ch14', icon: 'mdi mdi-fan'},


  ];
  </script>
  
  
  
  