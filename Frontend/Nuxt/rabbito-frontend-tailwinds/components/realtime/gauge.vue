<template>
    <div>
        <v-card-subtitle>
            <h3 bold style="color: deepskyblue; text-align: center; text-shadow: 1px 1px black; font-size: 12px;">{{ title }}</h3>
          </v-card-subtitle>
        <template v-if="!dataLoaded">
            <div class="d-flex justify-center align-center">
              <v-progress-circular indeterminate color="orange" size="128"></v-progress-circular>
            </div>
        </template>
        <template v-else>
      <ChartsGaugeChart :id="generateRandomId()" :data="temperature" :max="max.TMP" :unit="unit.TMP" />
      <v-card-subtitle>
        <v-row dense style="text-align: center;">
          <v-col>
            <v-icon class="mdi-icon" style="color: gold;" big>mdi-water-percent</v-icon>
          </v-col>
          <v-col>
            <h3
              bold class="text-2xl"
              :style="colorStyle(humidity)"
            >{{ humidity }}%</h3>
          </v-col>
        </v-row>
      </v-card-subtitle>
    </template>
    </div>
  </template>
  
  <script setup>  
  const title = 'TH-XX';
//   const temperature = 25; // Provide the actual temperature value
  const max = { TMP: 40, RH: 100 };
  const unit = { TMP: '°C', RH: '%' };

  function generateRandomId() {
    return Math.random().toString(36).substring(2, 10);
  }

  function colorStyle(value) {
    return {
        color: value < 40 ? '#FBC02D' : value > 70 ? '#B388FF' : '#C6FF00',
    };
  }
  const temperature = ref(25); // Initialize temperature with an initial value
  const humidity = ref(53); // Initialize humidity with an initial value
  // Function to update the temperature and humidity value
  function updateTemperature() {
    setInterval(() => {
      temperature.value = generateRandomTemperature();
      humidity.value = generateRandomHumidity();
    }, 3000); // Update every 3 seconds
  }

// Function to generate random temperature and humidity values (for demonstration purposes)
  function generateRandomTemperature() {
  // Replace this with your logic to fetch or calculate temperature data
    return Math.floor(Math.random() * (40 - 20 + 1) + 20); // Generates a random value between 20 and 40
  }
  function generateRandomHumidity() {
  // Replace this with your logic to fetch or calculate temperature data
    return Math.floor(Math.random() * (80 - 50 + 1) + 40); // Generates a random value between 50 and 70
  }
  const dataLoaded = ref(true); // Set dataLoaded to true initially
  onMounted(() => {
  // Start updating the temperature data
    updateTemperature();
  });
</script>
<style scoped>
.mdi-icon {
    font-size: 30px; /* Customize the icon size */
  }
.text-2xl {
    font-family: Chakra Petch, sans-serif;
    text-shadow: 1px 1px 2px rgba(158, 201, 244, 0.5);
    font-size: 20px;
    font-weight: bold;
  }
</style>





  