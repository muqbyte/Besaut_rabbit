<template>
    <div class="mt-5">
      <div v-if="mqttDataLoaded">
        <h3 class="subtitle-text mb-3">Ammonia Level</h3>
        <v-row>
          <v-col cols="3" v-for="(station, index) in stations" :key="index">
            <h3 class="subtitle-text">{{ station.name }}</h3>
            <ChartsGaugeChart
              :id="randomizeId()"
              :data="parseFloat(station.SensorData[0].value)"
              :max="max.PPM"
              :unit="unit.PPM"
            />
          </v-col>
        </v-row>
      </div>
      <div v-else>
        <p>Loading data...</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';

  import { randomizeId } from '~/utils/randomIdGen';
  const max = { TMP: 40, RH: 100, PPM: 500 };
  const unit = { TMP: '°C', RH: '%', PPM: 'ppm' };
  import { useAmmoniaMqttData } from '~/stores/ammoniaMqttData';
  const ammoniaDataStore = useAmmoniaMqttData(); 
  const mqttDataLoaded = computed(() => ammoniaDataStore.Stations.length > 0);
  const stations = ref([]);
  
  // call for sensor data in the store
  //{{ station.SensorData[0].type }}: {{ station.SensorData[0].value }} {{ station.SensorData[0].unit }}
  
  onMounted(() => {
    // Populate the stations data once the component is mounted
    stations.value = [...ammoniaDataStore.Stations];
  });
  
  </script>
  
  <style scoped>
  .subtitle-text {
      font-family: Chakra Petch, sans-serif;
      color: deepskyblue;
      text-align: center;
      text-shadow: 1px 1px black;
      font-size: 20px;
      font-weight: bold;
    }
  </style>
  