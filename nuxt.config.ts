// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/test-blog/',
    buildAssetsDir: 'assets',
  },
  experimental: {
    payloadExtraction: false
  },
  css: ['~/assets/styles.scss'],
  modules: ['@pinia/nuxt'],
})
