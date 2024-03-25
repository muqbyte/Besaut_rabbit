<template>
  <div class="gradient">
    <header>
      <div  v-if="isMobile" class="flex w-screen bg-gray-100 h-12 px-4 items-center nav-text">
        <nav class="flex items-center">
          <nuxt-link to="https://www.eagleattech.com/" class="mr-4">
            <img src="/EAGLE.png" width="90" height="auto" />
          </nuxt-link>
          <nuxt-link to="/" class="text-blue-500 hover:underline mr-4">
            <i
              class="mdi mdi mdi-radio-tower"
              style="font-size: 24px; color: #0e7490"
            ></i
          ></nuxt-link>
          <!-- <nuxt-link to="/weather" class="text-blue-500 hover:underline mr-4"><i class="mdi mdi mdi-weather-fog" style="font-size: 24px; color:#0e7490;"></i></nuxt-link> -->
          <nuxt-link to="/control" class="text-blue-500 hover:underline mr-4"
            ><i
              class="mdi mdi mdi-cogs"
              style="font-size: 24px; color: #0e7490"
            ></i
          ></nuxt-link>
          <nuxt-link to="/trends" class="text-blue-500 hover:underline"
            ><i
              class="mdi mdi mdi-trending-up"
              style="font-size: 24px; color: #0e7490"
            ></i
          ></nuxt-link>
        </nav>
        <div
          class="ml-auto"
          style="display: flex; justify-content: center; align-items: center"
        >
 
          <nav>
            <nuxt-link
              v-if="authenticated"
              @click="logout"
              class="text-blue-500 hover:underline logout"
              ><i
                class="mdi mdi mdi-logout"
                style="font-size: 24px; color: #0e7490; padding: 0 10px"
              ></i
            ></nuxt-link>
            <nuxt-link
              v-else
              @click="login"
              class="text-blue-500 hover:underline logout"
              ><i
                class="mdi mdi mdi-login"
                style="font-size: 24px; color: #0e7490; padding: 0 10px"
              ></i
            ></nuxt-link>
          </nav>
        </div>
        <!-- <div class="text-blue-500 font-bold ml-auto">{{ pageTitle }}</div> -->
        <!-- <NavigationModes/> -->
      </div>

      <div  v-else class="flex w-screen bg-gray-100 h-12 px-4 items-center nav-text">
        <nav class="flex items-center">
          <nuxt-link to="https://www.eagleattech.com/" class="mr-4">
            <img src="/EAGLE.png" width="90" height="auto" />
          </nuxt-link>
          <nuxt-link to="/" class="text-blue-500 hover:underline mr-4">
            <i
              class="mdi mdi mdi-radio-tower"
              style="font-size: 24px; color: #0e7490"
            ></i
          ></nuxt-link>
          <nuxt-link to="/control" class="text-blue-500 hover:underline mr-4"
            ><i
              class="mdi mdi mdi-cogs"
              style="font-size: 24px; color: #0e7490"
            ></i
          ></nuxt-link>
          <nuxt-link to="/trends" class="text-blue-500 hover:underline"
            ><i
              class="mdi mdi mdi-trending-up"
              style="font-size: 24px; color: #0e7490"
            ></i
          ></nuxt-link>
        </nav>
        <div
          class="ml-auto"
          style="display: flex; justify-content: center; align-items: center"
        > 
        <Formatime />
          <nav>
            <nuxt-link
              v-if="authenticated"
              @click="logout"
              class="text-blue-500 hover:underline logout"
              ><i
                class="mdi mdi mdi-logout"
                style="font-size: 24px; color: #0e7490; padding: 0 10px"
              ></i
            ></nuxt-link>
            <nuxt-link
              v-else
              @click="login"
              class="text-blue-500 hover:underline logout"
              ><i
                class="mdi mdi mdi-login"
                style="font-size: 24px; color: #0e7490; padding: 0 10px"
              ></i
            ></nuxt-link>
          </nav>
        </div>
        <!-- <div class="text-blue-500 font-bold ml-auto">{{ pageTitle }}</div> -->
        <!-- <NavigationModes/> -->
      </div>
    </header>
    <main class="p-1">
      <slot />
    </main>
    <footer
      class="fixed bottom-0 text-center w-full text-gray-700 p-2 text-xs z-10 bg-white py-2 border-t flex flex-col items-center"
    >
      <div class="flex items-center">
        <img src="/plexus_1.png" alt="Nex-Plex Logo" width="25" height="auto" />
        <div class="font-bold text-shadow-md">
          EA &copy; 2020 - {{ currentYear }}
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import Formatime from "~/utils/formatime.vue";

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

const currentYear = ref(new Date().getFullYear());

const route = useRoute();

import { storeToRefs } from "pinia";
import { useAuthStore } from "~/stores/auth";

const router = useRouter();

const { logUserOut } = useAuthStore();
const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive

const logout = () => {
  logUserOut();
  router.push("/login");
};
const login = () => {
  router.push("/login");
};

// Define computed property for page title
const pageTitle = computed(() => {
  switch (route.path) {
    case "/":
      return "Ranch Radar: Enhancing Efficiency in Rabbit Barns with Advanced Monitoring";
    case "/weather":
      return "Weather Forecast: Plan Your Day with Up-to-Date Weather Information";
    case "/trends":
      return "Data Dynamo: Uncover Actionable Insights with Streamlined Data Analysis";
    case "/control":
      return "Ranch Control: Manage Your Operations Effectively";
    default:
      return ""; // Default title for other pages
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

.logout:hover {
  cursor: pointer;
}
.nav-text {
  font-family: Chakra Petch, sans-serif;
  text-shadow: 1px 1px rgb(21, 15, 15);
  font-weight: bold;
}
.text-shadow-md {
  font-family: Chakra Petch, sans-serif;
  text-shadow: 1px 1px 2px rgba(158, 201, 244, 0.5);
  color: #0277bd !important;
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
  background-image: linear-gradient(
    180deg,
    rgba(50, 70, 80, 0.9) 0,
    #0d101b 100%
  );
  background-image: url("/rabbit_barn_18.jpg");
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
    background-image: url("/pattern.png");
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
    background-image: linear-gradient(
      180deg,
      rgba(50, 70, 80, 0.9) 0,
      #0d101b 100%
    );
    background-image: url("/rabbit_barn_18.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: initial;
    height: 100%;
    transition: background 0.2s linear;
    background-size: cover;
  }
}
</style>
