<template>
    <div>
      <v-row dense class="container mx-auto py-3">
        <v-col v-for="fan in fans" :key="fan.command" class="grid gap-2">
          <ControlStatus :fanName="fan.name" :fanCommand="fan.command" />
        </v-col>
      </v-row>
    </div>
  </template>
  
  <script setup>
  import ControlStatus from './ControlStatus';
  
  const fans = [
    { name: 'Fan 1', command: 'RC-01' },
    { name: 'Fan 2', command: 'RC-02' },
    { name: 'Fan 3', command: 'RC-03' },
    { name: 'Fan 4', command: 'RC-04' },
  ];
  </script>
  