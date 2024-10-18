import Aura from "@primevue/themes/aura";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@primevue/nuxt-module", "@nuxt/content"],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap",
        },
      ],
    },
  },
  css: ["primeicons/primeicons.css", "./assets/css/app.css"],
  ignore: [process.env.NODE_ENV === "production" ? "-*" : ""],
  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
  postcss: {
    plugins: {
      "postcss-import": {},
      "@tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
