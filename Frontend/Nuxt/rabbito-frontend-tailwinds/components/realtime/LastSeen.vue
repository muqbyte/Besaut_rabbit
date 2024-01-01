<template>
    <div class="p-4">
      <table class="w-full table-fixed bg-blue-900 text-white">
        <thead>
          <tr>
            <th class="w-1/4 text-center text-sm font-semibold py-2">SID</th>
            <th class="w-1/4 text-center text-sm font-semibold py-2">TMP</th>
            <th class="w-1/4 text-center text-sm font-semibold py-2">RH</th>
            <th class="w-1/4 text-center text-sm font-semibold py-2">Last Update</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(datum, index) in data"
            :key="datum.SID"
            :class="{ 'bg-gray-200': index % 2 === 0 }"
          >
            <td class="text-center py-2">{{ datum.SID }}</td>
            <td
              class="text-center py-2"
              :class="{
                'text-blue-300': datum.TMP < 22,
                'text-red-500': datum.TMP > 27,
                'text-yellow-300': datum.TMP >= 22 && datum.TMP <= 27
              }"
            >
              {{ datum.TMP }}°C
            </td>
            <td
              class="text-center py-2"
              :class="{
                'text-yellow-300': datum.RH < 40,
                'text-blue-500': datum.RH > 70,
                'text-green-400': datum.RH >= 40 && datum.RH <= 70
              }"
            >
              {{ datum.RH }}%
            </td>
            <!-- <td class="text-center py-2 blinking">{{ formatTimestamp(datum.timestamp) }}</td> -->
            <td class="text-center py-2 blinking">{{ formatTimestamp(datum.timestamp) }}</td>

          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import * as mqtt from 'mqtt/dist/mqtt.min';
  import { formatTimestamp } from '~/utils/databaseTimestampFormatter';
  
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
    client = mqtt.connect(`wss://${mqttConfig.host}:${mqttConfig.port}${mqttConfig.path}`);
    
    client.on('connect', () => {
      console.log('Connected to MQTT broker');
      doSubscribe();
    });
    
    client.on('error', (error) => {
      console.log('MQTT connection error:', error);
    });
    
    client.on('message', (topic, message) => {
      if (topic === 'ea/tuah/s/lastseen') {
        data.value = JSON.parse(message.toString());
        console.log(data.value);
      }
    });
  }
  
  function doSubscribe() {
    client.subscribe('ea/#', { qos: 0 }, (error, granted) => {
      if (error) {
        console.error('MQTT subscription error:', error);
      } else {
        console.log('MQTT subscription success:', granted);
      }
    });
  }
  
//   function formatTimestamp(timestamp) {
//     const utcDate = new Date(timestamp);
//     const malaysiaTimezoneOffset = 8;
//     const malaysiaDate = new Date(utcDate.getTime() - malaysiaTimezoneOffset * 60 * 60 * 1000);
//     return malaysiaDate.toLocaleString('en-MY', timestampOptions()).toUpperCase();
//   }
  
//   const timestampOptions = () => {
//     return { timeZone: 'Asia/Kuala_Lumpur', timeStyle: 'medium', hour12: false, hourCycle: 'h23' };
//   };
  
  // Create the MQTT connection when the component is mounted
  import { onMounted } from 'vue';
  
  onMounted(() => {
    createConnection();
  });
  </script>
  