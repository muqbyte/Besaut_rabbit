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
    { name: 'L1', command: 'ch1', icon: 'mdi mdi-checkbox-marked-circle-outline' },
    { name: 'L2', command: 'ch2', icon: 'mdi mdi-alert' },
  ];
  </script>
  
  
  
  