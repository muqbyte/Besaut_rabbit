<template>
  <div>
    <v-row dense class="container mx-auto py-1">
      <v-col v-for="device in devices" :key="device.command" cols="6" sm="6" lg="3">
        <controlStatus :deviceName="device.name" :deviceCommand="device.command" :icon="device.icon"/>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import controlStatus from './controlStatus';

const devices = [
  { name: 'L1', command: 'RC-01', icon: 'mdi mdi-checkbox-marked-circle-outline'},
  { name: 'L2', command: 'RC-02', icon: 'mdi mdi-alert-circle-outline' },
  { name: 'L3', command: 'RC-03', icon: 'mdi mdi-alarm-bell' },
  { name: 'L4', command: 'RC-04', icon: 'mdi mdi-alarm-light' },
];
</script>
