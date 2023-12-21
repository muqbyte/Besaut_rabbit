<template>
  <div class="gradient">
    <header>
      <div class="flex w-screen bg-gray-100 h-12 px-4 items-center nav-text">
        <nav class="flex items-center">
          <nuxt-link to="https://www.eagleattech.com/" class="mr-4">
            <img src="/EAGLE.png" width="90" height="auto" />
          </nuxt-link>
          <nuxt-link to="/" class="text-blue-500 hover:underline mr-4">Home</nuxt-link>
          <nuxt-link to="/weather" class="text-blue-500 hover:underline mr-4">Weather</nuxt-link>
          <nuxt-link to="/data" class="text-blue-500 hover:underline mr-4">API Data</nuxt-link>
          <nuxt-link to="/ranch" class="text-blue-500 hover:underline">Ranch Radar</nuxt-link>
        </nav>
        <div class="text-blue-500 font-bold ml-auto">{{ pageTitle }}</div>
        <!-- <NavigationModes/> -->
      </div>
    </header>
    <main class="p-4">
      <slot/>
    </main>
    <footer class="fixed bottom-0 text-center w-full text-gray-700 p-2 text-xs z-10 bg-white py-2 border-t flex flex-col items-center">
      <div class="flex items-center">
        <img src="/plexus_1.png" alt="Nex-Plex Logo" width="30" height="auto">
        <div class="font-bold text-shadow-md">
          EA &copy; 2020 - {{ currentYear }}
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const currentYear = ref(new Date().getFullYear());

const route = useRoute();

// Define computed property for page title
const pageTitle = computed(() => {
  switch (route.path) {
    case '/weather':
      return 'Weather';
    case '/data':
      return 'Data Dynamo: Streamlined API Insights at Your Fingertips';
    case '/ranch':
      return 'Ranch Radar: Elevating Rabbit Barn Efficiency with Monitoring';
    default:
      return ''; // Default title for other pages
  }
});

</script>
  
<style scoped>
  html {
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    background-color: transparent;
    overflow-y: scroll;
  }
  .nav-text {
    font-family: Chakra Petch, sans-serif;
    text-shadow: 1px 1px rgb(21, 15, 15);
    font-weight: bold;
  }
  .text-shadow-md {
    font-family: Chakra Petch, sans-serif;
    text-shadow: 1px 1px 2px rgba(158, 201, 244, 0.5);
    color: #0277BD !important;
    font-size: 14px;
  }
  .gradient {
    background: linear-gradient(70deg, #337b94 0%, #abe7f4 100%);
    opacity: 0.9;
  }
  .gradient::after {
    content: "";
    position: fixed;
    top: 0;
    height: 100%;
    left: 0;
    right: 0;
    z-index: -10;
    background-color: #273136;
    background-image: linear-gradient(180deg, rgba(50, 70, 80, 0.9) 0, #0d101b 100%);
    background-image: url("/rabbit_barn_16.png");
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: initial;
    height: 100%;
    transition: background 0.2s linear;
    background-size: cover;
  }
  @media only screen and (min-width: 600px) {
    .gradient::before {
      content: "";
      top: 0;
      left: 0;
      right: 0;
      height: 100%;
      background-color: transparent;
      background-image: url(/pattern.png);
      background-size: 4.6875rem;
      background-repeat: repeat;
      background-attachment: initial;
    }
  
    .gradient::after {
      content: "";
      top: 0;
      left: 0;
      right: 0;
      z-index: -10;
      background-color: #273136;
      background-image: linear-gradient(180deg, rgba(50, 70, 80, 0.9) 0, #0d101b 100%);
      background-image: url("/rabbit_barn_16.png");
      background-repeat: no-repeat;
      background-position: center;
      background-attachment: initial;
      height: 100%;
      transition: background 0.2s linear;
      background-size: cover;
    }
  }
</style>
  