<!-- components/trends/index.vue -->

<template>
  <div class="bg-gray-900 p-2 text-center rounded-lg">
    <div class="mt-1 btn-layout">
      <v-btn class="menu-btn" @click="setIndex(1)" color="transparent">
        <h6 class="btn-font">Daily Report</h6></v-btn>
        <v-btn class="menu-btn" @click="setIndex(2)" color="transparent">
          <h6 class="btn-font">Weekly Report</h6></v-btn>
      <v-btn class="menu-btn" @click="setIndex(3)" color="transparent">
        <h6 class="btn-font">Report by Date</h6></v-btn>
    </div>
    <div>
      <component :is="selectedComponent"/>
    </div>
  </div>
</template>

<script>
import dailyReport from '../trends/analyticsDaily.vue';
import weeklyReport from '../trends/analyticsWeekly.vue'
import generalReport from '../trends/analyticsReport.vue'
export default {
  name: 'center-summary',
  components: {
    dailyReport,
    weeklyReport,
    generalReport,
  },
  data() {
    return {
      index: 1,
    };
  },
  computed: {
    selectedComponent() {
      switch (this.index) {
        case 1:
          return 'dailyReport';
        case 2:
          return 'weeklyReport';
        case 3:
          return 'generalReport';
      }
    }
  },
  methods: {
    setIndex(value) {
      this.index = value;
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
    h6 {
      font-family: Righteous, sans-serif;
      font-weight: 200;
    }
    p {
      font-family: Oswald, sans-serif;
      font-weight: 800;
    }
    .btn-layout {
      align-items: center;
      justify-content: center;
    }
    .menu-btn {
      width: 200px;
      margin-right: 10px;
      margin-bottom: 10px;
      border: 1px solid #2196F3;
    }

    .btn-font {
      font-family: Righteous, sans-serif;
      text-shadow: 1px 1px rgb(21, 15, 15);
      color: #2196F3 !important;
      }
</style>