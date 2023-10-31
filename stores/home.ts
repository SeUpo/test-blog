import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { articleListBlock } from '~/types/article'

export const useHomeStore = defineStore('home', () => {
  const articles = ref<articleListBlock>()

  const getHome = async () => {
    try {
      const res = await fetch('https://devtwit8.ru/api/v1/page/?path=/')
      if (res.ok) {
        const root = await res.json()
        articles.value = root.body[0]
      }
    } 
    catch (err) {
        console.error('err', err)
    }
  }
  return { articles, getHome }
})
