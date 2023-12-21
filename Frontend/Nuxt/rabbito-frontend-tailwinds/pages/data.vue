<template>
    <v-card class="color-card">
      <v-card-title>
        <h1 class="title">Data from Endpoint</h1>
      </v-card-title>
      <v-card-text>
        <v-row align="center" class="inline-row">
          <v-col>
            <v-text-field
              class="color-data"
              id="endpointInput"
              type="text"
              v-model="endpoint"
              @keyup.enter="loadData"
              label="Enter endpoint URL"
              aria-label="Endpoint URL input"
            />
          </v-col>
          <v-col>
            <v-btn class="btnStyle" @click="loadData"  color="transparent">
                <h5 class="btn-font">Load Data</h5></v-btn>
          </v-col>
          <v-col>
            <div v-if="ambience">
              <p class="success-message">Load Successful</p>
            </div>
            <div v-if="pending" class="loading-message">Loading Data...</div>
          </v-col>
        </v-row>
        <div v-if="error" class="error-message">{{ error.message }}</div>
        <DataManagementDataFromEndpoint :data="ambience" />
      </v-card-text>
    </v-card>
  </template>
  
  <style scoped>
  .color-card {
    background-color: transparent; /* Orange background color for the card */
    color: white; /* White text color for the card */
    padding: 5px; /* Add padding to the card content */
  }
  .color-data {
    color: #00E5FF;
    text-shadow: 1px 0.5px rgb(21, 15, 15);
    font-family: Chakra Petch, sans-serif;
    font-size: 12px;
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
    
  <script setup>
  const endpoint = ref('');
  const defaultEndpoint = 'https://nr.txio.live/ambience/now';
  const { data: ambience, pending, error, refresh } = useAsyncData(
    'ambience',
    async () => {
      const endpointToUse = endpoint.value.trim() || defaultEndpoint;
      try {
        const responseData = await fetch(endpointToUse, {
          method: 'GET',
        }).then((response) => response.json());
        console.log('Fetched data:', responseData);
        return responseData;
      } catch (err) {
        throw new Error(err.message);
      }
    }
  );
  
  const loadData = async () => {
    pending.value = true;
    await refresh();
  };
  </script>
  
  