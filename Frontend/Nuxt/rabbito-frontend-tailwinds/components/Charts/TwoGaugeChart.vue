<template>
    <v-chart class="chart" :option="chartOption" />
        <!-- <v-card-subtitle>
            <v-row dense>
              <v-col>
                <h3 :style="formatTemperatureColor(temperature)" class="text-data">{{ temperature }}°C</h3>
              </v-col>
              <v-col>
                <h3 :style="formatColorStyle(dew)" class="text-data">{{ dew }}%</h3>
              </v-col>
            </v-row>
        </v-card-subtitle> -->
  </template>
  
  <script>
  import { chartOption } from '~/assets/ChartOptions/twoGauges.js';
  import { use } from 'echarts/core';
  import { CanvasRenderer } from 'echarts/renderers';
  import { GaugeChart } from 'echarts/charts'; // Import GaugeChart
  import {
    TitleComponent,
    TooltipComponent,
    LegendComponent,
  } from 'echarts/components';
  import VChart, { THEME_KEY } from 'vue-echarts';
  
  use([CanvasRenderer, GaugeChart, TitleComponent, TooltipComponent, LegendComponent]);
  
  export default {
    name: 'TwoGaugeChart',
    components: {
      VChart,
    },
    props: {
      id: String,
      dew: Number,
      temperature: Number,
    },
    provide: {
      [THEME_KEY]: 'light',
    },
    computed: {
      chartOption() {
        return chartOption(this.dew, this.temperature);
      },
    },
  };
  </script>
  
  <style scoped>
  .chart {
    height: 250px;
    width: 100%;
  }
  </style>
  
  <style scoped>
  body {
    margin: 0;
  }
  </style>
  