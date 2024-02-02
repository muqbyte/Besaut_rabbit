<template>
    <div>
      <v-row class="container mx-auto py-3">
        <v-col class="grid grid-cols-4 gap-2">
          <div v-for="point in fanStatus.getfanStatusData" :key="point.sid" class="rounded-md p-4 shadow-md rounded-lg">
            <h4 class="text-xl text-teal-200 font-mono font-semibold">
                <i class="mdi mdi mdi-fan"></i>
                {{ getFanLabel(point.SID) }}
              </h4>
            <div class="mt-4">
              <i :class="statusIconClass(point.STATUS)" :style="statusTextStyle(point.STATUS)" class="mdi-icon"></i>
              <p :style="statusTextStyle(point.STATUS)">Status: {{ point.STATUS }}</p>
              <p>Action time: {{formatTimestamp(point.timestamp)}}</p>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref, watch } from 'vue';
  import { usefanStatusData } from '~/stores/fanStatusData';
  import { formatTimestamp } from '../utils/databaseTimestampFormatter';
  
  const fanStatus = usefanStatusData();
  const dailyTrends = ref([]);
  
  const fetchData = async () => {
    try {
      const apiUrl = 'http://localhost:7500/api/ranch/control/status';
      const response = await fetch(apiUrl, { method: 'GET' });
  
      const responseData = await response.json();
  
      if (!responseData || (responseData.error && !responseData.data)) {
        console.error('No data found for the given input.');
      } else {
        fanStatus.setfanStatusData(responseData);
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  
  const { data: _, pending, error } = useAsyncData('dailyTrends', fetchData);
  
  onMounted(() => {
    fetchData();
  
    // Set up interval to fetch new data every 5 minutes (adjust as needed)
    setInterval(fetchData, 20 * 1000);
  
    // Watch for changes in dailyTrends and trigger fetchData
    watch(dailyTrends, () => {
      fetchData();
    });
  });
  
  const statusIconClass = (status) => {
    return status === 'ON' ? 'mdi mdi-power' : 'mdi mdi-power-off';
  };
  
  const statusTextStyle = (status) => {
    const textColorStyle = status === 'ON' ? 'color: #16a34a' : 'color: #a3a3a3';
    return textColorStyle;
  };
  
  const getFanLabel = (sid) => {
    // Add more cases as needed
    switch (sid) {
      case 'RC-01':
        return 'Fan 1';
      case 'RC-02':
        return 'Fan 2';
      case 'RC-03':
        return 'Fan 3';
      case 'RC-04':
        return 'Fan 4';
      case 'RC-05':
        return 'Pump';
      case 'RC-06':
        return 'Sweeper';
      default:
        return sid;
    }
  };
  </script>
  
  
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');
h4 {
    font-family: Orbitron, sans-serif;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 8px;
  }
p {
    font-family: Rubik, sans-serif;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
}
.mdi-icon {
  font-size: 24px; /* Customize the icon size */
  margin-right: 8px; /* Add spacing if desired */
}
.rounded-md {
    border: 1px solid rgb(238, 114, 13);
    color: #eca543 !important;
    text-shadow: 1px 1px rgb(21, 15, 15);
    border-radius: 15px;
    }
.left {
    height: calc(115vh - 185px) !important;
    padding: 10px;
      }
.center {
    height: calc(115vh - 185px) !important;
    padding: 10px;
    margin: 0px 0px;
      }
.right {
    height: calc(112vh - 185px) !important;
    padding: 10px;
    margin: 0px;
      }
</style>