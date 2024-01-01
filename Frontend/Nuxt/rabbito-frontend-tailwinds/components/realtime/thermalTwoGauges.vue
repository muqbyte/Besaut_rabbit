<template>
    <div>
        <div v-if="mqttDataLoaded">
            <h3 class="subtitle-text mb-3">Thermal Data</h3>
            <v-row dense>
                <v-col cols="3" v-for="(station, index) in stations" :key="index">
                    <h3 class="subtitle-text">{{ station.name }}</h3>
                    <ChartsTwoGaugeChart :id="randomizeId()" :dew="parseFloat(station.SensorData[1].value)" :temperature="parseFloat(station.SensorData[0].value)" class="center-gauge" />
                    <v-row dense style="text-align: center;">
                        <v-col cols="6">
                            <h3 bold class="text-data"
                            :style="formatTemperatureColor(station.SensorData[0].value)">{{ station.SensorData[0].value}} °C</h3>
                        </v-col>
                        <v-col cols="6">
                          <h3 bold class="text-data"
                      :style="formatColorStyle(station.SensorData[1].value)">{{ station.SensorData[1].value}} %</h3>
                        </v-col>
                      </v-row>
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
import { randomizeId } from '~/utils/randomIdGen';
import { formatTemperatureColor } from '~/utils/temperatureColorFormatter'
import { formatColorStyle } from '~/utils/dewColorformatter';
const mqttDataStore = useMqttData();

const mqttDataLoaded = computed(() => mqttDataStore.Stations.length > 0);
const stations = ref([]);
// call for sensor data in the store
//{{ station.SensorData[0].type }}: {{ station.SensorData[0].value }} {{ station.SensorData[0].unit }}

onMounted(() => {
  // Populate the stations data once the component is mounted
  stations.value = [...mqttDataStore.Stations];
});
</script>

<style scoped>
.center-gauge {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .subtitle-text {
    font-family: Chakra Petch, sans-serif;
    color: deepskyblue;
    text-align: center;
    text-shadow: 1px 1px black;
    font-size: 20px;
    font-weight: bold;
  }
  .text-data {
    font-family: Chakra Petch, sans-serif;
    text-shadow: 1px 1px 2px #052e16;
    font-size: 20px;
    font-weight: bold;
  }
</style>