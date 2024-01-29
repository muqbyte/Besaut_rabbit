<template>
    <div>
      <v-btn class="menu-btn" color="#f5f5f5" dark @click="dialog = true">
        <v-icon left color="#00C853" class="mdi-icon">mdi-information-outline</v-icon>
        <h5>Info</h5>
      </v-btn>
      <v-dialog v-model="dialog" persistent max-width="600">
        <v-card>
          <v-card-title style="color:#66BB6A;"><h4>Data Trends Usage Info</h4></v-card-title>
          <v-card-text>
            <ol>
              <li>Select the Station that you want to query.</li>
              <li>Choose the data trend period - daily, weekly, or monthly - to initiate the data query process.</li>
              <li>Once the data is received, it will be displayed in a multiple line graph. You can select or deselect parameters you wish to include or ignore.</li>
              <li>Download the graph in PNG format by clicking the download button on the top right of the graph.</li> 
              <li>Download the data as an Excel-based dataset for further analysis by clicking the "CSV" button.</li>
            </ol>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="dialog = false"><h5>Close</h5></v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const dialog = ref(false);
  </script>
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');
  
  h4 {
    font-family: Chakra Petch, sans-serif;
    font-size: 18px;
    font-weight: normal;
    text-shadow: 1px 1px rgb(21, 15, 15);
    color: #67e8f9 !important;
  }
  h5 {
    font-family: Chakra Petch, sans-serif;
    font-size: 14px;
    font-weight: normal;
    margin-top: 5px;
    margin-bottom: 5px;
    text-shadow: 1px 1px rgb(21, 15, 15);
    color: #67e8f9 !important;
  }
  .menu-btn {
    width: 100px;
    margin-right: 10px;
    margin-bottom: 10px;
    border: 1px solid #2196F3;
  }
  .mdi-icon {
    font-size: 20px; /* Customize the icon size */
    margin-right: 3px; /* Add spacing if desired */
  }
  li {
      font-family: Chakra Petch, sans-serif;
      font-size: 14px;
      font-weight: normal;
      margin-bottom: 8px;
    }
  </style>
  