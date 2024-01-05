const express = require('express');
const router = express.Router();
const axios = require('axios');
// Define your API key and the base URL for the OpenWeatherMap API
const API_KEY = '45a2a23d23c78dbe34c5fbd75a591573';
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';
const FORECAST_URL = 'http://api.openweathermap.org/data/2.5/forecast';
router.get("/:city", async (req, res) => {
    try {
        // Get the city name from the request query parameters
        const cityName = req.params.city;
    
        // Make the request to the OpenWeatherMap API
        const response = await axios.get(BASE_URL, {
          params: {
            q: cityName,
            appid: API_KEY,
            units: 'metric' // Set the units to metric for Celsius temperature
          }
        });
    
        // Extract the relevant weather data from the response
        const { main, name, coord, weather, visibility, wind, sys, dt } = response.data;
    
        // Prepare the data to be sent in the response
        const weatherData = {
          city: name,
          country: sys.country,
          lat: coord.lat,
          lon: coord.lon,
          ws: wind.speed,
          wd: wind.deg,
          visibility: visibility,
          temperature: main.temp,
          humidity: main.humidity,
          pressure: main.pressure,
          description: weather[0].description,
          sunrise: sys.sunrise,
          sunset:  sys.sunset,
          timestamp: dt
        };
    
        // Send the weather data as the response
        res.json(weatherData);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        res.status(500).json({ error: 'Unable to fetch weather data' });
      }
  });
  router.get("/forecast/:city", async (req, res) => {
    try {
      const cityName = req.params.city;
  
      const response = await axios.get(FORECAST_URL, {
        params: {
          q: cityName,
          appid: API_KEY,
          units: 'metric'
        }
      });
  
      const forecasts = response.data.list.filter((forecast, index) => index % 8 === 0).map(forecast => {
        // const forecasts = response.data.list.map(forecast => {
        return {
          timestamp: forecast.dt,
          temperature: forecast.main.temp,
          description: forecast.weather[0].description,
          humidity: forecast.main.humidity,
          pressure: forecast.main.pressure,
          windSpeed: forecast.wind.speed,
          windDirection: forecast.wind.deg
        };
      });
  
      const weatherData = {
        city: response.data.city.name,
        country: response.data.city.country,
        forecasts: forecasts
      };
  
      res.json(weatherData);
    } catch (error) {
      console.error('Error fetching weather forecast data:', error);
      res.status(500).json({ error: 'Unable to fetch weather forecast data' });
    }
  });
  

module.exports = router; // Export the router