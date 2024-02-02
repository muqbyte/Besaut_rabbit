// /stores/endpoints.ts
import { defineStore } from 'pinia';

export const useEndpoints = defineStore('endpoints', {
  state: () => ({
    endPointData: [
      { id: "EP-01", apiUrl: "http://tx.eagleattech.com/api/ranch/control/command" },
      { id: "EP-02", apiUrl: "http://tx.eagleattech.com/api/ranch/command/status?id=" },
      { id: "EP-03", apiUrl: "http://tx.eagleattech.com/api/ranch/analytics/today?id=" },
      { id: "EP-04", apiUrl: "http://tx.eagleattech.com/api/ranch/analytics/weekly?id=" },
      { id: "EP-05", apiUrl: "http://tx.eagleattech.com/api/ranch/analytics/dailyTrends?id=" },      
      { id: "EP-06", apiUrl: "http://tx.eagleattech.com/api/ranch/lastseen/data" },
      { id: "EP-07", apiUrl: "http://tx.eagleattech.com/api/ranch/command/status?id=" },
      { id: "EP-08", apiUrl: "http://tx.eagleattech.com/api/weather/"},
      { id: "EP-09", apiUrl: "http://tx.eagleattech.com/api/weather/forecast/"},
      { id: "EP-10", apiUrl: "http://tx.eagleattech.com/api/ranch/now?id="},
      { id: "EP-11", apiUrl: "http://tx.eagleattech.com/api/ranch/nh3now?id="},
      { id: "EP-12", apiUrl: "http://tx.eagleattech.com/api/ranch/signalnow?id="}
    ],
  }),

  getters: {
    getEndpoints: (state) => state.endPointData,
  },

  actions: {
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
