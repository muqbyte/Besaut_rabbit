<template>
    <div>
      <p class="text-2xl font-semibold text-center text-blue-500 my-4">
        {{ formattedDateTimestamp }}
      </p>
    </div>
  </template>
<style scoped>
.text-2xl {
    font-family: Chakra Petch, sans-serif;
    text-shadow: 1px 1px 2px rgba(158, 201, 244, 0.5);
    color: #0277BD !important;
    font-size: 24px;
  }
</style>
  <script setup>
  import { ref, onMounted } from 'vue';
  import { formatTimestamp } from '../utils/databaseTimestampFormatter';
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
  