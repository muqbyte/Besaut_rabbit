<template>
    <div>
      <v-btn class="menu-btn" color="#f5f5f5" dark @click="dialog = true">
        <v-icon color="#00C853" class="mdi-icon">mdi-information-outline</v-icon>
      </v-btn>
      <v-dialog v-model="dialog" persistent max-width="600">
        <v-card>
          <v-card-title style="color:#66BB6A;"><h4>Control Page Info</h4></v-card-title>
          <v-card-text>
            <ol>
              <li>Select type of device you want control.</li>
              <li>There are four sub-pages to choose from, fan, <i class="mdi mdi-fan mdi-icon"></i> control.</li>
              <li>Cooling pump and scapper system, <i class="mdi mdi-gamepad-circle mdi-icon"></i>.</li>
              <li>Operation LEDs, <i class="mdi mdi-lightbulb-on-outline mdi-icon"></i>.</li> 
              <li>Operation Warning LEDs and Sound Alarm system <i class="mdi mdi-light-switch mdi-icon"></i>.</li>
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
  
  .menu-btn {
    width: 30px;
    border: 1px solid #6ee7b7;
  }
  .mdi-icon {
    font-size: 26px; /* Customize the icon size */
    margin-right: 3px; /* Add spacing if desired */
  }
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
  li {
      font-family: Chakra Petch, sans-serif;
      font-size: 14px;
      font-weight: normal;
      margin-bottom: 8px;
    }
  </style>
  