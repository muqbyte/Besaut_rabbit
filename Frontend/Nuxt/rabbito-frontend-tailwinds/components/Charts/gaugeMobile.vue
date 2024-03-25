<template>
    <v-chart class="chart" :option="chartOption" />
  </template>
  
  <script>
  import { chartOption } from '~/assets/ChartOptions/mobileGauge.js';
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
    name: 'GaugeChart',
    components: {
      VChart,
    },
    props: {
      id: String,
      data: Number,
      max: Number,
      unit: String,
    },
    provide: {
      [THEME_KEY]: 'light',
    },
    computed: {
      chartOption() {
        return chartOption(this.data, this.unit, this.max);
      },
    },
  };
  </script>
  
  <style scoped>
  .chart {
    height: 190px;
    width: 100%;
  }
  </style>
  
  <style>
  body {
    margin: 0;
  }
  </style>
  