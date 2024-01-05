<template>
    <div>
      <v-row dense class="container mx-auto py-3">
        <v-col v-for="fan in fans" :key="fan.command" class="grid gap-2">
          <FanControl :fanName="fan.name" :fanCommand="fan.command" />
        </v-col>
      </v-row>
    </div>
  </template>
  
  <script setup>
  import FanControl from './fanOnOff';
  
  const fans = [
    { name: 'Exhaust Fan 1', command: 'ch1' },
    { name: 'Exhaust Fan 2', command: 'ch2' },
    { name: 'Exhaust Fan 3', command: 'ch3' },
    { name: 'Exhaust Fan 4', command: 'ch4' },
  ];
  </script>
  
  
  
  