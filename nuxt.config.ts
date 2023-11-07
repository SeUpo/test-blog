// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    payloadExtraction: false
  },
  css: ['~/assets/styles.scss'],
  modules: ['@pinia/nuxt'],
})
