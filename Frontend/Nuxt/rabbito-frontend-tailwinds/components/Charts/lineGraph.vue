<template>
    <div>
      <client-only>
          <v-chart :option="option"/>
      </client-only>
    </div>
  </template>
  <script lang="ts" setup>
  import VChart from 'vue-echarts';
  import {use} from "echarts/core";
  import {CanvasRenderer} from "echarts/renderers";
  import {
      DatasetComponent,
      GridComponent,
      LegendComponent,
      PolarComponent,
      TitleComponent,
      TooltipComponent
  } from "echarts/components";
  import {GaugeChart} from "echarts/charts";
  
  use([
      CanvasRenderer,
      TitleComponent,
      TooltipComponent,
      LegendComponent,
      PolarComponent,
      DatasetComponent,
      GaugeChart,
      GridComponent
  ]);
  
  const option = computed(() => {
      return {
          grid: {
              left: 0,
              right: 0,
              bottom: 0,
              top: 0,
              containLabel: true,
              legend: false,
          },
          tooltip: {
              formatter: '{a} <br/>{b} : {c}%'
          },
          series: [
              {
              name: 'Pressure',
              type: 'gauge',
              detail: {
                  formatter: '{value}'
              },
              data: [
                  {
                  value: 50,
                  name: 'SCORE'
                  }
              ]
              }
          ]
      }
  });
  
  </script>