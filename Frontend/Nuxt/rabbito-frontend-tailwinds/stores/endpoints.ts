// stores/endpoints.ts
import { defineStore } from 'pinia';

const host = "http://localhost:7500/api/";
// const host = "https://tx.eagleattech.com/api/";

export const useEndpoints = defineStore('endpoints', {
  state: () => ({
    endPointData: [
      { id: "EP-01", apiUrl: `${host}ranch/control/command` },
      { id: "EP-02", apiUrl: `${host}ranch/command/status?id=` },
      { id: "EP-03", apiUrl: `${host}ranch/analytics/today?id=` },
      { id: "EP-04", apiUrl: `${host}ranch/analytics/weekly?id=` },
      { id: "EP-05", apiUrl: `${host}ranch/analytics/dailyTrends?id=` },      
      { id: "EP-06", apiUrl: `${host}ranch/lastseen/data` },
      { id: "EP-07", apiUrl: `${host}ranch/command/status?id=` },
      { id: "EP-08", apiUrl: `${host}weather/`},
      { id: "EP-09", apiUrl: `${host}weather/forecast/`},
      { id: "EP-10", apiUrl: `${host}ranch/now?id=`},
      { id: "EP-11", apiUrl: `${host}ranch/nh3now?id=`},
      { id: "EP-12", apiUrl: `${host}ranch/signalnow?id=`},
      { id: "EP-13", apiUrl: `${host}ranch/tmpNow?id=`},
      { id: "EP-14", apiUrl: `${host}ranch/rhNow?id=`},
      { id: "EP-15", apiUrl: `${host}ranch/ammoniaNow?id=`},
      { id: "EP-16", apiUrl: `${host}ranch/allnow?id=`},
      { id: "EP-17", apiUrl: 'http://localhost:7500/api/ranch/now?id='},
    ],
  }),

  getters: {
    getEndpoints: (state) => state.endPointData,
  },

  actions: {
    // Ensure the payload is an array before updating the store
    setEndpoints(data) {
      if (Array.isArray(data)) {
        this.endPointData = data;
        console.log('Endpoints data updated:', data);
      } else {
        console.error('Invalid data format. Expected an array.');
      }
    },
  },
});
