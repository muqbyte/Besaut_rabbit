<template>
    <div>
      <v-menu v-model="menu" offset-y>
        <template v-slot:activator="{ on }">
          <v-btn color="#DCEDC8" dark @click="menu = !menu" v-on="on">
            <v-icon left>mdi-menu</v-icon>
            <h6>{{ $colorMode.preference }}</h6>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="option in themeOptions" :key="option" @click="$colorMode.preference = option">
            <v-list-item-title>{{ option }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  
  type Theme = 'light' | 'dark';
  
  const menu = ref(false);
  
  const themeOptions = ref(['system', 'light', 'dark', 'sepia']);
  
  onMounted(() => {
    if (process.client) {
      const setColorTheme = (newTheme: Theme) => {
        useColorMode().preference = newTheme;
      }
    }
  });
  </script>
  
  <style scoped>
  .v-btn {
    border: 1px solid rgb(13, 185, 238);
    color: #00E5FF !important;
    text-shadow: 1px 1px rgb(21, 15, 15);
  }
  </style>
  