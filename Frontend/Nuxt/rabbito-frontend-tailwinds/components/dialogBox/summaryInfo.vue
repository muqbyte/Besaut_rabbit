<template>
    <div>
      <v-btn class="menu-btn" color="#f5f5f5" dark @click="dialog = true">
        <v-icon left color="#00C853" class="mdi-icon">mdi-information-outline</v-icon>
        <!-- <h5>Info</h5> -->
      </v-btn>
      <v-dialog v-model="dialog" persistent max-width="600">
        <v-card>
          <v-card-title style="color:#66BB6A;"><h4>Summary Page Info</h4></v-card-title>
          <v-card-text>
            <ol>
              <li>Select type of information you want to display.</li>
              <li>There there sub-pages to choose from, recent data, <i class="mdi mdi-update mdi-icon"></i> from each station.</li>
              <li>Daily non-compliance chart, <i class="mdi mdi-check-circle mdi-icon"></i> related to thermal comfort and ammonia level.</li>
              <!-- <li>Download the graph in PNG format by clicking the download button on the top right of the graph.</li>  -->
              <li>The third selection is Operation status, <i class="mdi mdi-play-circle mdi-icon"></i> related to automatic scrapper, cooling pump, and exhaust fans.</li>
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
    width: 50px;
    margin: 5px;
    border: 2px solid #6ee7b7;
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
  