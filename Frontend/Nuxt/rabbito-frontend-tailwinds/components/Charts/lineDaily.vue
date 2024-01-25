<template>
    <div>
        <client-only>
            <v-chart class="chart" :option="chartOption" />
        </client-only>
    </div>

  </template>
  
  <script>
  import { chartOption } from '~/assets/ChartOptions/multiLinesHourly';
  import { use } from 'echarts/core';
  import { CanvasRenderer } from 'echarts/renderers';
  import { LineChart } from 'echarts/charts';
  import { TitleComponent, TooltipComponent, LegendComponent } from 'echarts/components';
  import VChart, { THEME_KEY } from 'vue-echarts';
  
  use([CanvasRenderer, LineChart, TitleComponent, TooltipComponent, LegendComponent]);
  
  export default {
    name: 'ChartsLineDaily',
    components: {
      VChart,
    },
    props: {
      chartData: {
        type: Array,
        required: true,
      },
    },
    provide: {
      [THEME_KEY]: 'light',
    },
    computed: {
      chartOption() {
        if (!Array.isArray(this.chartData) || this.chartData.length === 0) {
          return {}; // Return an empty option or handle it based on your requirements
        }
        return chartOption(this.chartData);
      },
    },
  };
  </script>
  
  <style scoped>
  .chart {
    height: 45vh;
  }
  </style>
  
  <style>
  body {
    margin: 0;
  }
  </style>
  