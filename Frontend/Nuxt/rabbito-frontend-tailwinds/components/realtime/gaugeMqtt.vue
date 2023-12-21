<template>
    <div>
        <v-card-subtitle>
            <h3 class="subtitle-text">{{ title }}</h3>
          </v-card-subtitle>
        <template v-if="!dataLoaded">
            <div class="d-flex justify-center align-center">
              <v-progress-circular indeterminate color="orange" size="128"></v-progress-circular>
            </div>
        </template>
        <template v-else>
      <ChartsGaugeChart :id="generateRandomId()" :data="parseFloat(temperature)" :max="max.TMP" :unit="unit.TMP" />
      <v-card-subtitle>
        <v-row dense style="text-align: center;">
          <v-col>
            <v-icon class="mdi-icon" style="color: gold;" big>mdi-water-percent</v-icon>
          </v-col>
          <v-col>
            <h3
              bold class="text-2xl"
              :style="colorStyle(humidity)"
            >{{ humidity }}%</h3>
          </v-col>
        </v-row>
      </v-card-subtitle>
    </template>
    <p>{{ formattedRealTimestamp }}</p>
    </div>
  </template>
  
  <script setup>  
  const title = ref('RB-XX');
  import * as mqtt from 'mqtt/dist/mqtt.min';
  import { formatRealTimestamp } from '../utils/realtimestampFormatter';
  import { useMqttData } from '~/stores/thermalMqttData';
  const mqttDataStore = useMqttData(); // Access the Pinia store
  const max = { TMP: 40, RH: 100 };
  const unit = { TMP: '°C', RH: '%' };
  const timestamp = ref(Date.now());
  const formattedRealTimestamp = ref('');

  function generateRandomId() {
    return Math.random().toString(36).substring(2, 10);
  }

  function colorStyle(value) {
    return {
        color: value < 40 ? '#FBC02D' : value > 70 ? '#B388FF' : '#C6FF00',
    };
  }

  const temperature = ref(''); // Initialize temperature with an initial value
  const humidity = ref(''); // Initialize humidity with an initial value

  const dataLoaded = ref(true); // Set dataLoaded to true initially
  
  // MQTT connection configuration
  const mqttConfig = {
    host: 'zr.txio.live',
    port: 8888,
    path: '/mqtt',
  };
  
  // Data and methods related to MQTT
  const data = ref([]);
  let client = null;
  function createConnection() {
  try {
    client = mqtt.connect(`wss://${mqttConfig.host}:${mqttConfig.port}${mqttConfig.path}`);

    client.on('connect', () => {
      console.log('Connected to MQTT broker');
      doSubscribe();
    });

    client.on('error', (error) => {
      console.log('MQTT connection error:', error);
    });

    client.on('message', (topic, message) => {
      if (topic === 'ea/rabbitranch/s/data') {
        data.value = JSON.parse(message.toString());
        title.value = data.value.station;

        // Parse temperature and humidity as numbers
        const parsedTemperature = parseFloat(data.value.temperature);
        const parsedHumidity = parseFloat(data.value.humidity);

        // Define a function to handle updates for each station
        const updateStationData = (indexStation) => {
          const randData = {
            indexStation: indexStation,
            temperature: parsedTemperature,
            humidity: parsedHumidity,
            SID: title.value,
          };
          mqttDataStore.updateStationsData(randData);
        };

        // Update station data based on title.value
        switch (title.value) {
          case 'RB-01':
            updateStationData(0);
            break;
          case 'RB-02':
            updateStationData(1);
            break;
          case 'RB-03':
            updateStationData(2);
            break;
          case 'RB-04':
            updateStationData(3);
            break;
          default:
            break;
        }
        temperature.value = parsedTemperature;
        humidity.value = parsedHumidity;

        timestamp.value = Date.now();
        formattedRealTimestamp.value = formatRealTimestamp(timestamp.value);
      }
    });
  } catch (error) {
    console.error('Error creating MQTT connection:', error);
  }
  }
  
  function doSubscribe() {
    client.subscribe('ea/#', { qos: 0 }, (error, granted) => {
      if (error) {
        console.error('MQTT subscription error:', error);
      } else {
        // console.log('MQTT subscription success:', granted);
      }
    });
  }
  onMounted(() => {
    createConnection();
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
  }
.text-2xl {
    font-family: Chakra Petch, sans-serif;
    text-shadow: 1px 1px 2px rgba(158, 201, 244, 0.5);
    font-size: 20px;
    font-weight: bold;
  }
</style>





  