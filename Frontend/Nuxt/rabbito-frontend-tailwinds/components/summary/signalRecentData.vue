<template>
  <Client-Only>
    <div>
      <v-row dense class="container mx-auto py-3">
        <v-col v-for="station in stations" :key="station.command" class="grid gap-2">
          <signalData :stationName="station.name" :stationCommand="station.command" :icon="station.icon"/>
        </v-col>
      </v-row>
    </div>
    </Client-Only>
  </template>
  
  <script setup>
  import signalData from './signalDataRead';
  
  const stations = [
    { name: 'ST 1', command: 'RB-01', icon: "mdi mdi-chart-donut"},
    { name: 'ST 2', command: 'RB-02', icon: "mdi mdi-chart-donut"},
    { name: 'ST 3', command: 'RB-03', icon: "mdi mdi-chart-donut"},
    { name: 'ST 4', command: 'RB-04', icon: "mdi mdi-chart-donut"},
  ];
  </script>
  