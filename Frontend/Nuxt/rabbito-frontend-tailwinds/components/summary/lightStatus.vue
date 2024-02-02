<template>
  <div>
    <v-row dense class="container mx-auto py-3">
      <v-col v-for="device in devices" :key="device.command" class="grid gap-2">
        <ControlStatus :deviceName="device.name" :deviceCommand="device.command" :icon="device.icon"/>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import ControlStatus from './ControlStatus';

const devices = [
  { name: 'WL', command: 'RC-02', icon: 'mdi mdi-alert-circle-outline' },
  { name: 'AL 1', command: 'RC-03', icon: 'mdi mdi-alarm-bell' },
  { name: 'AL 2', command: 'RC-04', icon: 'mdi mdi-alarm-light' },
];
</script>
