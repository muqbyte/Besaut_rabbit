<template>
    <div class="bg-dark" style="height:320px !important; opacity:0.8;">
      <v-form align="center">
        <v-row align="center">
          <v-col cols="12" sm="6" md="4" lg="3">
            <h3 class="header">Weather Information</h3>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-text-field
              class="color-data"
              v-model="cityName"
              :success="isCityNameValid"
              label="Enter city name"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4" md="2" lg="2">
            <v-btn @click="fetchWeatherData" class="btnStyle" color="transparent">
                <h5 class="btn-font">Get Weather</h5></v-btn>
          </v-col>
        </v-row>
      </v-form>
      <div v-if="loading" class="pa-2">
        <v-card-text class="color-data">Loading...</v-card-text>
      </div>
      
      <div v-else-if="error" class="pa-2">
        <v-card-text class="color-data">{{ error }}</v-card-text>
      </div>
      <div v-else-if="weather" class="pa-2">
        <v-card-text>
          <v-row no-gutters dense>
            <v-col cols="6" sm="6" md="2" lg="2">
                <h5 class="color-data"><v-icon class="color-icon">mdi-map-marker</v-icon>{{ weather.city }}, {{ weather.country }}
                  <!-- <a :href="generateGoogleMapsUrl()" target="_blank" v-show="$vuetify.breakpoint.mdAndUp">[{{ weather.lat }},{{ weather.lon }}]</a> -->
                </h5>
            </v-col>
            <v-col cols="6" sm="6" md="2" lg="2">
              <h5 class="color-data"><v-icon class="color-icon">{{ getWeatherIcon(weather.description) }}</v-icon> {{ weather.description }}</h5>
            </v-col>
            <v-col cols="4" sm="6" md="2" lg="2">
                <h5 class="color-data"><v-icon class="color-icon">mdi-thermometer</v-icon><span class="color-data">Temperature</span> {{ weather.temperature }}°C</h5>
            </v-col>
            <v-col cols="4" sm="6" md="2" lg="2">
                <h5 class="color-data"><v-icon class="color-icon">mdi-water-percent</v-icon><span class="color-data">Humidity</span> {{ weather.humidity }}%</h5>
            </v-col>
            <v-col sm="6" md="2" lg="2">
              <h5 class="color-data">Last Update: {{ formatTimestamp(weather.timestamp) }}</h5>
            </v-col>
            <v-col cols="4" sm="6" md="4" lg="2">
              <v-btn @click="showDetails = !showDetails" class="mb-3 btnStyle"><h5 class="btn-font">Load more</h5>
                <v-icon>{{ showDetails ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <div v-if="showDetails" style="max-height: 145px; overflow: auto;">
            <v-row no-gutters dense>
              <v-col v-for="detail in details" :key="detail.label" cols="6" sm="3" lg="2">
                <div class="columnContent">
                  <h5 class="color-data">{{ detail.label }}</h5>
                  <v-icon class="color-icon">{{ detail.icon }}</v-icon>
                  <h5 class="color-data">{{ detail.value }}</h5>
                </div>
              </v-col>
            </v-row>
              <WeatherForecast :cityName="cityName" />
          </div>
          </v-card-text>
        </div>
        <div v-else class="pa-2">
          <v-card-text class="color-data">No weather data available</v-card-text>
        </div>
        <RealtimeLastSeen/>
    </div>
  </template>
  
  <style scoped>
  .bg-dark {
    background-image: linear-gradient(360deg, rgba(20, 35, 43, 0.9) 0, rgb(243, 248, 250)  100%);
  }
  .color-icon {
    color: #FF7043;
    text-shadow: 1px 1px rgb(21, 15, 15);
  }
  .header {
    color: #72c1f6;
    text-shadow: 1px 1px rgb(21, 15, 15);
    font-size: 18px;
    font-weight: bold;
    font-family: Chakra Petch, sans-serif;
  }
  .columnContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
  }
  .color-data {
    color: #72c1f6;
    text-shadow: 1px 1px rgb(21, 15, 15);
    font-family: Chakra Petch, sans-serif;
    font-size: 14px;
    text-align: center;
    font-weight: bold;
  }
  .color-data input {
    transition: color 0.3s;
  }
  .mt-5 {
    margin-top: 1.25rem;
  }
  .my-3 {
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
  }
  .mb-3 {
    margin-bottom: 0.75rem;
  }
  .columnContent h5 {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  
  .btnStyle {
    border: 1px solid rgb(13, 185, 238);

    }
  .btn-font {
    font-family: Chakra Petch, sans-serif;
    text-shadow: 1px 1px rgb(21, 15, 15);
    color: #00E5FF !important;
    }
  @media (min-width: 600px) {
    .mb-3 {
      margin-bottom: 2.0rem;
    }
  }
  </style>
  
  
  <script setup>  
  const weather = ref(null);
  const loading = ref(false);
  const error = ref(null);
  const cityName = ref('');
  const isCityNameValid = ref(false);
  const showDetails = ref(false);
  const details = ref([]);
  
  const fetchWeatherData = async () => {
    try {
      if (cityName.value.trim() === '') {
        isCityNameValid.value = false;
      } else {
        isCityNameValid.value = true;
  
        loading.value = true;
        // Make a request to the server endpoint that fetches weather data
        const response = await fetch(`http://localhost:5500/api/weather/${cityName.value}`);
        weather.value = await response.json();
        loading.value = false;
        initializeDetails(); // Call the method to initialize details after weather data is available
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      error.value = 'Unable to fetch weather data';
      weather.value = null;
      loading.value = false;
    }
  };
  
  const formatTimestamp = (timestamp) => {
    const utcDate = new Date(timestamp);
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString('en-MY', timestampOptions).toUpperCase();
  };
  
  const timestampOptions = () => {
      return { timeZone: 'Asia/Kuala_Lumpur', timeStyle: 'medium', hour12: false, hourCycle: 'h23' };
  };

  const generateGoogleMapsUrl = () => {
    if (weather.value) {
      const { lat, lon } = weather.value;
      return `https://www.google.com/maps/@${lat},${lon},17.33z?entry=ttu`;
    }
    return ''; // Return an empty string if weather data is not available
  };
  
  const getWeatherIcon = (description) => {
    if (!description) {
          return 'mdi-weather-sunny'; // Default icon if description is undefined
        }
  
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
  
  const initializeDetails = () => {
    if (weather.value) {
      details.value = [
        { label: 'Visibility', icon: 'mdi-eye', value: `${weather.value.visibility} m` },
        { label: 'Pressure', icon: 'mdi-gauge', value: `${weather.value.pressure} hPa` },
        { label: 'Wind Speed', icon: 'mdi-weather-windy', value: `${weather.value.ws} m/s` },
        { label: 'Wind Direction', icon: 'mdi-compass', value: `${weather.value.wd}°` },
        { label: 'Sunrise', icon: 'mdi-weather-sunset-up', value: formatTimestamp(weather.value.sunrise) },
        { label: 'Sunset', icon: 'mdi-weather-sunset-down', value: formatTimestamp(weather.value.sunset) },
      ];
    }
  };
  
  watch(cityName, () => {
    isCityNameValid.value = false;
  });
  
  </script>