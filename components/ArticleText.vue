<template lang="pug">
.text(v-html='block.data')
</template>

<script setup lang="ts">
import type { block } from "@/types/article";
defineProps<{
  block: block;
}>();
</script>

<style lang="scss" scoped>
.text {
  margin: 100px 228px;
}
.text:deep(h2) {
  margin-bottom: 50px;
}
.text:deep(p) {
  margin-bottom: 20px;
}
.text:deep(ul > li) {
  list-style-type: circle;
  margin: 10px 0 10px 18px;
}
.text:deep(blockquote::before) {
  position: absolute;
  content: url("@/assets/icons/quotes.svg");
}
.text:deep(blockquote p) {
  display: inline-block;
  margin-left: 122px;
}
.text:deep(blockquote footer) {
  display: inline-block;
  margin-left: 122px;
  margin-right: 122px;
  color: #8d959c;
}
@media (max-width: 1480px) {  
}
@media (max-width: 1240px) {
  .text {
    margin: 50px;
  }
  .text:deep(blockquote p) {
    display: inline-block;
    margin-left: 0;
    margin-top: 82px;
  }
  .text:deep(blockquote footer) {
    margin-left: 0;
    margin-right: 0;
  }
}
@media (max-width: 600px) {
  .text {
    margin: 20px;
  }
  .text:deep(h2) {
    margin-bottom: 20px;
  }
}
</style>
