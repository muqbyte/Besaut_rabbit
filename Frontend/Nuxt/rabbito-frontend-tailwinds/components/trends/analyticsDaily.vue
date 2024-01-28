<!-- components/trends/analyticsDaily.vue -->
<template>
    <v-card class="color-card">
      <v-card-text>
        <v-row align="center" class="inline-row">
            <v-col cols="7" class="ml-auto"> <!-- This will push the column to the right -->
                <h3>Please select a station number to generate the chart and data report</h3>
              </v-col>
            <v-col cols="2">
                <v-btn class="btnStyle" color="transparent">
                <select v-model="selectedSensor" class="color-data" aria-label="Sensor Selection" style="font-size: 18px;">
                <option v-for="sensor in sensorOptions" :key="sensor.value" :value="sensor.value" class="btn-font">
                    {{ sensor.label }}</option>
                </select>
                </v-btn>
            </v-col>
          <v-col cols="3">
            <!-- Use v-select to choose between 'Chart' and 'Data Display' with Vuetify classes -->
                <v-select
                v-model="selectedDisplay"
                :items="displayOptions"
                label="Display Type"
                outlined
                dense
                class="btn-font mx-2"
                ></v-select>
          </v-col>
        </v-row>
        <div v-if="loading" class="loading-message">Loading...</div>
        <div v-if="dailyTrends && Array.isArray(dailyTrends)" class="mt-3">
          <h2 class="text-xl font-semibold mb-4">Hourly Data Report for Station {{ selectedSensor }} between 6am to 6pm</h2>
          <!-- Use v-if to conditionally render the selected display type -->
          <template v-if="selectedDisplay === 'Chart'">
            <ChartsLineDaily :chart-data="dailyTrends" />
          </template>
          <template v-else>
            <DataManagementDataFromEndpoint :data="dailyTrends" />
          </template>
        </div>
      </v-card-text>
    </v-card>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue';
  import { useEndpoints } from '@/stores/endpoints'; // Adjust the path based on your project structure

  const loading = ref(false);
  const selectedSensor = ref('RB-01');
  const sensorOptions = [
    { value: 'RB-01', label: 'Station 1' },
    { value: 'RB-02', label: 'Station 2' },
    { value: 'RB-03', label: 'Station 3' },
    { value: 'RB-04', label: 'Station 4' },
  ];
  
  const displayOptions = ['Chart', 'Data Table'];
  const selectedDisplay = ref('Chart'); // Set the default display type
  
  const getUrl = useEndpoints();
  
  // Find the endpoint with id "EP-03"
  const selectedEndpoint = getUrl.getEndpoints.find(endpoint => endpoint.id === 'EP-03');
  
  
  const { data: dailyTrends, error, refresh } = useAsyncData(
    'dailyTrends',
    async () => {
      try {
        // Check if all required input fields are filled
        if (!selectedSensor.value) {
          // Display an error message or handle it according to your UI/UX design
          throw new Error('Please select a sensor.');
        }
  
        // Clear any previous error message
        error.value = null;
  
        const apiUrl = `${selectedEndpoint.apiUrl}${selectedSensor.value}`;
        // console.log(apiUrl)
        const response = await fetch(apiUrl, { method: 'GET' });
        const responseData = await response.json();
  
        // Check if the fetched data is empty or contains an error
        if (!responseData || (responseData.error && !responseData.data)) {
          throw new Error('No data found for the selected sensor.');
        }
  
        // Set the fetched data to dailyTrends
        return responseData;
      } catch (err) {
        // Handle the fetch error
        error.value = err.message;
      } finally {
        // Reset loading state
        loading.value = false;
      }
    }
  );
  
  const loadData = async () => {
    loading.value = true; // Set loading state
    await refresh();
  };
  
  // Watch for changes in selectedSensor and automatically fetch data
  watch(selectedSensor, () => {
    loadData();
  });
  
  onMounted(() => {
    // Auto-fetch data when the component is mounted
    loadData();
  });
  
  </script>
  
  
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');
  
  .color-card {
    background-color: transparent; /* Orange background color for the card */
    color: white; /* White text color for the card */
    padding: 5px; /* Add padding to the card content */
  }
  .color-data {
    color: #00E5FF;
    text-shadow: 1px 0.5px rgb(21, 15, 15);
    font-family: Orbitron, sans-serif;
    font-size: 14px;
    text-align: left;
    font-weight: bold;
    margin: 2px;
  }
  .inline-row {
    display: flex; /* Display columns inline */
    flex-wrap: wrap; /* Wrap columns if necessary */
    justify-content: space-between; /* Space between columns */
    align-items: center; /* Center items vertically */
  }
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
  .success-message {
    font-family: Chakra Petch, sans-serif;
    text-shadow: 1px 1px rgb(21, 15, 15);
    color: #72d676; /* Green color for success message */
    font-weight: bold;
  }
  
  .loading-message {
    color: #FF9800; /* Orange color for loading message */
  }
  
  .error-message {
    color: #F44336; /* Red color for error message */
  }
  .btnStyle {
    border: 1px solid rgb(13, 185, 238);
    }
  .btn-font {
    font-family: Orbitron, sans-serif;
    text-shadow: 1px 1px rgb(21, 15, 15);
    font-size: 14px;
    color: #00E5FF !important;
    }
</style>
    