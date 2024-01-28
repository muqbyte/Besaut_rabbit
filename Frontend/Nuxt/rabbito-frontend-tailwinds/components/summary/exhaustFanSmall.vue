<template>
    <div>
        <h3 class="main-header mt-5" style="text-align: center;">Exhaust Fan Status </h3>
        <v-row dense class="container mx-auto py-1">
            <v-col v-for="fan in fans" :key="fan.command" class="grid gap-2">
            <ControlStatus :fanName="fan.name" :fanCommand="fan.command" />
            </v-col>
        </v-row>
    </div>
  </template>
  
  <script setup>
  import ControlStatus from './ControlStatusSmall';
  
  const fans = [
    { name: 'Fan 1', command: 'RC-01' },
    { name: 'Fan 2', command: 'RC-02' },
    { name: 'Fan 3', command: 'RC-03' },
    { name: 'Fan 4', command: 'RC-04' },
  ];
  </script>
<style scoped>
.main-header {
    font-family: Chakra Petch, sans-serif;
    color: deepskyblue;
    text-align: center;
    text-shadow: 1px 1px black;
    font-size: 18px;
    font-weight: bold;
  }
</style>
  