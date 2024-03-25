<template>
    <div>
        <h3 class="main-header mt-2" style="text-align: center;">RSSI and SNR Status </h3>
        <rssiStatusMobileOne />
        <!-- <rssiStatusMobileTwo /> -->
    </div>
</template>
<script setup>
import rssiStatusMobileOne from './rssiStatusMobileOne.vue';
// import rssiStatusMobileTwo from './rssiStatusMobileTwo.vue';
</script>
<style scoped>
.main-header {
  font-family: Chakra Petch, sans-serif;
  color: deepskyblue;
  text-align: center;
  text-shadow: 1px 1px black;
  font-size: 16px;
  font-weight: bold;
}
</style>