<template>
  <section class="section-slider-products px-4">
    <div class="container mx-auto max-w-screen-xl">
      <swiper  :modules="modules"
               :slides-per-view="1"
               :space-between="50"
               navigation
               :pagination="{ clickable: true }"
               :scrollbar="{ draggable: true }">
        <swiper-slide>
          <img class="object-cover rounded-b-3xl w-full" src="../assets/images/slider-1.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img class="object-cover rounded-b-3xl w-full" src="../assets/images/slider-2.jpg" alt="">
        </swiper-slide>
      </swiper>
    </div>
  </section>
  <section class="section-categories my-14 px-4">
    <div class="container mx-auto max-w-screen-xl">
      <div class="text-center mb-8">
        <h2 class="font-YekanBakh-ExtraBlack text-3xl">دسته بندی محصولات</h2>
      </div>
      <swiper class="cat-slider" :modules="modules"
               :slides-per-view="1"
               :space-between="20"
               :scrollbar="{ draggable: true }">
        <swiper-slide>
          <category source-img="src/assets/images/graphic/1.webp" alt-img="رینگ ابزار" title-img="رینگ ابزار"/>
        </swiper-slide>
      </swiper>
    </div>
  </section>

</template>

<script setup>
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import Category from "@/components/Category.vue";
let modules = [Navigation, Pagination, Scrollbar, A11y];
</script>

<style scoped>

</style>