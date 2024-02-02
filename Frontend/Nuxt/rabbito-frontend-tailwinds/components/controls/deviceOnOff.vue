<template>
      <div dense align="center" class="inline-row rounded-md p-4 shadow-md rounded-lg">
        <h3 class="mb-2">{{ deviceName }}</h3>
        <v-row dense>
            <v-col>
                <v-btn class="btnStyle" color="transparent">
                    <select v-model="selectedPayload" class="color-data" aria-label="Action Selection" style="font-size: 13px;">
                      <option v-for="command in payloadOptions" :key="command.value" :value="command.value" class="btn-font">
                        {{ command.label }}
                      </option>
                    </select>
                  </v-btn>
            </v-col>
            <v-col>
                <v-btn class="btnStyle" @click="submitPayload" color="transparent">
                    <h5 class="btn-font"><i class="mdi mdi mdi-keyboard-return" style="font-size: 20px; color:#cffafe;"></i></h5>
                  </v-btn>
            </v-col>
        </v-row>
        </div>
      <!-- <div v-if="apiResponse">
        <h2>API Response:</h2>
        <p>{{ apiResponse }}</p>
      </div> -->
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useEndpoints } from '@/stores/endpoints'; // Adjust the path based on your project structure

  const props = defineProps(['deviceName', 'deviceCommand']);
  const selectedPayload = ref(`${props.deviceCommand}_OFF` || '');
  const payloadOptions = [
    { value: `${props.deviceCommand}_ON`, label: 'Turn ON' },
    { value: `${props.deviceCommand}_OFF`, label: 'Turn OFF' }
  ];
  const apiResponse = ref(null);
  const getUrl = useEndpoints();
   // Find the endpoint with id "EP-02"
  const selectedEndpoint = getUrl.getEndpoints.find(endpoint => endpoint.id === 'EP-01');
  
  const submitPayload = async () => {
    try {
      const apiUrl = `${selectedEndpoint.apiUrl}`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ payload: selectedPayload.value }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // Check if the response is JSON
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const responseData = await response.json();
        apiResponse.value = responseData;
      } else {
        // If not JSON, treat response as plain text
        const plainTextResponse = await response.text();
        apiResponse.value = plainTextResponse;
      }
    } catch (error) {
      console.error('Error posting data to API:', error.message);
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