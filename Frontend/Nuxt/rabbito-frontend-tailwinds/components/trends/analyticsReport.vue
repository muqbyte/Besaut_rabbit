<!-- components/trends/analytics.vue -->
<template>
    <v-card class="color-card">
      <v-card-text>
        <v-row align="center" class="inline-row">
          <v-col cols="3">
            <v-text-field
              class="color-data"
              id="sensorId"
              type="text"
              v-model="sensorId"
              label="Enter Sensor ID"
              aria-label="Sensor ID input"
            />
          </v-col>
          <v-col cols="2">
            <v-text-field
              class="color-data"
              id="fromDate"
              type="date"
              v-model="fromDate"
              label="From Date"
              aria-label="From Date input"
            />
          </v-col>
          <v-col cols="2">
            <v-text-field
              class="color-data"
              id="untilDate"
              type="date"
              v-model="untilDate"
              label="Until Date"
              aria-label="Until Date input"
            />
          </v-col>
          <v-col cols="2">
            <v-btn class="btnStyle" @click="loadData" color="transparent">
              <h5 class="btn-font">Load Data</h5>
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
        <div v-if="dailyTrends && Array.isArray(dailyTrends)">
             <!-- Use v-if to conditionally render the selected display type -->
          <template v-if="selectedDisplay === 'Chart'">
            <ChartsLineMonthly :chart-data="dailyTrends" />
          </template>
          <template v-else>
            <DataManagementDataFromEndpoint :data="dailyTrends" />
          </template>
        </div>
        
      </v-card-text>
    </v-card>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  const sensorId = ref('');
  const fromDate = ref('');
  const untilDate = ref('');
  // Initialize loading with ref
  const loading = ref(false);

  const displayOptions = ['Chart', 'Data Table'];
  const selectedDisplay = ref('Chart'); // Set the default display type

  const { data: dailyTrends, pending, error, refresh } = useAsyncData(
    'dailyTrends',
    async () => {
      try {
        // Check if all required input fields are filled
        if (!sensorId.value || !fromDate.value || !untilDate.value) {
          // Display an error message or handle it according to your UI/UX design
          error.value = 'Please fill in all the required fields.';
          return;
        }
  
        // Clear any previous error message
        error.value = null;
  
        const apiUrl = `http://localhost:7500/api/ranch/analytics/dailyTrends?id=${sensorId.value}&fromDate=${fromDate.value}&untilDate=${untilDate.value}`;
        const response = await fetch(apiUrl, {
          method: 'GET',
        });
  
        const responseData = await response.json();
        console.log('Fetched data:', responseData);
  
        // Check if the fetched data is empty or contains an error
        if (!responseData || (responseData.error && !responseData.data)) {
          // Display an error message or handle it according to your UI/UX design
          error.value = 'No data found for the given input.';
        } else {
          // Set the fetched data to dailyTrends
          return responseData;
        }
      } catch (err) {
        // Handle the fetch error, if any
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
  
  </script>
  
      
    
    <style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap');
    .color-card {
      background-color: transparent; /* Orange background color for the card */
      color: white; /* White text color for the card */
      padding: 5px; /* Add padding to the card content */
    }
    .color-data {
      color: #00E5FF;
      text-shadow: 1px 0.5px rgb(21, 15, 15);
      font-family: Chakra Petch, sans-serif;
      font-size: 14px;
      text-align: left;
      font-weight: bold;
      margin: 2px;
    }
    .title {
      font-size: 24px;
      text-shadow: 1px 0.5px rgb(21, 15, 15);
      font-family: Chakra Petch, sans-serif;
      font-weight: bold;
      color: #E8EAF6;
      margin-bottom: 20px;
  
    }
    
    .inline-row {
      display: flex; /* Display columns inline */
      flex-wrap: wrap; /* Wrap columns if necessary */
      justify-content: space-between; /* Space between columns */
      align-items: center; /* Center items vertically */
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
      font-family: Chakra Petch, sans-serif;
      text-shadow: 1px 1px rgb(21, 15, 15);
      color: #00E5FF !important;
      }
    </style>
    