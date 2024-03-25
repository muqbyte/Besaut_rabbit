<template>
  <div class="container mx-auto">
    <DataPoint :stationName="selectedStation.name" :stationCommand="selectedStation.command" :icon="selectedStation.icon"/>
    <div align="center" justify="center" class="mt-1 rounded-md rounded-lg">
      <v-row dense class="pa-1">
        <v-col v-for="station in stations" :key="station.command">
          <v-btn @click="handleStationClick(station.command)" class="menu-btn">
            <h5>{{ station.name }}</h5>
          </v-btn>
        </v-col>
      </v-row>
    </div>
    <rssiStatusMobile />
  </div>
</template>

<script setup>
import DataPoint from './dataReadMobile';
import rssiStatusMobile from './rssiStatusMobileZero.vue';
import { ref } from 'vue';

const stations = [
  { name: 'ST-1', command: 'RB-01', icon: "mdi mdi-chart-donut"},
  { name: 'ST-2', command: 'RB-02', icon: "mdi mdi-chart-donut"},
  { name: 'ST-3', command: 'RB-03', icon: "mdi mdi-chart-donut"},
  { name: 'ST-4', command: 'RB-04', icon: "mdi mdi-chart-donut"},
];

const selectedStation = ref(stations[0]); // Initialize with the first station

const handleStationClick = (command) => {
  const station = stations.find(station => station.command === command);
  selectedStation.value = station;
};
</script>

<style scoped>
.menu-btn {
  margin: 5px;
  border: 1px solid #f59e0b !important;
  background-color: transparent; 
}
h5 {
  font-family: Rubik, sans-serif;
  font-size: 11px;
  font-weight: bold;
  margin-bottom: 1px;
  color: #55f6f6 !important;
  text-align: center;
  text-shadow: 1px 1px black;
}
.rounded-md {
  color: #eca543 !important;
  text-shadow: 1px 1px rgb(21, 15, 15);
  border-radius: 15px;
  }
</style>
