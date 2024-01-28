<template>
  <div>
    <div v-if="mqttDataLoaded">
      <h3 class="main-header mt-2" style="text-align: center;">Transmission Strength and Noise Ratio </h3>
      <v-row dense class="mt-1 mb-2">
        <v-col cols="3" v-for="(station, index) in thermalStations" :key="index">
          <v-card class="card-color">
          <h3 class="mb-1 header-text">{{ station.name }} </h3>
          <h6 class="subtitle-text">RSSI: {{station.SensorData[2].value}}</h6>
          <h6 class="subtitle-text">SNR: {{station.SensorData[3].value}}</h6>
        </v-card>
        </v-col>
      </v-row>
        <!-- <v-row dense class="mt-2 mb-2">
          <v-col cols="3" v-for="(station, index) in ammoniaStations" :key="index">
            <v-card class="card-color">
            <h3 class="mb-1 header-text">{{ station.name }} </h3>
            <h6 class="subtitle-text">RSSI: {{station.SensorData[1].value}}</h6>
            <h6 class="subtitle-text">SNR: {{station.SensorData[2].value}}</h6>
          </v-card>
          </v-col>
        </v-row> -->
    </div>
    <div v-else>
      <p>Loading data...</p>
    </div>
  </div>
</template>



<script setup>
import { useMqttData } from '~/stores/thermalMqttData';
import { useAmmoniaMqttData } from '~/stores/ammoniaMqttData';
import { ref, computed, onMounted } from 'vue';
const thermalDataStore = useMqttData(); 
const ammoniaDataStore = useAmmoniaMqttData(); 
const mqttDataLoaded = computed(() => ammoniaDataStore.Stations.length > 0);
const thermalStations = ref([]);
const ammoniaStations = ref([]);
  
onMounted(() => {
  ammoniaStations.value = [...ammoniaDataStore.Stations];
  thermalStations.value = [...thermalDataStore.Stations];
  console.log(ammoniaStations.value);
});

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
.card-color {
  background-color: #cbfcfa;
  border: 1px solid #f59e0b;
  padding: 10px;
  border-radius: 15px;
}
.header-text {
  font-family: Chakra Petch, sans-serif;
  color: deepskyblue;
  text-align: center;
  text-shadow: 1px 1px black;
  font-size: 14px;
  font-weight: bold;
}
.subtitle-text {
  font-family: Chakra Petch, sans-serif;
  color: #78b89b;
  text-align: center;
  text-shadow: 1px 1px black;
  font-size: 12px;
  font-weight: bold;
}
</style>