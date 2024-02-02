<template>
    <div>
      <v-row dense class="container mx-auto py-3">
        <v-col v-for="device in devices" :key="device.command" class="grid gap-2">
          <deviceControl :deviceName="device.name" :deviceCommand="device.command" />
        </v-col>
      </v-row>
    </div>
  </template>
  
  <script setup>
  import deviceControl from './deviceOnOff';
  
  const devices = [
    { name: 'Cooling Pump', command: 'ch16' },
    { name: 'Sweeper', command: 'ch9' },
  ];
  </script>
  
  
  
  