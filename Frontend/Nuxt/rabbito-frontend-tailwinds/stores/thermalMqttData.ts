// /stores/mqttData.ts

// import { defineStore } from 'pinia';

// Define a type or interface for the payload
interface UpdateStationsPayload {
    temperature: number;
    humidity: number;
    rssi: number;
    snr: number;
    SID: string;
    indexStation: number;
  }
  
  export const useMqttData = defineStore('mqttData', {
    state: () => ({
      Stations: Array.from({ length: 4 }, (_, index) => ({
        name: `RB-${index + 1}`,
        SensorData: [
          { type: 'temperature', value: 25, unit: '°C' },
          { type: 'humidity', value: 70, unit: '%' },
          { type: 'rssi', value: -100, unit: '°C' },
          { type: 'snr', value: 0, unit: '%' },
        ],
      })),
    }),
    actions: {
      updateStationsData(payload: UpdateStationsPayload) {
        const { temperature, humidity, rssi, snr, SID, indexStation } = payload;
  
        if (
          indexStation >= 0 &&
          indexStation < this.Stations.length
        ) {
          // Log the update
          console.log(`Updating station ${indexStation}:`);
          console.log(`  Temperature: ${temperature}`);
          console.log(`  Humidity: ${humidity}`);
          console.log(`  rssi: ${rssi}`);
          console.log(`  snr: ${snr}`);
          console.log(`  SID: ${SID}`);
          
          // Update the sensor data
          const station = this.Stations[indexStation];
          station.SensorData[0].value = temperature; // Update temperature
          station.SensorData[1].value = humidity; // Update humidity
          station.SensorData[2].value = rssi; // Update rssi
          station.SensorData[3].value = snr; // Update rssi
          // Update the station name
          station.name = SID;
        }
      },
    },
  });

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMqttData, import.meta.hot));
}
