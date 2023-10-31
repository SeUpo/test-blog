<template lang="pug">
.cta
  img.cta__image(src='~/assets/images/cta.png')
  .cta__form
    h2.cta__form-text Стань участником проекта
    .cta__form-inputs
      input.cta__form-input(type='text' placeholder='Имя')
      input.cta__form-input(type='text' placeholder='Телефон')
      input.cta__form-input(type='text' placeholder='Email')
    button.button.subscribe-button Присоединиться
</template>

<script setup lang="ts">
import type { block } from "~/types/article";
defineProps<{
  block?: block;
}>();
</script>

<style lang="scss" scoped>
.cta {
  display: flex;
  gap: 60px;
  margin: 100px 0;
  padding: 60px;
  background-color: #1b1b1b;
  .cta__form-text {
    color: #fefefe;
  }
  .cta__form-inputs {
    display: flex;
    gap: 25px;
    flex-direction: column;
    margin: 50px 0;
  }
}
@media (max-width: 1480px) {  
  .cta{
    align-items: center;
    margin: 40px auto;
    .cta__image{
      height: fit-content;
    }
  }
}
@media (max-width: 1240px) {
  .cta {
    flex-direction: column;
      width: fit-content;
    .cta__form {
      text-align: center;
    }
    .cta__form-inputs {
      align-items: center;
    }
  }  
}
@media (max-width: 800px) {
  .cta {
    width: -webkit-fill-available;
}
  .cta__image {
    max-width: -webkit-fill-available;
  }
}
</style>
