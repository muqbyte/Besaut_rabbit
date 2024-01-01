// /stores/summaryData.ts
// import { defineStore } from 'pinia';

export const useSummaryData = defineStore('summaryData', {
  state: () => ({
    chartData: [
        { value: 5, name: "High TMP" },
        { value: 10, name: "Normal TMP" },
        { value: 2, name: "Low TMP" },
        { value: 3, name: "High RH" },
        { value: 12, name: "Normal RH" },
        { value: 2, name: "Low RH" },
        { value: 4, name: "High NH3" },
        { value: 9, name: "Normal NH3" },
        { value: 1, name: "Low NH3" },
      ],
  }),

  getters: {
    getChartData: (state) => state.chartData,
  },

  actions: {
    setChartData(data) {
        this.chartData = data;
        console.log('Updated chart data:', data);
    },
  },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useMqttData, import.meta.hot));
  }
