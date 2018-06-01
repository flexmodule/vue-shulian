<template>
    <div class="home">
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide>
        <swiper-slide>Slide 9</swiper-slide>
        <swiper-slide>Slide 10</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { getPosition } from "@/utils/tools";
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: "Home",
   components: {
    swiper,
    swiperSlide
  },
  data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    },
  mounted() {
  }
}
</script>
<style lang="scss" scoped>
.home {
  height: 200px;
  .swiper-container {
    height: 100%;
  }
}
</style>
