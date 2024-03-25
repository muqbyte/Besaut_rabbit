<template>
    <div>
      <v-row dense class="container mx-auto py-1">
        <v-col v-for="device in devices" :key="device.command" class="grid gap-2">
          <deviceControl :deviceName="device.name" :deviceCommand="device.command" :deviceIcon="device.icon"/>
        </v-col>
      </v-row>
    </div>
  </template>
  
  <script setup>
  import deviceControl from './deviceOnOff';
  
  const devices = [
    { name: 'CP', command: 'ch16', icon: 'mdi mdi-pump' },
    { name: 'CW', command: 'ch10', icon: 'mdi mdi-vacuum-outline' },
  ];
  </script>
  
  
  
  