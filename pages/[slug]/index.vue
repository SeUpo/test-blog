<template lang="pug">
.container
  component(
    v-for='(block, index) in articleBody' 
    :key='index' 
    :is='renderBlock[block.type]' 
    :block='block'
  )
</template>

<script setup lang="ts">
import { useArticleStore } from "~/stores/article";
const store = useArticleStore();
const { fetchArticle } = store;
const { articleBody } = storeToRefs(store);
import type { renderBlockType } from "~/types/article";

const route = useRoute();
const slug = ref("");

watch(
  () => route.params.slug,
  (newSlug) => {
    slug.value = newSlug as string;
    fetchArticle(slug.value);
  },
  { immediate: true }
);

const renderBlock: renderBlockType = {
    article_intro_block: defineAsyncComponent(() => import('../components/ArticleIntro.vue')),
    text_block: defineAsyncComponent(() => import('../components/ArticleText.vue')),
    image_block: defineAsyncComponent(() => import('../components/ArticleImage.vue')),
    slider_block: defineAsyncComponent(() => import('../components/ArticleSlider.vue')),
    subscribe_form_block: defineAsyncComponent(() => import('../components/ArticleSubscribeForm.vue')),
    article_list_block: defineAsyncComponent(() => import('../components/ArticleList.vue')),
    cta_form_block: defineAsyncComponent(() => import('../components/ArticleCtaForm.vue')),
};
</script>
