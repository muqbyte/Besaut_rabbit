<template>
  <div>
    <div v-if="mqttDataLoaded">
      <h3 class="subtitle-text">Thermal Data</h3>
      <v-row>
        <v-col cols="3" v-for="(station, index) in stations" :key="index">
          <h3 class="subtitle-text">{{ station.name }}</h3>
          <ChartsGaugeChart
            :id="randomizeId()"
            :data="parseFloat(station.SensorData[0].value)"
            :max="max.TMP"
            :unit="unit.TMP"
          />
          <ul>
            <li v-for="(sensor, sensorIndex) in station.SensorData" :key="sensorIndex">
              <template v-if="sensor.type === 'humidity'">
                <v-row dense style="text-align: center;">
                  <v-col cols="5">
                    <v-icon class="mdi-icon" style="color: gold;" big>mdi-water-percent</v-icon>
                  </v-col>
                  <v-col cols="7">
                    <h3 bold class="text-data"
                :style="formatColorStyle(sensor.value)">{{ sensor.value }} {{ sensor.unit }}</h3>
                  </v-col>
                </v-row>
              </template>
            </li>
          </ul>
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
import { formatColorStyle } from '~/utils/dewColorformatter';
import { randomizeId } from '~/utils/randomIdGen';
const max = { TMP: 40, RH: 100 };
const unit = { TMP: '°C', RH: '%' };
const thermalMqttDataStore = useMqttData();

const mqttDataLoaded = computed(() => thermalMqttDataStore.Stations.length > 0);
const stations = ref([]);

// call for sensor data in the store
//{{ station.SensorData[0].type }}: {{ station.SensorData[0].value }} {{ station.SensorData[0].unit }}

onMounted(() => {
  // Populate the stations data once the component is mounted
  stations.value = [...thermalMqttDataStore.Stations];
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
.mdi-icon {
    font-size: 30px; /* Customize the icon size */
    text-shadow: 1px 1px 2px #052e16;
  }
.text-data {
    font-family: Chakra Petch, sans-serif;
    text-shadow: 1px 1px 2px #052e16;
    font-size: 20px;
    font-weight: bold;
  }
</style>
