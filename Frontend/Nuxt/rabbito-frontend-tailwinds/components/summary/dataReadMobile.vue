<template>
    <Client-Only>
      <div dense align="center" class="inline-row rounded-md rounded-lg">
        <h3 class="text-xl text-teal-200 font-mono font-semibold">
          <i :class="iconClass" style="font-size: 20px; color:#d8e33c;"></i>
          {{ stationName }}
        </h3>
        <div v-if="pending">Loading...</div>
        <div v-else-if="apiResponse" class="mt-1">
            <ChartsGaugeMobile
              :id="randomizeId()"
              :data="parseFloat(TMPData)"
              :max="max.TMP"
              :unit="unit.TMP"
            />
            <v-row>
                <v-col cols="6">
                    <i class="mdi-icon mdi mdi-water-percent"></i>
                    <h3 :style="dewFormatColorStyle(RHData)">{{ RHData }} {{ unit.RH }}</h3>
                </v-col>
                <v-col cols="6">
                    <i class="mdi-icon mdi mdi-chemical-weapon"></i>
                    <h3 :style="nh3FormatColorStyle(NH3Data)">{{ NH3Data }} {{ unit.NH3 }}</h3>
                </v-col>
            </v-row>
            <div class="mt-2 blink">
                <h5><i class="mdi mdi mdi-timelapse"></i> {{ formatTimestamp(timestampData) }}</h5>
            </div>
        </div>
        <div v-else>
          <h5 class="warning-text blink">System is offline. Check connection.</h5>
        </div>
      </div>
    </Client-Only>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue';
  import { useEndpoints } from '@/stores/endpoints'; 
  import { randomizeId } from '~/utils/randomIdGen';
  const max = { TMP: 40, RH: 100, PPM: 100 };
  const unit = { TMP: '°C', RH: '%', PPM: 'ppm' };
  import { formatTimestamp } from '../../utils/generalTimeFormatter.js';
  
  const props = defineProps(['stationName', 'stationCommand', 'icon']);
  const selectedStation = ref(props.stationCommand);
  const apiResponse = ref(null);
  const getUrl = useEndpoints();
  
  const TMPData = ref([]);
  const RHData = ref([]);
  const NH3Data = ref([]);
  const timestampData = ref([]);

  // const selectedEndpoint = getUrl.getEndpoints.find(endpoint => endpoint.id === 'EP-17');
  
  // const fetchStatus = async () => {
  // try {
  // if (!selectedEndpoint) {
  //        console.error('Endpoint with id "EP-10" not found.');
  //        return;
  //      }
  
  //      const apiUrl = `${selectedEndpoint.apiUrl}${selectedStation.value}`;
  //      const response = await fetch(apiUrl, { method: 'GET' });
  
  //      const responseData = await response.json();
  //    //   console.log(responseData.TMP[0].timestamp);
  //      TMPData.value = responseData.TMP[0].VALUE;
  //      RHData.value = responseData.RH[0].VALUE;
  //      timestampData.value = responseData.TMP[0].timestamp;

  //      if (!responseData || (responseData.error && !responseData.data)) {
  //        console.error('No data found for the given input.');
  //      } else {
  //        apiResponse.value = responseData;
  //      }
  //    } catch (err) {
  //      console.error(err.message);
  //    }
  //  };
  const fetchStatus = async () => {
    try {
        const endpointThermal = getUrl.getEndpoints.find(endpoint => endpoint.id === 'EP-10');
        const endpointNH3 = getUrl.getEndpoints.find(endpoint => endpoint.id === 'EP-15');

        if (!endpointThermal || !endpointNH3) {
            console.error('One or more endpoints not found.');
            return;
        }

        const apiUrlThermal = `${endpointThermal.apiUrl}${selectedStation.value}`;
        const apiUrlNH3 = `${endpointNH3.apiUrl}${selectedStation.value}`;

        const [responseThermal, responseNH3] = await Promise.all([
            fetch(apiUrlThermal, { method: 'GET' }),
            fetch(apiUrlNH3, { method: 'GET' })
        ]);

        const [responseDataThermal, responseDataNH3] = await Promise.all([
              responseThermal.json(),
              responseNH3.json()
          ]);

          console.log('Response Data Thermal:', responseDataThermal);
          console.log('Response Data NH3:', responseDataNH3);

          TMPData.value = responseDataThermal.length > 0 ? responseDataThermal.find(item => item.TYPE === 'TMP').VALUE : null;
          RHData.value = responseDataThermal.length > 0 ? responseDataThermal.find(item => item.TYPE === 'RH').VALUE : null;
          NH3Data.value = responseDataNH3.NH3.length > 0 ? responseDataNH3.NH3[0].VALUE : null;
          timestampData.value = responseDataThermal.length > 0 ? responseDataThermal[0].timestamp : null; // Use timestamp from the first element

        if (responseThermal.ok && responseNH3.ok) {
            apiResponse.value = { TMP: responseDataThermal, NH3: responseDataNH3 };
        } else {
            console.error('One or more requests failed.');
        }
    } catch (err) {
        console.error(err.message);
    }
  };
  // Use watch to trigger fetchStatus when stationCommand changes
  watch(() => props.stationCommand, async () => {
    selectedStation.value = props.stationCommand;
    await fetchStatus();
  });
  const { pending } = useAsyncData('apiResponse', fetchStatus);
  
  onMounted(async () => {
    await fetchStatus();
    // Set up interval to fetch new data every 20 seconds (adjust as needed)
    setInterval(fetchStatus, 10 * 1000);
  });
  
  const iconClass = `mdi ${props.icon || 'mdi-fan'}`;
  
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
font-size: 16px;
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
  color: #eca543 !important;
  text-shadow: 1px 1px rgb(21, 15, 15);
  border-radius: 15px;
  }
  .mdi-icon {
    font-size: 26px; /* Customize the icon size */
    margin-right: 8px; /* Add spacing if desired */
    color:#d8e33c;
  }
  @keyframes blink {
    0%, 50%, 100% {
      opacity: 1;
    }
    25%, 75% {
      opacity: 0;
    }
  }
  
  .blink {
    animation: blink 4s infinite;
  }
</style>  

<!-- 
    const fetchStatus = async () => {
    try {
        const endpointTMP = getUrl.getEndpoints.find(endpoint => endpoint.id === 'EP-13');
        const endpointRH = getUrl.getEndpoints.find(endpoint => endpoint.id === 'EP-14');
        const endpointNH3 = getUrl.getEndpoints.find(endpoint => endpoint.id === 'EP-15');

        if (!endpointTMP || !endpointRH || !endpointNH3) {
            console.error('One or more endpoints not found.');
            return;
        }

        const apiUrlTMP = `${endpointTMP.apiUrl}${selectedStation.value}`;
        const apiUrlRH = `${endpointRH.apiUrl}${selectedStation.value}`;
        const apiUrlNH3 = `${endpointNH3.apiUrl}${selectedStation.value}`;

        const [responseTMP, responseRH, responseNH3] = await Promise.all([
            fetch(apiUrlTMP, { method: 'GET' }),
            fetch(apiUrlRH, { method: 'GET' }),
            fetch(apiUrlNH3, { method: 'GET' })
        ]);

        const [responseDataTMP, responseDataRH, responseDataNH3] = await Promise.all([
            responseTMP.json(),
            responseRH.json(),
            responseNH3.json()
        ]);

        TMPData.value = responseDataTMP.TMP[0].VALUE;
        RHData.value = responseDataRH.RH[0].VALUE;
        NH3Data.value = responseDataNH3.NH3[0].VALUE;
        timestampData.value = responseDataRH.RH[0].timestamp; // Use timestamp from RH endpoint

        if (responseTMP.ok && responseRH.ok && responseNH3.ok) {
            apiResponse.value = { TMP: responseDataTMP, RH: responseDataRH, NH3: responseDataNH3 };
        } else {
            console.error('One or more requests failed.');
        }
    } catch (err) {
        console.error(err.message);
    }
  };
 -->