// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  css: ['~/assets/styles.scss'],
  modules: ['@pinia/nuxt'],
  devtools: { enabled: true },
})
