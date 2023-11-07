import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { article, meta, articleBody } from '~/types/article'

export const useArticleStore = defineStore('article', () => {
  const article = ref<article>()
  const articleMeta = ref<meta>()
  const articleBody = ref<articleBody>()

  const fetchArticle = async (slug:string) => {
    try {
      const res = await fetch(`https://devtwit8.ru/api/v1/page/?path=/${slug}`)
      if (res.ok) {
        article.value = await res.json();
        articleMeta.value = article.value!.meta;
        articleBody.value = article.value!.body;
      }
    } 
    catch (err) {
        console.error('err', err)
    }
  }
  return { article, articleMeta, articleBody, fetchArticle }
})
