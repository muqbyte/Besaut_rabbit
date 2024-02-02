<template>
    <div class="mt-2">
      <client-only>
        <v-btn class="btnStyle" color="transparent">
          <h3 class="text-ts">
            {{ formattedDateTimestamp }}
          </h3>
        </v-btn>
      </client-only>
    </div>
  </template>
<style scoped>
.text-ts {
  font-family: Orbitron, sans-serif;
  text-shadow: 1px 1px 2px rgba(158, 201, 244, 0.5);
  color: #0277BD !important;
  font-weight: bold;
  font-size: 16px;
  }
.btnStyle {
    width: 250px;
    margin-right: 10px;
    margin-bottom: 10px;
    border: 1px solid rgb(13, 185, 238);
  }
</style>
  <script setup>
  import { ref, onMounted } from 'vue';
  import { DBformatTimestamp } from '../utils/databaseTimestampFormatter';
  import { formatRealTimestamp } from '../utils/realtimestampFormatter';
  import { formatDateTimestamp } from '../utils/dateTimestampFormatter';
  const timestamp = ref(Date.now());
  
  // Initialize the formattedTimestamp and formattedRealTimestamp on the server
  const formattedTimestamp = ref('');
  const formattedRealTimestamp = ref('');
  const formattedDateTimestamp = ref('');
  // Periodically update the timestamp for demonstration purposes, but only on the client
  if (process.client) {
    onMounted(() => {
      setInterval(() => {
        timestamp.value = Date.now();
        formattedTimestamp.value = formatTimestamp(timestamp.value);
        formattedRealTimestamp.value = formatRealTimestamp(timestamp.value);
        formattedDateTimestamp.value = formatDateTimestamp(timestamp.value);
      }, 1000); // Update every second
    });
  }
  </script>
  