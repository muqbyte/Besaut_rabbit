<template>
  <div style="background-color: #263238; opacity: 0.8;">
    <!-- Content -->
    <realtime-thermal-sensor/>
    <v-row class="container mx-auto py-3">
      <v-col class="grid grid-cols-4 gap-2">
        <!-- Temperature and Humidity Widgets -->
        <div
        v-for="point in temperatureHumidityPoints"
        :key="point.id"
        class="rounded-md"
      >
        <h4 class="text-xl text-teal-200 font-mono font-semibold">
          <i class="mdi mdi-chart-donut"></i>
          {{ point.name }}
        </h4>
        <div>
          <p><i class="mdi mdi-thermometer"></i> Temperature: {{ point.temperature }}°C</p>
          <p><i class="mdi mdi-water-percent"></i> Humidity: {{ point.humidity }}%</p>
        </div>
      </div>

        <!-- Ammonia Gas Widgets -->
        <div v-for="point in ammoniaGasPoints" :key="point.id" class="bg-amber-600 p-2 shadow-md rounded-lg">
          <h2 class="text-xl font-semibold">
            <i class="mdi mdi-meter-gas-outline"></i>
            {{ point.name }}
          </h2>
          <div class="mt-4">
            <p><i class="mdi mdi-chart-bubble"></i> Ammonia Gas Level: {{ point.ammoniaLevel }} ppm</p>
          </div>
        </div>

        <!-- Exhaust Fan Widgets -->
        <div v-for="point in exhaustFanPoints" :key="point.id" class="bg-orange-600 p-4 shadow-md rounded-lg">
          <h2 class="text-xl font-semibold">
            <i class="mdi mdi-fan"></i>
            {{ point.name }}
          </h2>
          <div class="mt-4">
            <i :class="statusIconClass(point.status)" class="mdi-icon"></i>
            <p :style="statusTextStyle(point.status)">Status: {{ point.status }}</p>
          </div>
        </div>
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

const exhaustFanPoints = ref([
  { id: 1, name: 'Fan 1', status: 'On' },
  { id: 2, name: 'Fan 2', status: 'Off' },
  { id: 3, name: 'Fan 3', status: 'On' },
  { id: 4, name: 'Fan 4', status: 'Off' },
]);

const statusIconClass = (status) => {
  return status === 'On' ? 'mdi mdi-power' : 'mdi mdi-power-off';
};

const statusTextStyle = (status) => {
  const textColorStyle = status === 'On' ? 'color: green' : 'color: orange';
  return textColorStyle;
};
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
