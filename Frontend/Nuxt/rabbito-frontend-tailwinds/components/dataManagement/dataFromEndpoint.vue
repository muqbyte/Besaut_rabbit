<template>
  <div>
    <!-- <h2 class="text-xl font-semibold mb-4">Data Report for Selected Period</h2> -->
    <div class="overflow-x-auto">
      <table class="table-auto w-full font-mono font-bold rounded-lg">
        <thead>
          <tr class="bg-gray-200">
            <th v-for="(key, index) in dataKeys" :key="index" class="border px-4 py-2">{{ key }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data" :key="index" class="border-t hover:bg-sky-950">
            <td v-for="(value, keyIndex) in dataKeys" :key="keyIndex" class="border px-4 py-2">{{ item[value] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mt-1">
      <div class="flex space-x-4">
        <!-- <div class="flex-1"> -->
          <v-row dense align="center" class="inline-row">
            <v-col cols="7">
              <h3>Please select the file format to download and hit Save button</h3>
            </v-col>
            <v-col cols="3">
              <select v-model="selectedFormat" class="color-data" aria-label="Sensor Selection" style="font-size: 18px;">
                <option v-for="(option, index) in formatOptions" :key="index" :value="option">{{ option }}</option>
              </select>
            </v-col>
            <v-col cols="2"> <!-- This will push the column to the right -->
              <v-btn @click="saveDataToFile" class="btnStyle" color="transparent">
                <h5 class="btn-font">Save</h5>
              </v-btn>
            </v-col>
          </v-row>
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
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap');
  /* Custom colors 
  :root {
    --primary-color: #2196F3; 
    --secondary-color: #FF9800; 
    --accent-color: #4CAF50; 
  }
  */
  .inline-row {
    display: flex; /* Display columns inline */
    flex-wrap: wrap; /* Wrap columns if necessary */
    justify-content: space-between; /* Space between columns */
    align-items: center; /* Center items vertically */
  }
  .color-data {
    color: #FF9800;
    text-shadow: 1px 0.5px rgb(21, 15, 15);
    font-family: Chakra Petch, sans-serif;
    font-size: 14px;
    text-align: left;
    font-weight: bold;
    margin: 2px;
  }
  /* Apply colors to relevant elements */
  h3 {
      font-family: Chakra Petch, sans-serif;
      text-shadow: 1px 1px rgb(21, 15, 15);
      color: #FF9800;
      font-size: 20px;
      font-weight: bold;
  }
  
  th {
    color: #b8fc5d;
    font-size: 16px;
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
  .btnStyle {
    border: 1px solid #FF9800;

    }
  .btn-font {
    font-family: Chakra Petch, sans-serif;
    text-shadow: 1px 1px rgb(21, 15, 15);
    color: #FF9800 !important;
    }
  </style>
  