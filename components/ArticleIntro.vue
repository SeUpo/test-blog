<template lang="pug">
.intro
  img.intro__image.cut-corner(:src='block.data.image' alt='block.data.image')
  .intro__info
    h1 {{ block.data.title }}
    .intro__info-section
      h6.intro__info-section__flex
        img(src='~/assets/icons/time.svg')
        | {{ block.data.reading_time }} мин время чтения
      h6.intro__info-section__flex
        img(src='~/assets/icons/eye.svg')
        | {{ block.data.views_count }} прочитали статью
    p {{ block.data.short_description }}
</template>

<script setup lang="ts">
import type { block } from "~/types/article";
defineProps<{
  block: block;
}>();
</script>

<style lang="scss" scoped>
.intro {
  display: flex;
  .intro__image {
    max-width: 541px;
    border-top-right-radius: 45%;
  }
  .intro__info {
    margin: 30px 0 0 30px;
    .intro__info-section {
      padding: 30px 0 50px;
      .intro__info-section__flex {
        display: flex;
        gap: 8px;
      }
    }
  }
}
@media (max-width: 1480px) {  
  .intro {
    margin: 20px;
  }
}
@media (max-width: 1240px) {
  .intro {
    align-items: center;
    flex-direction: column;
    .intro__image{
      max-width: 400px;
    }
  }
}
@media (max-width: 600px) {
  .intro {
    .intro__info {
    margin: 0;
      .intro__info-section {
        padding: 10px;
      }
    }
    .intro__image {
      max-width: -webkit-fill-available;
    }
  }
}
</style>
