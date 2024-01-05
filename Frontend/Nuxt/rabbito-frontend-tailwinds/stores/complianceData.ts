// /stores/complianceData.ts
import { defineStore } from 'pinia';

export const useComplianceData = defineStore('complianceData', {
  state: () => ({
    chartData: [
      { value: 0, name: "Low TMP" },
      { value: 0, name: "High TMP" },
      { value: 0, name: "Low RH" },
      { value: 0, name: "High RH" },
      { value: 0, name: "Low NH3" },
      { value: 0, name: "High NH3" },
    ],
  }),

  getters: {
    getComplianceData: (state) => state.chartData,
  },

  actions: {
    setComplianceData(data) {
      this.chartData = data;
      // console.log('Updated chart data:', data);
    },
  },
});

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useMqttData, import.meta.hot));
// }