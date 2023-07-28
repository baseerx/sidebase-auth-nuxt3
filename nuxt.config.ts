// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
      modules: [
        '@nuxtjs/tailwindcss',
        '@sidebase/nuxt-auth',
        '@pinia/nuxt'
    ],
    auth: {
    globalAppMiddleware: {
      isEnabled: true
    }
  },
  devtools: { enabled: true }
})
