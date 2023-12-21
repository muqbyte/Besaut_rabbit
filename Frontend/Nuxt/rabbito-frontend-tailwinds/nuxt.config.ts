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
    '@nuxtjs/tailwindcss'
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