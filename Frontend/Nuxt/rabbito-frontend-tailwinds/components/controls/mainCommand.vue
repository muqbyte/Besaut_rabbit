<template>
  <div class="bg-gray-900 text-center rounded-lg">
    <div class="btn-layout">
      <v-btn class="menu-btn" @click="setIndex(1)">
        <i class="mdi mdi-fan mdi-icon"></i>
      </v-btn>
      <v-btn class="menu-btn" @click="setIndex(2)">
        <i class="mdi mdi-gamepad-circle mdi-icon"></i>
      </v-btn>
      <v-btn class="menu-btn" @click="setIndex(3)">
        <i class="mdi mdi-lightbulb-on-outline mdi-icon"></i>
      </v-btn>
      <v-btn class="menu-btn" @click="setIndex(4)">
        <i class="mdi mdi-light-switch mdi-icon"></i>
      </v-btn>
      
      <controlInfo class="summary-info" />
    </div>
    <div>
      <component :is="selectedComponent"/>
    </div>
  </div>
</template>


<script>
import fanCommand from './fanCommand.vue';
import deviceCommand from './deviceCommand.vue'
import lightCommand from './lightCommand.vue'
import warningLightCommand from './warningLightCommand.vue';
import controlInfo from '../dialogBox/controlInfo.vue';
export default {
  name: 'center-summary',
  components: {
    fanCommand,
    deviceCommand,
    lightCommand,
    warningLightCommand,
    controlInfo // Import and register the summaryInfo component
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
          return 'fanCommand';
        case 2:
          return 'deviceCommand';
        case 3:
          return 'lightCommand';
        case 4:
          return 'warningLightCommand';
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
  width: 30px;
  border: 1px solid rgb(13, 178, 238);
  margin: 2px;
  background-color:#083344; 
  opacity: 0.8;
}
.mdi-icon {
  color: #e0f2fe;
  font-size: 24px;
}
.summary-info {
  margin-left: 2px; /* Adjust margin for spacing between buttons and summaryInfo */
}
</style>
