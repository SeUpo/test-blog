<template lang="pug">
.Image
  img.Image__image(
      :src='block.data.src' 
      :alt='block.data.caption'
  )
  div.Image__caption
    |  {{ block.data.caption }}
</template>

<script setup lang="ts">
import type { block } from "~/types/article";
defineProps<{
  block: block;
}>();
</script>

<style lang="scss" scoped>
.Image {
  display: flex;
  margin: 100px auto;
  flex-direction: column;
  .Image__image {
  align-items: center;
  width: 100%;
  border-top-right-radius: 260px 220px;
  }
  .Image__caption{
    display: flex;
    color: #8D959C;
    margin-top: 10px;
    font-size: 14px;
    justify-content: flex-end;
  }
}
@media (max-width: 1480px) {  
  .Image {
    margin: 20px;
  .Image__image {
    // width: 80%;
    }
  }
}
@media (max-width: 560px) {
  .Image .Image__image {
    max-width: -webkit-fill-available;
  }
  

}
</style>
