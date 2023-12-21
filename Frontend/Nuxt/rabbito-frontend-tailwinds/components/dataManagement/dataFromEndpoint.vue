<template>
  <div>
    <h2 class="text-xl font-semibold mb-4">Data Display</h2>
    <div class="overflow-x-auto">
      <table class="table-auto w-full font-mono font-bold">
        <thead>
          <tr>
            <th v-for="(key, index) in dataKeys" :key="index" class="border px-4 py-2">{{ key }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data" :key="index" class="border-t">
            <td v-for="(value, keyIndex) in dataKeys" :key="keyIndex" class="border px-4 py-2">{{ item[value] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mt-4">
      <div class="flex space-x-4">
        <div class="flex-1">
          <select v-model="selectedFormat" class="block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500">
            <option v-for="(option, index) in formatOptions" :key="index" :value="option">{{ option }}</option>
          </select>
        </div>
        <div>
          <button @click="saveDataToFile" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


  
  <script lang="ts">
//   import { defineProps, ref, computed } from 'vue';
  export default {
    props: {
      data: {
        type: Array as () => any[], // Define the prop type
        required: false, // Make the prop optional
        default: () => [], // Provide a default value (empty array)
      },
    },
    setup(props) {
      // Define ref properties
      const selectedFormat = ref('JSON'); // Default to JSON format
  
      // Define computed property for dataKeys
      const dataKeys = computed(() => {
        if (props.data && props.data.length > 0) {
          return Object.keys(props.data[0]);
        } else {
          return [];
        }
      });
      // Define format options
      const formatOptions = computed(() => ['JSON', 'CSV']);
      
      // Define component methods
      const saveDataToFile = () => {
        if (selectedFormat.value === 'JSON') {
          saveDataAsJson();
        } else if (selectedFormat.value === 'CSV') {
          saveDataAsCsv();
        }
      };
  
      const saveDataAsJson = () => {
        const jsonData = JSON.stringify(props.data);
        const blob = new Blob([jsonData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'data.json';
        link.click();
        URL.revokeObjectURL(url);
      };
  
      const saveDataAsCsv = () => {
        const csvData = convertToCsv(props.data);
        const blob = new Blob([csvData], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'data.csv';
        link.click();
        URL.revokeObjectURL(url);
      };
  
      const convertToCsv = (data: any[]) => {
        const csvRows: string[] = [];
        const headers = Object.keys(data[0]);
        csvRows.push(headers.join(','));
  
        for (const row of data) {
          const values = headers.map((header) => {
            const value = row[header];
            return JSON.stringify(value);
          });
          csvRows.push(values.join(','));
        }
  
        return csvRows.join('\n');
      };
  
      // Return data and methods
      return {
        selectedFormat,
        dataKeys,
        formatOptions,
        saveDataToFile,
      };
    },
  };
  </script>
  
  <style>
  /* Custom colors */
  :root {
    --primary-color: #2196F3; /* Replace with your primary color */
    --secondary-color: #FF9800; /* Replace with your secondary color */
    --accent-color: #4CAF50; /* Replace with your accent color */
  }
  
  /* Apply colors to relevant elements */
  h2 {
    color: var(--primary-color);
  }
  
  th {
    color: var(--secondary-color);
  }
  
  /* Dark mode color scheme */
  body {
    background-color: #333;
    color: #fff;
  }
  
  table {
    background-color: #444;
    color: #fff;
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 20px;
  }
  
  thead th {
    background-color: #555;
    padding: 10px;
  }
  
  tbody td {
    padding: 10px;
    border-bottom: 1px solid #666;
  }
  
  tbody tr:last-child td {
    border-bottom: none;
  }
  
  select {
    margin-bottom: 10px;
  }
  </style>
  