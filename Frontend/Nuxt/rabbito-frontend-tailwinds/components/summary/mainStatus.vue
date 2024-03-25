<template>
    <div>
      <v-row dense class="container mx-auto py-1">
        <v-col v-for="device in devices" :key="device.command" cols="6" sm="6" lg="6">
          <controlStatus :deviceName="device.name" :deviceCommand="device.command" :icon="device.icon"/>
        </v-col>
      </v-row>
    </div>
  </template>
  
  <script setup>
  import controlStatus from './controlStatus';
  
  const devices = [
    // { name: 'Cooling Pump', command: 'RC-16', icon: 'mdi mdi-pump' },
    // { name: 'Sweeper', command: 'RC-09', icon: 'mdi mdi-vacuum-outline' },

    // { name: 'Line 2', command: 'RC-09', icon: 'mdi mdi-vacuum-outline' },
    { name: 'F1', command: 'RC-11', icon: 'mdi mdi-fan' },
    { name: 'F2', command: 'RC-12', icon: 'mdi mdi-fan' },
    { name: 'F3', command: 'RC-13', icon: 'mdi mdi-fan' },
    { name: 'F4', command: 'RC-14', icon: 'mdi mdi-fan' },
    { name: 'CW', command: 'RC-10', icon: 'mdi mdi-vacuum-outline'},
    { name: 'CP', command: 'RC-16', icon: 'mdi mdi-pump' },
    // { name: 'Warning', command: 'RC-02', icon: 'mdi mdi-alert-circle-outline' },
    // { name: 'AL 1', command: 'RC-03', icon: 'mdi mdi-alarm-bell' },
    // { name: 'AL 2', command: 'RC-04', icon: 'mdi mdi-alarm-light' },
  ];
  </script>
  