<template lang="pug">
div
  header
    NuxtLink(to='/')
      img(src='~/assets/icons/Logo.svg')
  slot
  hr
  footer
    .info
      .info__introduct
        NuxtLink(to='/')
          img.info__introduct-logo(src='~/assets/icons/Logo.svg')
        p.info__introduct-introduction
          | Cтатьи о дизайне и искусстве, которые исследуют
          | творческие вдохновения и актуальные тенденции,
          | раскрывая мир эстетики и креативности
      .info__contacts
        p.info__contacts-title email
        h2.info__email testblogsupport@gmail.com
        .info__links
          img(src='~/assets/icons/vk.svg')
          img(src='~/assets/icons/fb.svg')
          img(src='~/assets/icons/inst.svg')
          img(src='~/assets/icons/teleg.svg')
    SubscribeForm
</template>

<script setup lang="ts">
import SubscribeForm from "~/components/ArticleSubscribeForm.vue";
</script>

<style lang="scss" scoped>
header,
footer {
  margin: 0 auto;
  max-width: 1340px;
}
header {
  min-height: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
}
hr {
  margin: 0 auto;
  max-width: 1920px;
  border-top: 1px outset #8d959c;
}
footer {
  max-width: 1340px;
  .info {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: space-between;
    margin: 50px 0 70px;
    .info__introduct-logo {
      margin-bottom: 20px;
    }
    .info__introduct-introduction {
      width: 380px;
      text-wrap: wrap;
      font-size: 14px;
      color: #8d959c;
      line-height: 20px;
    }
    .info__contacts {
      margin-right: 78px;
      .info__email {
        font-family: "Ubuntu", sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        margin-bottom: 24px;
      }
      .info__links {
        display: flex;
        gap: 20px;
        img {
          cursor: pointer;
        }
      }
    }
  }
}
@media (max-width: 1480px) {
  footer .info{
    margin: 50px 30px 70px;
  }
}
@media (max-width: 800px) {
  .info{
    flex-direction: column;
  }
  .info__introduct-introduction{
    margin-bottom: 10px;
  }
}
@media (max-width: 600px) {
  .info__introduct{
    width: 100%;
  }
  footer .info .info__introduct-introduction{ 
    width: 100%;
    margin-bottom: 30px;
  }
  footer .info .info__contacts .info__email{
    font-size: 14px;
  }
}
</style>
