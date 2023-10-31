<template lang="pug">
.slider
  .slider__container
    button.slider__container-left(@click='prevSlide')
      img(src='~/assets/icons/Rectangle-l.svg')
    img.slider__container-image(:src='currentImage' alt='image')
    button.slider__container-right(@click='nextSlide')
      img(src='~/assets/icons/Rectangle-r.svg')
  .slider__current {{ currentIndex + 1 }} / {{ imageQuantity }}
</template>

<script setup lang="ts">
import type { sliderBlock } from "~/types/article";
const props = defineProps<{
  block: sliderBlock;
}>();

const currentIndex = ref(0);
const currentImage = computed(() => props.block.data[currentIndex.value]);
const imageQuantity = ref(props.block.data.length);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % imageQuantity.value;
};
const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + imageQuantity.value) % imageQuantity.value;
};
</script>

<style lang="scss" scoped>
.slider {
  margin: 100px auto;
  .slider__container {
    display: flex;
    margin: 0 auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .image {
    width: 100%;
    height: 100%;
  }
  button {
    height: 60px;
    width: 60px;
    background-color: #1b1b1b;
    color: #fff;
    border: none;
    cursor: pointer;
    img {
      margin: auto;
    }
  }
  .slider__current {
    margin-top: 25px;
    display: flex;
    font-size: 18px;
    justify-content: center;
  }
}

@media (max-width: 1480px) {  
  .slider {
    margin: 100px 20px;
  }
  .slider__container-image {
    max-width: 80%;
  }
}
@media (max-width: 800px) { 
  .slider {
    margin: 20px;
  }
  .slider__container-image {
    max-width: 70%;
  }
}
@media (max-width: 560px) {
  .slider__container-image {
    max-width: 70%;
  }
  .slider button {
    color: #1b1b1b;
    background-color: transparent;
  }
}
</style>
