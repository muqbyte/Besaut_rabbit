<template>
    <ChartsNonCompliancePie :chart-data="nonComplianceChart.getComplianceData" />
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue';
  import { useComplianceData } from '~/stores/complianceData';
  import { useEndpoints } from '@/stores/endpoints'; // Adjust the path based on your project structure

  const getUrl = useEndpoints();

  // Find the endpoint with id "EP-06"
  const selectedEndpoint = getUrl.getEndpoints.find(endpoint => endpoint.id === 'EP-06');
  const dailyTrends = ref([]);
  const nonComplianceChart = useComplianceData();
  
  const fetchData = async () => {
    try {
      const apiUrl = `${selectedEndpoint.apiUrl}`;
      const response = await fetch(apiUrl, {
        method: 'GET',
      });
  
      const responseData = await response.json();
      countNonCompliance();
  
      if (!responseData || (responseData.error && !responseData.data)) {
        console.error('No data found for the given input.');
      } else {
        dailyTrends.value = responseData; // Update data directly
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  
// Count the occurrence of Low and High data
const countNonCompliance = () => {
  // Initialize occurrenceData for all SIDs
  const occurrenceData = {
    "Low TMP": 0,
    "High TMP": 0,
    "Low RH": 0,
    "High RH": 0,
    "Low NH3": 0,
    "High NH3": 0,
  };

  // Ensure responseData is available
  if (dailyTrends.value.length > 0) {
    dailyTrends.value.forEach(item => {
      // Check conditions and update counts accordingly
      if (item.TYPE === "TMP") {
        if (item.VALUE < 22) {
          occurrenceData["Low TMP"] += 1;
        } else if (item.VALUE > 27) {
          occurrenceData["High TMP"] += 1;
        }
      } else if (item.TYPE === "RH") {
        if (item.VALUE < 50) {
          occurrenceData["Low RH"] += 1;
        } else if (item.VALUE > 70) {
          occurrenceData["High RH"] += 1;
        }
      } else if (item.TYPE === "NH3") {
        if (item.VALUE === 0) {
          occurrenceData["Low NH3"] += 1;
        } else if (item.VALUE > 10) {
          occurrenceData["High NH3"] += 1;
        }
      }
    });

    // Update nonComplianceData with the new occurrence results
    const nonComplianceData = Object.entries(occurrenceData).map(([name, value]) => ({ name, value }));
    // console.log(nonComplianceData);

    // Store the total occurrence results into Pinia
    nonComplianceChart.setComplianceData(nonComplianceData);
  }
};

  
  const { data: _, pending, error } = useAsyncData('dailyTrends', fetchData);
  
  onMounted(() => {
    // Load data when the component is mounted
    fetchData();
  
    // Set up interval to fetch new data every 5 minutes (adjust as needed)
    setInterval(fetchData, 20 * 1000);
  
    // Watch for changes in dailyTrends and trigger countNonCompliance
    watch(dailyTrends, () => {
      countNonCompliance();
    });
  });
  </script>
  