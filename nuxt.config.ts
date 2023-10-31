// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/styles.scss'],
  modules: ['@pinia/nuxt'],
  devtools: { enabled: true },
  generate: {
    routes: ['/'],
    async routes() {
      const response = await fetch('https://devtwit8.ru/api/v1/page/?path=/');
      const articles = await response.json();
      return articles.map((article) => {
        return {
          route: `/${article.link}`,
          payload: article,
        };
      });
    },
  },
})
