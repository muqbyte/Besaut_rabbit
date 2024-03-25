  <template>
    <Client-Only>
      <div dense align="center" class="inline-row card-color p-4 shadow-md rounded-lg">
        <h3 class="text-xl text-teal-200 font-mono font-semibold">
          <i :class="iconClass" style="font-size: 20px; color:#d8e33c;"></i>
          {{ deviceName }}
        </h3>
        <div v-if="pending">Loading...</div>
        <div v-if="apiResponse" class="mt-1">
          <i :class="statusIconClass(apiResponse.STATUS)" :style="statusTextStyle(apiResponse.STATUS)" class="mdi-icon"></i>
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
.card-color {
    background-color: #09090b;
    border: 1px solid #f59e0b;
    padding: 10px;
    border-radius: 15px;
  }
h3 {
    font-family: Chakra Petch, sans-serif;
    color: deepskyblue;
    text-align: center;
    text-shadow: 1px 1px black;
    font-size: 14px;
    font-weight: bold;
}

.mdi-icon {
    font-size: 25px; /* Customize the icon size */
  }
</style>  