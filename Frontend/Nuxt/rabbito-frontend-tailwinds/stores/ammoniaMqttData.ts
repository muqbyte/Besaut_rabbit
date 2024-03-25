// /stores/mqttData.ts

// import { defineStore } from 'pinia';

// Define a type or interface for the payload
interface UpdateAmmoniaStationsPayload {
    ammonia: number;
    rssi: number;
    snr: number;
    SID: string;
    indexStation: number;
  }
  
  export const useAmmoniaMqttData = defineStore('ammoniaMqttData', {
    state: () => ({
      Stations: Array.from({ length: 4 }, (_, index) => ({
        name: `ST-${index + 1}`,
        SensorData: [
          { type: 'ammonia', value: 25, unit: 'ppm' },
          { type: 'rssi', value: -110, unit: '' },
          { type: 'snr', value: 5, unit: '' },
        ],
      })),
    }),
    actions: {
      updateAmmoniaStationsData(payload: UpdateAmmoniaStationsPayload) {
        const { ammonia, rssi, snr, SID, indexStation } = payload;
  
        if (
          indexStation >= 0 &&
          indexStation < this.Stations.length
        ) {
          // Log the update
          // console.log(`Updating station ${indexStation}:`);
          // console.log(`  ammonia: ${ammonia}`);
          // console.log(`  rssi: ${rssi}`);
          // console.log(`  snr: ${snr}`);
          // console.log(`  SID: ${SID}`);
          
          // Update the sensor data
          const station = this.Stations[indexStation];
          station.SensorData[0].value = ammonia; // Update ammonia
          station.SensorData[1].value = rssi; // Update rssi
          station.SensorData[2].value = snr; // Update rssi
          // Update the station name
          station.name = SID;
        }
      },
    },
  });

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMqttData, import.meta.hot));
}
