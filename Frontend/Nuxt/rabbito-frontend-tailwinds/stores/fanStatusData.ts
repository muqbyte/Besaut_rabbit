// /stores/fanStatusData.ts
import { defineStore } from 'pinia';

export const usefanStatusData = defineStore('fanStatusData', {
  state: () => ({
    chartData: [
      {  sid: "RC-01", type: "FAN", status: "OFF", timestamp: "2024-01-03T17:41" },
      {  sid: "RC-02", type: "FAN", status: "ON", timestamp: "2024-01-03T17:41" },
      {  sid: "RC-03", type: "FAN", status: "ON", timestamp: "2024-01-03T17:41" },
      {  sid: "RC-04", type: "FAN", status: "OFF", timestamp: "2024-01-03T17:41" },
    ],
  }),

  getters: {
    getfanStatusData: (state) => state.chartData,
  },

  actions: {
    setfanStatusData(data) {
      this.chartData = data;
      console.log('Updated chart data:', data);
    },
  },
});