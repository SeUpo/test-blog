// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  hooks: {
    "nitro:config"(config) {
      if (process.env.WORKAROUND !== "true") {
        return
      }

      if (
        !config.prerender?.crawlLinks ||
        !Array.isArray(config.prerender?.routes)
      ) {
        return
      }

      const routes = config.prerender!.routes as string[]

      config.prerender!.routes = routes.map((route) =>
        route.replace("/", config.baseURL!)
      )
    }
  },
  css: ['~/assets/styles.scss'],
  modules: ['@pinia/nuxt'],
  devtools: { enabled: true },
})
