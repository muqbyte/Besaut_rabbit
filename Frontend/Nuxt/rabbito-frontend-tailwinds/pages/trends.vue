<!-- pages/trends.vue -->
<template>
  <div>
    <div v-if="isMobile" class="bg-dark p-2 rounded-lg" style="height:100% !important;">
      <mobileView />
    </div>
    <div v-else class="bg-dark p-2 rounded-lg" style="height:650px !important; opacity:0.8;">
        <h3 class="text-3xl font-bold text-center text-sky-600">
          Trends and Analytics
        </h3>
      <Trends />
    </div>

  </div>

</template>
<script setup>
import mobileView from '~/components/trends/mobile.vue';
import { ref, onMounted } from 'vue';

const isMobile = ref(false);

onMounted(() => {
  // Check if the window object is defined before accessing innerWidth
  if (typeof window !== 'undefined') {
    isMobile.value = window.innerWidth <= 600;
  }
  
  // Update isMobile when the window is resized
  window.addEventListener('resize', () => {
    if (typeof window !== 'undefined') {
      isMobile.value = window.innerWidth <= 600;
    }
  });
});
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');
h3 {
    font-family: Orbitron, sans-serif;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 8px;
  }
  .bg-dark {
    background-image: linear-gradient(0deg, rgba(20, 35, 43, 0.9) 0, rgb(243, 248, 250)  100%);
  }
</style>
  
  