<template>
      <div class="bg-gray-900 rounded-lg opacity-85">
        <div class="flex flex-wrap">
        <div
            class="w-8/12 md:w-2/3 columnBorder"
          >
            <RealtimeThermalTwoGauges/>
            <RealtimeAmmoniaSensor/>
            <!-- <RealtimeThermalSensor /> -->
          </div>
          <div
            class="w-4/12 md:w-1/3 columnBorder"
          >
            <TrendsNonComplianceCount/>
            <SummaryExhaustFanSmall />
            <SummarySignalStrength/>
          </div>
        </div>
      </div>
  </template>
  
  
  
  <script setup>  
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  
  // Access the Utility function timeFormatter
  import { formatRealTimestamp } from '../utils/realtimestampFormatter';
  const formattedRealTimestamp = ref('');
  const timestamp = ref(Date.now());
  
  // Access the Pinia store
  import { useMqttData } from '~/stores/thermalMqttData';
  const mqttDataStore = useMqttData(); 
  
  import { useAmmoniaMqttData } from '~/stores/ammoniaMqttData';
  const ammoniaDataStore = useAmmoniaMqttData(); 
  
  // import { useSummaryData } from '~/stores/summaryData';
  // const summaryDataStore = useSummaryData();
  // const chartData = summaryDataStore.getChartData;
  
  // Handle Screen layout (similar to media query)
  const isMediumScreen = ref(false);
  
  const handleResize = () => {
    isMediumScreen.value = window.innerWidth >= 768;
  };
  
  // MQTT connection configuration
  import * as mqtt from 'mqtt/dist/mqtt.min';
  const title = ref('RB-XX');
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
      const parsedRSSI =  Math.round(data.value.rssi);
      const parsedSNR =  Math.round(data.value.snr);
  
      // Define a function to handle updates for each station
      const updateStationData = (indexStation) => {
        const randData = {
          indexStation: indexStation,
          temperature: parsedTemperature,
          humidity: parsedHumidity,
          rssi: parsedRSSI,
          snr: parsedSNR,
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
      timestamp.value = Date.now();
      formattedRealTimestamp.value = formatRealTimestamp(timestamp.value);
    }
    if (topic === 'ea/rabbitranch/s/data/nh3') {
      data.value = JSON.parse(message.toString());
      title.value = data.value.station;
  
      // Parse ammonia, rssi, and snr as numbers
      const parsedAmmonia = parseFloat(data.value.ammonia);
      const parsedRSSI =  Math.round(data.value.rssi);
      const parsedSNR =  Math.round(data.value.snr);
      // Define a function to handle updates for each station
      const updateAmmoniaStationsData = (indexStation) => {
        const randData = {
          indexStation: indexStation,
          ammonia: parsedAmmonia,
          rssi: parsedRSSI,
          snr: parsedSNR,
          SID: title.value,
        };
        ammoniaDataStore.updateAmmoniaStationsData(randData);
      };
  
      // Update station data based on title.value
      switch (title.value) {
        case 'RB-01':
        updateAmmoniaStationsData(0);
          break;
        case 'RB-02':
        updateAmmoniaStationsData(1);
          break;
        case 'RB-03':
        updateAmmoniaStationsData(2);
          break;
        case 'RB-04':
        updateAmmoniaStationsData(3);
          break;
        default:
          break;
      }
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
  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize);
  });
  onMounted(() => {
  createConnection();
  handleResize();
    window.addEventListener('resize', handleResize);
  });  
  </script>
  <style scoped>
  .columnBorder {
    border: 1px solid #f59e0b;
    padding: 10px;
    border-radius: 10px;
  }
  </style>
  