<template>
    <div>
        <div v-if="mqttDataLoaded">
            <v-row class="container mx-auto py-3">
            <v-col class="grid grid-cols-4 gap-2">
                <!-- Temperature and Humidity Widgets -->
                <div
                v-for="(station, index) in stations" 
                :key="index"
                class="rounded-md p-4 shadow-md rounded-lg"
              >
                <h4 class="text-xl text-teal-200 font-mono font-semibold">
                  <i class="mdi mdi-chart-donut"></i>
                  {{ station.name }}
                </h4>
                <div>
                  <p bold class="text-data" :style="formatTemperatureColor(station.SensorData[0].value)">
                    <i class="mdi mdi-thermometer" :style="formatTemperatureColor(station.SensorData[0].value)"></i>
                     {{ station.SensorData[0].value }}°C</p>
                  <p bold class="text-data" :style="formatColorStyle(station.SensorData[1].value)">
                    <i class="mdi mdi-water-percent" :style="formatColorStyle(station.SensorData[1].value)"> </i> 
                     {{ station.SensorData[1].value }}%</p>
                </div>
              </div>
            </v-col>
            </v-row>
        </div>
        <div v-else>
            <p>Loading MQTT data...</p>
          </div>
    </div>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue';
import { useMqttData } from '~/stores/thermalMqttData';
import { formatTemperatureColor } from '~/utils/temperatureColorFormatter'
import { formatColorStyle } from '~/utils/dewColorformatter';
const mqttDataStore = useMqttData();

const mqttDataLoaded = computed(() => mqttDataStore.Stations.length > 0);
const stations = ref([]);

onMounted(() => {
  // Populate the stations data once the component is mounted
  stations.value = [...mqttDataStore.Stations];
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');
h4 {
    font-family: Orbitron, sans-serif;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 8px;
  }
p {
    font-family: Rubik, sans-serif;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
}
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
.text-data {
    font-family: Chakra Petch, sans-serif;
    text-shadow: 1px 1px 2px #052e16;
    font-size: 20px;
    font-weight: bold;
  }
</style>