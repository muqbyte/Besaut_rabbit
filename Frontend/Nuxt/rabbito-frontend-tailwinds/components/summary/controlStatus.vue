<!-- <template>
      <div dense align="center" class="inline-row rounded-md p-4 shadow-md rounded-lg">
        <h3 class="text-xl text-teal-200 font-mono font-semibold">
            <i class="mdi mdi mdi-fan"></i>
            {{ fanName }}
          </h3>
        <div v-if="pending">Loading...</div>
        <div v-if="apiResponse" class="mt-1">
          <i :class="statusIconClass(apiResponse.STATUS)" :style="statusTextStyle(apiResponse.STATUS)" class="mdi-icon"></i>
          <p :style="statusTextStyle(apiResponse.STATUS)">Status: {{ apiResponse.STATUS }}</p>
          <p>Action time: {{ formatTimestamp(apiResponse.timestamp) }}</p>
        </div>
      </div>
  </template> -->
  <template>
    <Client-Only>
      <div dense align="center" class="inline-row rounded-md p-1 shadow-md rounded-lg">
        <h3 class="text-xl text-teal-200 font-mono font-semibold">
          <i :class="iconClass" style="font-size: 20px; color:#d8e33c;"></i>
          {{ deviceName }}
        </h3>
        <div v-if="pending">Loading...</div>
        <div v-if="apiResponse" class="mt-1">
          <i :class="statusIconClass(apiResponse.STATUS)" :style="statusTextStyle(apiResponse.STATUS)" class="mdi-icon"></i>
          <!-- <p :style="statusTextStyle(apiResponse.STATUS)">Status: {{ apiResponse.STATUS }}</p> -->
          <h5><i class="mdi mdi mdi-timelapse"></i> {{ formatTimestamp(apiResponse.timestamp) }}</h5>
        </div>
      </div>
    </Client-Only>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useEndpoints } from '@/stores/endpoints'; // Adjust the path based on your project structure
  const props = defineProps(['deviceName', 'deviceCommand', 'icon']);
  const selectedStation = ref(props.deviceCommand);
  const apiResponse = ref(null);
  const getUrl = useEndpoints();
  
  // Find the endpoint with id "EP-02"
  const selectedEndpoint = getUrl.getEndpoints.find(endpoint => endpoint.id === 'EP-02');
  
  // Function to fetch data from the API endpoint
  const fetchStatus = async () => {
    try {
      if (!selectedEndpoint) {
        console.error('Endpoint with id "EP-02" not found.');
        return;
      }
  
      const apiUrl = `${selectedEndpoint.apiUrl}${selectedStation.value}`;
      const response = await fetch(apiUrl, { method: 'GET' });
  
      const responseData = await response.json();
      // console.log(responseData[0]);
  
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
    // Set up interval to fetch new data every 20 seconds (adjust as needed)
    setInterval(fetchStatus, 20 * 1000);
  });
  
  const statusIconClass = (status) => {
    return status === 'ON' ? 'mdi mdi-power' : 'mdi mdi-power-off';
  };
  const iconClass = `mdi ${props.icon || 'mdi-fan'}`;
  const statusTextStyle = (status) => {
    const textColorStyle = status === 'ON' ? 'color: #22c55e' : 'color: #f59e0b';
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
font-size: 14px;
font-weight: bold;
}

p {
  font-family: Rubik, sans-serif;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 1px;
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
    font-size: 26px; /* Customize the icon size */
    margin-right: 8px; /* Add spacing if desired */
  }
</style>  