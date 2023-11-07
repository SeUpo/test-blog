<template lang="pug">
header
  NuxtLink(to='/')
    img(src='~/assets/icons/Logo.svg')
main
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
import type { meta } from '~/types/article'

const route = useRoute();
const slug = ref();

onMounted(() => {
  slug.value = route.params.slug;
  slug.value == undefined ? fetchMeta('') : fetchMeta(slug.value);
});

watch(
  () => route.params.slug,
  (newSlug) => {
    newSlug == undefined ? slug.value = '' : slug.value = newSlug;
    fetchMeta(slug.value);
  },
);

const metaInfo = ref<meta>()
const title = ref("");
const description = ref("");

const fetchMeta = async (slug:string) => {
    try {
      const res = await fetch(`https://devtwit8.ru/api/v1/page/?path=/${slug}`)
      if (res.ok) {
        const body =  ref();
        body.value = await res.json();
        metaInfo.value = body.value!.meta;
        title.value = metaInfo.value!.title;
        description.value = metaInfo.value!.description;
      }
    } 
    catch (err) {
        console.error('err', err)
    }
  }

useHead({
  title,
  meta: [{
    name: 'description',
    content: description
  }]
});
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
