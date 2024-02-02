<template>
    <div>
      <v-row dense class="container mx-auto py-3">
        <v-col v-for="device in devices" :key="device.command" class="grid gap-2">
          <ControlStatus :deviceName="device.name" :deviceCommand="device.command" />
        </v-col>
      </v-row>
    </div>
  </template>
  
  <script setup>
  import ControlStatus from './ControlStatus';
  
  const devices = [
    { name: 'Fan 1', command: 'RC-11' },
    { name: 'Fan 2', command: 'RC-12' },
    { name: 'Fan 3', command: 'RC-13' },
    { name: 'Fan 4', command: 'RC-14' },
  ];
  </script>
  