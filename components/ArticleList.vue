<template lang="pug">
.articles
  .articles__article(v-for='article in block.data.articles' :key='article.link')
    NuxtLink(:to='article.link')
      img.articles__article-img(:src='article.image' alt='article.image')
    NuxtLink(:to='article.link')
      h3.articles__article-title
        | {{ article.title }}
    NuxtLink(:to='article.link')
      button.articles__article-button.button
        | Читать
</template>

<script setup lang="ts">
import type { articleListBlock } from "~/types/article";
defineProps<{
  block: articleListBlock;
}>();
</script>

<style lang="scss" scoped>
.articles {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 30px;
  .articles__article {
    width: 426px;
    .articles__article-img {
      max-height: 320px;
      width: 100%;
      margin-bottom: 20px;
    }
    .articles__article-title {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      margin-bottom: 30px;
    }
    .articles__article-button:hover {
      background-color: #3657d3;
    }
  }
}
@media (max-width: 600px) {
  .articles{
    margin: 0 10px;
    .articles__article {
      text-align: center;
      .articles__article-title{
        margin-bottom: 10px;
      }
      .articles__article-img {
        max-width: 100%;
        max-height: 100%;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
