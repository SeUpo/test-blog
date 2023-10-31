<template lang="pug">
.subscribe
  h3 Подпишись на рассылку
  .subscribe__form
    input.subscribe__form-input(type='text' placeholder='Email')
    button.subscribe-button.button
      | Подписаться
</template>

<script setup lang="ts">
import type { block } from "~/types/article";
defineProps<{
  block?: block;
}>();
</script>

<style lang="scss" scoped>
.subscribe {
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fefefe;
  background-color: #1b1b1b;
  .subscribe__form {
    width: 48%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
}
@media (max-width: 1480px) {
  .subscribe .subscribe__form {
    width: 38%;
  }
}
@media (max-width: 1240px) {
  .subscribe{
    flex-direction: column;
    gap: 20px;
    width: auto;
    .subscribe__form {
      width: auto;
      gap: 20px;
    }
  }
}
@media (max-width: 600px) {
  .subscribe{ 
    text-align: center;
    .subscribe__form{
      align-items: center;
      flex-direction: column;
    }
  }
}
</style>

