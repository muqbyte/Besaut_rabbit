<template>
    <Client-Only>
      <div dense align="center" class="inline-row rounded-md p-4 shadow-md rounded-lg">
        <h3 class="text-xl text-teal-200 font-mono font-semibold">
          <i :class="iconClass" style="font-size: 20px; color:#d8e33c;"></i>
          {{ stationName }}
        </h3>
        <div v-if="pending">Loading...</div>
          <div v-if="apiResponse" class="mt-1">
            <v-row dense>
              <v-col v-for="sensorData in apiResponse" :key="sensorData.TYPE" cols="12" sm="6" md="4" lg="6">
                      <p>
                          <i :class="getSensorIcon(sensorData.TYPE)"> </i>
                              {{ sensorData.VALUE }}
                      </p>
                  <!-- </v-col> -->
                  </v-col>
              </v-row>
            <h5><i class="mdi mdi mdi-timelapse"></i> {{ formatTimestamp(apiResponse[0].timestamp) }}</h5>
          </div>
          <div v-else>
            <h5 class="warning-text">System is offline. No data received.</h5>
          </div>
      </div>
    </Client-Only>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useEndpoints } from '@/stores/endpoints'; 
  const props = defineProps(['stationName', 'stationCommand', 'icon']);
  const selectedStation = ref(props.stationCommand);
  const apiResponse = ref(null);
  const getUrl = useEndpoints();
  
  const selectedEndpoint = getUrl.getEndpoints.find(endpoint => endpoint.id === 'EP-12');
  
  const fetchStatus = async () => {
    try {
      if (!selectedEndpoint) {
        console.error('Endpoint with id "EP-12" not found.');
        return;
      }
  
      const apiUrl = `${selectedEndpoint.apiUrl}${selectedStation.value}`;
      const response = await fetch(apiUrl, { method: 'GET' });
  
      const responseData = await response.json();
  
      if (!responseData || (responseData.error && !responseData.data)) {
        console.error('No data found for the given input.');
      } else {
        apiResponse.value = responseData;
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  
  const { pending } = useAsyncData('apiResponse', fetchStatus);
  
  onMounted(async () => {
    await fetchStatus();
    // Set up interval to fetch new data every 20 seconds (adjust as needed)
    setInterval(fetchStatus, 20 * 1000);
  });
  
  const iconClass = `mdi ${props.icon || 'mdi-fan'}`;
  
  
  const getSensorIcon = (type) => {
    switch (type) {
      case 'RSSI':
        return 'mdi mdi-signal-cellular-outline';
      case 'SNR':
        return 'mdi mdi-speedometer';
      default:
        return '';
    }
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

p {
  font-family: Rubik, sans-serif;
  font-size: 16px;
  margin-bottom: 1px;
  color: #43ece6 !important;
}
.warning-text {
  font-family: Rubik, sans-serif;
  font-size: 14px;
  margin-bottom: 1px;
  color: #f87171 !important;
  text-shadow: 1px 1px #450a0a;
}
h5 {
  font-family: Rubik, sans-serif;
  font-size: 14px;
  margin-bottom: 1px;
  color: #eca543 !important;
}
.rounded-md {
  border: 1px solid rgb(13, 178, 238);
  color: #eca543 !important;
  text-shadow: 1px 1px rgb(21, 15, 15);
  border-radius: 15px;
  }
  .mdi-icon {
    font-size: 20px; /* Customize the icon size */
    margin-right: 8px; /* Add spacing if desired */
  }
</style>  