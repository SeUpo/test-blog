<template lang="pug">
.container
  ArticleList(
    v-if='articles' 
    :block='articles'
  )
  .loader(v-else)
</template>

<script setup lang="ts">
import { useHomeStore } from "~/stores/home";
const store = useHomeStore();
const { getHome } = store;
const { articles } = storeToRefs(store);

onMounted(() => {
  getHome();
});
</script>

<style lang="scss" scoped>
.loader {
  margin: 300px auto 300px;
  border: 16px solid #f3f3f3;
  border-top: 16px solid #1b1b1b;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@media (max-width: 1200px) { 
  .loader {
    margin: 120px auto 120px;
  }
}
@media (max-width: 560px) {
  .loader {
    margin: 50px auto 50px;
  }
}
</style>
