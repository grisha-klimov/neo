import Aura from '@primevue/themes/aura'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  future: {
    compatibilityVersion: 4,
  },
  runtimeConfig: {
    jwtSecret: process.env.JWT_SECRET,
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module',
    '@nuxt/content',
    '@nuxt/fonts',
    '@vueuse/nuxt',
  ],
  css: ['primeicons/primeicons.css', './assets/css/app.css'],
  ignore: [process.env.NODE_ENV === 'production' ? '-*' : ''],
  tailwindcss: {
    viewer: false,
  },
  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
})
