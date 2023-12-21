<template>
  <div>
    <button @click="generateData">Generate Data</button>
    <ChartsSimple :chart-data="newData" />
  </div>
</template>

<script setup>
import { useSummaryData } from '~/stores/summaryData';
const summaryDataStore = useSummaryData();

const newData = ref([
  { value: 5, name: "High TMP" },
  // { value: 10, name: "Normal Temperature" },
  { value: 2, name: "Low TMP" },
  { value: 3, name: "High RH" },
  // { value: 12, name: "Normal Humidity" },
  { value: 2, name: "Low RH" },
  { value: 4, name: "High NH3" },
  // { value: 9, name: "Normal Ammonia" },
  { value: 1, name: "Low NH3" },
]);

const generateData = () => {
  // Store the data in the Pinia store
  summaryDataStore.setChartData(newData.value);
};
</script>


