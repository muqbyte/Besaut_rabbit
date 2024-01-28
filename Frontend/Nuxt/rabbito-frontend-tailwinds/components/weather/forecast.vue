<template>
    <div>
      <h3 v-if="weatherData" class="header">Forecast Weather for 5 Days in {{ weatherData.city }}, {{ weatherData.country }}</h3>
      <v-row v-if="weatherData" dense no-gutters align="center" justify="center" style="max-height: 200px; overflow: auto;">
        <v-col v-for="forecast in weatherData.forecasts" :key="forecast.timestamp" cols="12" sm="3" md="2" lg="2" class="color-data">
          <div class="forecast-item">
            <div>{{ formatTimestamp(forecast.timestamp) }}</div>
            <div><v-icon class="color-icon">{{ getWeatherIcon(forecast.description) }}</v-icon> {{ forecast.description }}</div>
            <div><v-icon class="color-icon">mdi-thermometer</v-icon> {{ forecast.temperature }}°C <v-icon class="color-icon">mdi-water-percent</v-icon> {{ forecast.humidity }}%</div>
            <div><v-icon class="color-icon">mdi-gauge</v-icon> {{ forecast.pressure }} hPa</div>
            <div><v-icon class="color-icon">mdi-compass</v-icon> {{ formatWindDirection(forecast.windDirection) }} <v-icon class="color-icon">mdi-weather-windy</v-icon> {{ forecast.windSpeed }} m/s</div>
          </div>
        </v-col>
      </v-row>
    </div>
  </template>
  
  <script setup>
  import { useEndpoints } from '@/stores/endpoints'; // Adjust the path based on your project structure

  const getUrl = useEndpoints();
  // Find the endpoint with id "EP-02"
  const selectedEndpoint = getUrl.getEndpoints.find(endpoint => endpoint.id === 'EP-09');


  const props = defineProps({
    cityName: String,
  });
  
  const weatherData = ref(null);
  
  const fetchForecastData = async () => {
    try {
      const response = await fetch(`${selectedEndpoint.apiUrl}${props.cityName}`);
      weatherData.value = await response.json();
    } catch (error) {
      console.error('Error fetching weather forecast data:', error);
    }
  };
  
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-MY', { weekday: 'short', month: 'short', day: 'numeric' });
  };
  
  const formatWindDirection = (deg) => {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round((deg % 360) / 45);
    return directions[index];
  };
  
  const getWeatherIcon = (description) => {
    const iconMap = {
      'clear': 'mdi-weather-sunny',
      'rain': 'mdi-weather-rainy',
      'clouds': 'mdi-weather-cloudy',
      // Add more icon mappings for other weather conditions if needed
    };
  
    // Search for specific words in the description to determine the icon
    if (description.includes('clear sky')) {
      return iconMap['clear'];
    } else if (description.includes('rain')) {
      return iconMap['rain'];
    } else if (description.includes('cloud')) {
      return iconMap['clouds'];
    }
  
    // Default icon if no match found
    return 'mdi-weather-sunny';
  };
  
  watch(() => props.cityName, () => {
    fetchForecastData();
  });
  </script>
  
  <style scoped>
  .header {
    color: #72c1f6;
    text-shadow: 1px 1px rgb(21, 15, 15);
    font-size: 16px;
    font-weight: bold;
    font-family: Chakra Petch, sans-serif;
  }
  .forecast-item {
    margin-block: 0.1rem;
    border-radius: 5px;
    background-color: transparent !important;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .color-icon {
    color: #FF7043;
    text-shadow: 1px 0.5px rgb(21, 15, 15);
  }
  .color-data {
    color: #72c1f6;
    text-shadow: 1px 0.5px rgb(21, 15, 15);
    font-family: Chakra Petch, sans-serif;
    font-size: 12px;
    text-align: left;
    font-weight: bold;
    margin: 2px;
  }
  </style>
  