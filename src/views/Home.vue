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
               :slides-per-view="5"
               :space-between="20"
               :scrollbar="{ draggable: true }">
        <swiper-slide v-for="(category, index) in categories">
          <category :source-img="category.source_img" :alt-img="category.title" :title-img="category.title"/>
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
import {useShopStore} from "@/stores/index"
let modules = [Navigation, Pagination, Scrollbar, A11y];
let store = useShopStore();
store.fetchDataProduct();
store.fetchDataCategories();

let products = store.getProducts;
let categories = store.getCategories;
</script>

<style scoped>

</style>