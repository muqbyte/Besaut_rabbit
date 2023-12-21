<template>
  <v-chart class="chart" :option="chartOption" />
</template>

<script>
import { chartOption } from '~/assets/ChartOptions/SimplePie.js';
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

export default {
  name: "HelloWorld",
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
    [THEME_KEY]: "light",
  },
  computed: {
      chartOption() {
        return chartOption(this.chartData);
      },
    },
};
</script>

<style scoped>
.chart {
  height: 50vh;
}
</style>

<style>
body {
  margin: 0;
}
</style>
