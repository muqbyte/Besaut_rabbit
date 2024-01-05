<template>
    <client-only>
      <div dense align="center" class="inline-row rounded-md p-4 shadow-md rounded-lg">
        <h4 class="text-xl text-teal-200 font-mono font-semibold">
            <i class="mdi mdi mdi-fan"></i>
            {{ fanName }}
          </h4>
        <!-- <h3 class="mb-2">{{ fanName }}</h3> -->
        <!-- <p>Received fanCommand: {{ fanCommand }}</p> -->
        <div v-if="pending">Loading...</div>
        <div v-if="apiResponse" class="mt-4">
          <i :class="statusIconClass(apiResponse.STATUS)" :style="statusTextStyle(apiResponse.STATUS)" class="mdi-icon"></i>
          <p :style="statusTextStyle(apiResponse.STATUS)">Status: {{ apiResponse.STATUS }}</p>
          <p>Action time: {{ formatTimestamp(apiResponse.timestamp) }}</p>
        </div>
      </div>
    </client-only>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { formatTimestamp } from '../utils/databaseTimestampFormatter';
  
  const props = defineProps(['fanName', 'fanCommand']);
  const selectedStation = ref(props.fanCommand);
  const apiResponse = ref(null);
  
  const fetchStatus = async () => {
    try {
      const apiUrl = `http://localhost:7500/api/ranch/command/status?id=${selectedStation.value}`;
      const response = await fetch(apiUrl, { method: 'GET' });
  
      const responseData = await response.json();
        console.log(responseData[0])
      if (!responseData || (responseData.error && !responseData.data)) {
        console.error('No data found for the given input.');
      } else {
        apiResponse.value = responseData[0];
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  
  const { pending } = useAsyncData('apiResponse', fetchStatus);
  
  onMounted(async () => {
    await fetchStatus();
    // Set up interval to fetch new data every 5 minutes (adjust as needed)
    setInterval(fetchData, 20 * 1000);
  });
  
  const statusIconClass = (status) => {
    return status === 'ON' ? 'mdi mdi-power' : 'mdi mdi-power-off';
  };
  
  const statusTextStyle = (status) => {
    const textColorStyle = status === 'ON' ? 'color: #16a34a' : 'color: #a3a3a3';
    return textColorStyle;
  };
  </script>
    
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');

h2 {
  color: #d8e33c;
  font-family: Orbitron, sans-serif;
  text-shadow: 1px 1px rgb(21, 15, 15);
  font-size: 20px;
  font-weight: bold;
}
h3 {
font-family: Orbitron, sans-serif;
text-shadow: 1px 1px rgb(21, 15, 15);
color: #00E5FF;
font-size: 18px;
font-weight: bold;
}
.color-data {
  color: #00E5FF;
  text-shadow: 1px 0.5px rgb(21, 15, 15);
  font-family: Orbitron, sans-serif;
  font-size: 12px;
  text-align: left;
  font-weight: bold;
}
.rounded-md {
  border: 1px solid rgb(13, 178, 238);
  color: #eca543 !important;
  text-shadow: 1px 1px rgb(21, 15, 15);
  border-radius: 15px;
  }
.btnStyle {
  border: 1px solid rgb(13, 185, 238);
  }

.btn-font {
  font-family: Orbitron, sans-serif;
  text-shadow: 1px 1px rgb(21, 15, 15);
  font-size: 12px;
  color: #00E5FF !important;
  font-weight: bold;
  }
</style>  