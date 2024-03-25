<template>
  <div class="bg-gray-900 text-center rounded-lg">
    <div class="btn-layout">
      <v-btn class="menu-btn" @click="setIndex(1)">
        <i class="mdi mdi-update mdi-icon"></i>
      </v-btn>
      <v-btn class="menu-btn" @click="setIndex(2)">
        <i class="mdi mdi-check-circle mdi-icon"></i>
      </v-btn>
      <v-btn class="menu-btn" @click="setIndex(3)">
        <i class="mdi mdi-play-circle mdi-icon"></i>
      </v-btn>
      <summaryInfo class="summary-info" />
    </div>
    <div>
      <component :is="selectedComponent"/>
    </div>
  </div>
</template>


<script>
import realTimeData from './mobileRTData.vue'
import operationStatus from './operationStatusMobile.vue'
import NonComplianceCount from '../trends/nonComplianceCount.vue';
import summaryInfo from '../dialogBox/summaryInfo.vue';
export default {
  name: 'center-summary',
  components: {
    realTimeData,
    NonComplianceCount,
    operationStatus,
    summaryInfo // Import and register the summaryInfo component
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
          return 'realTimeData';
        case 2:
          return 'NonComplianceCount';
        case 3:
          return 'operationStatus';
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
.rounded-md {
  border: 1px solid rgb(13, 178, 238);
  color: #eca543 !important;
  text-shadow: 1px 1px rgb(21, 15, 15);
  border-radius: 15px;
}
.btn-layout {
  display: flex; /* Use flexbox layout */
  align-items: center; /* Align items vertically center */
  justify-content: center; /* Center items horizontally */
}
.menu-btn {
  margin: 5px;
  background-color:#083344; 
  opacity: 0.8;
}
.mdi-icon {
  color: #e0f2fe;
  font-size: 24px;
}
.summary-info {
  margin-left: 10px; /* Adjust margin for spacing between buttons and summaryInfo */
}
</style>
