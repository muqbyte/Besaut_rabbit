// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   devtools: { enabled: true }
// })

// nuxt.config.ts
// import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // css: ['vuetify/lib/styles/main.sass'],
  app: {
    head: {
      title: 'Eagle has Landed',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/plexus_1.png' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Orbitron&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Rubik&display=swap'},
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap'},
    ],
    }
  },
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
  ],
  modules: [
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    '@nuxt/image-edge',
    '@nuxtjs/tailwindcss',
    'nuxt-jwt-auth'
  ],
  colorMode: {
    classSuffix: '',
    preference: 'system', // default value of $colorMode.preference
    fallback: 'dark',
  },
  build: {
    transpile: ['vuetify', /echarts/, 'vue-echarts', 'resize-detector'],
    
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  // Pinia State Management setup
  imports: {
    dirs: ['./stores'],
  },
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
  nuxtJwtAuth: {
    baseUrl: 'https://tx.eagleattech.com/api/auth', // URL of your backend
    endpoints: {
      login: '/login', // Where to request login (POST)
      logout: '/logout', // Where to request logout (POST)
      user: '/user', // Where to request user data (GET)
      signup: '/signup' // Where to request signup (POST)
    },
    redirects: {
      home: '/', // Where to redirect after successfull login and logout
      login: '/login', // Where to redirect if user is not logged in and accesses a logged-only route
      logout: '/logout' // Where to redirect if user is logged in and accesses a guest-only route 
    }
  }
})
// import type { UserConfig } from 'vite'
// import vuetify from 'vite-plugin-vuetify'
// import { createResolver } from '@nuxt/kit'

// const { resolve } = createResolver(import.meta.url)

// export default defineNuxtConfig({
//   css: [
//     'vuetify/lib/styles/main.sass',
//     '@mdi/font/css/materialdesignicons.min.css',
//   ],
//   build: {
//     transpile: ['vuetify'],
//   },
//   hooks: {
//     'vite:extendConfig': (config: UserConfig) => {
//       if (config.plugins) {
//         config.plugins.push(
//           vuetify({
//             styles: { configFile: resolve('./settings.scss') },
//           })
//         )
//       }
//     },
//   },
// })