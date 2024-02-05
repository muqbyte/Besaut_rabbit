<template>
    <div>
      <h3 class="main-header mt-2" style="text-align: center;">RSSI and SNR Status </h3>
      <v-row dense class="container mx-auto py-3">
        <v-col v-for="station in stations" :key="station.command" class="grid gap-2">
          <DataPoint :stationName="station.name" :stationCommand="station.command" :icon="station.icon"/>
        </v-col>
      </v-row>
    </div>
  </template>
  
  <script setup>
  import DataPoint from './rssiStatusDataRead.vue';
  
  const stations = [
    { name: 'ST 1', command: 'RB-01', icon: "mdi mdi-chart-donut"},
    { name: 'ST 2', command: 'RB-02', icon: "mdi mdi-chart-donut"},
    { name: 'ST 3', command: 'RB-03', icon: "mdi mdi-chart-donut"},
    { name: 'ST 4', command: 'RB-04', icon: "mdi mdi-chart-donut"},
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