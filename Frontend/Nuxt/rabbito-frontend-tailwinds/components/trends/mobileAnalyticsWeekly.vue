<!-- components/trends/analyticsWeekly.vue -->
<template>
    <v-card class="color-card">
      <v-card-text>
        <v-row align="center" class="inline-row">
          <v-col cols="8" class="ml-auto"> <!-- Use text-right class for alignment -->
            <h3>Please select a station to generate the chart</h3>
          </v-col>
          <v-col cols="4">
            <select v-model="selectedSensor" class="color-data btn-font"> <!-- Apply button style directly -->
              <option v-for="sensor in sensorOptions" :key="sensor.value" :value="sensor.value">
                {{ sensor.label }}
              </option>
            </select>
          </v-col>
        </v-row>
        <div v-if="loading" class="loading-message">Loading...</div>
        <div v-if="error" class="warning-text blink" style="color: red;">{{ error }}</div>
        <div v-if="dailyTrends && Array.isArray(dailyTrends)" class="mt-3">
          <h2 class="text-xl font-semibold mb-4">Weekly Data Report for Station {{ selectedSensor }}  between 6am to 6pm</h2>
          <ChartsLineMonthly :chart-data="dailyTrends" />
        </div>
      </v-card-text>
    </v-card>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue';
  import { useEndpoints } from '@/stores/endpoints'; // Adjust the path based on your project structure
  
  const loading = ref(false);
  const error = ref(null);
  const selectedSensor = ref('RB-01');
  const sensorOptions = [
    { value: 'RB-01', label: 'S1' },
    { value: 'RB-02', label: 'S2' },
    { value: 'RB-03', label: 'S3' },
    { value: 'RB-04', label: 'S4' },
  ];
  
  const getUrl = useEndpoints();
  
  // Find the endpoint with id "EP-04"
  const selectedEndpoint = getUrl.getEndpoints.find(endpoint => endpoint.id === 'EP-04');
  const { data: dailyTrends, refresh } = useAsyncData(
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
        font-size: 12px;
        font-weight: bold;
    }
    h3 {
      font-family: Orbitron, sans-serif;
      text-shadow: 1px 1px rgb(21, 15, 15);
      color: #00E5FF;
      font-size: 12px;
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
      font-size: 10px;
      color: #00E5FF !important;
      }
    .warning-text {
        font-family: Rubik, sans-serif;
        font-size: 18px;
        margin-bottom: 1px;
        color: #F44336 !important;
        text-shadow: 1px 1px #450a0a;
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
        animation: blink 7s infinite;
      }
  </style>
      