<template>
    <div class="bg-gray-900 p-2 text-center rounded-lg">
      <v-row dense>
        <v-col cols="8">
          <!-- <SummaryExhaustFan /> -->
          <controls-main-command />
        </v-col>
        <v-col cols="4">
          <!-- <SummaryPumpSweeper /> -->
          <ControlsLightCommand />
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="8">
          <SummaryMainStatus />
        </v-col>
        <v-col cols="4">
          <SummaryLightStatus />
        </v-col>
      </v-row>

      <v-row dense>
        <v-col cols="6">
          <SummaryRecentData />
        </v-col>
        <v-col cols="6">
          <!-- <SummaryLightStatus /> -->
          <SummarySignalRecentData />
        </v-col>
      </v-row>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const temperatureHumidityPoints = ref([
    { id: 1, name: 'Point 1', temperature: 25, humidity: 60 },
    { id: 2, name: 'Point 2', temperature: 24, humidity: 62 },
    { id: 3, name: 'Point 3', temperature: 26, humidity: 59 },
    { id: 4, name: 'Point 4', temperature: 24, humidity: 61 },
  ]);
  
  const ammoniaGasPoints = ref([
    { id: 1, name: 'Point 1', ammoniaLevel: 10 },
    { id: 2, name: 'Point 2', ammoniaLevel: 12 },
    { id: 3, name: 'Point 3', ammoniaLevel: 9 },
    { id: 4, name: 'Point 4', ammoniaLevel: 11 },
  ]);
  
  </script>
  
  <style scoped>
  .mdi-icon {
    font-size: 24px; /* Customize the icon size */
    margin-right: 8px; /* Add spacing if desired */
  }
  .rounded-md {
      border: 1px solid rgb(238, 114, 13);
      color: #eca543 !important;
      text-shadow: 1px 1px rgb(21, 15, 15);
      border-radius: 15px;
      }
  .left {
      height: calc(115vh - 185px) !important;
      padding: 10px;
        }
  .center {
      height: calc(115vh - 185px) !important;
      padding: 10px;
      margin: 0px 0px;
        }
  .right {
      height: calc(112vh - 185px) !important;
      padding: 10px;
      margin: 0px;
        }
  </style>