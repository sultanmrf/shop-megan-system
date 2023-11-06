<template>
  <section class="section-slider-products rounded-lg px-4 mb-4">
      <swiper  :modules="modules"
               :slides-per-view="1"
               :space-between="50"
               :autoplay="{
                delay: 2000,
                disableOnInteraction: false,
                }"
               :pagination="{ clickable: true }"
               :scrollbar="{ draggable: true }">
        <swiper-slide>
          <img class="object-cover rounded-lg w-full" src="../assets/images/tab/1.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img class="object-cover rounded-lg w-full" src="../assets/images/tab/2.jpg" alt="">
        </swiper-slide>
      </swiper>
  </section>
  <section class="section-categories mb-4">
      <div class="text-center mb-8">
        <h2 class="font-YekanBakh-ExtraBlack text-3xl">دسته بندی محصولات</h2>
      </div>
      <swiper class="cat-slider" :modules="modules"
              :slides-per-view="5"
              :space-between="20"
              :scrollbar="{ draggable: true }">
        <swiper-slide v-for="(category, index) in categories" :key="category.title">
          <category :source-img="category.source_img" :alt-img="category.title" :title-img="category.title"/>
        </swiper-slide>
      </swiper>
  </section>
  <section class="section-amazing-offer mb-4">
      <div class="bg-yellow-500 rounded-3xl pt-10 pb-4">
        <div class="text-center mb-8">
          <h2 class="font-YekanBakh-ExtraBlack text-3xl">پیشنهاد شگفت انگیز</h2>
        </div>
        <div class="grid grid-cols-12 gap-4 p-4">
          <div class="col-span-12 lg:col-span-9">
            <swiper class="slider-product1" :modules="modules"
                    :slides-per-view="3"
                    :space-between="20"
                    :scrollbar="{ draggable: true }">
              <swiper-slide v-for="product in products">
                <product :id="product.id" :source-file="product.sourceFile.sm" :title="product.title" :price="product.price" :discount="30"/>
              </swiper-slide>
            </swiper>
          </div>
          <card-discount/>
        </div>
      </div>
  </section>
  <section class="section-products mb-4">
      <div class="text-center mb-8">
        <h2 class="font-YekanBakh-ExtraBlack text-3xl">جدیدترین محصولات</h2>
      </div>
      <swiper class="slider-product1" :modules="modules"
              :slides-per-view="4"
              :space-between="20"
              :scrollbar="{ draggable: true }">
        <swiper-slide v-for="product in productNew">
          <product :id="product.id" :source-file="product.sourceFile.sm" :title="product.title" :price="product.price" :off-price="product.offPrice"/>
        </swiper-slide>
      </swiper>
  </section>
  <section class="section-advertising mb-4">
      <swiper  :modules="modules"
               :slides-per-view="1"
               :space-between="50"
               :autoplay="{
                delay: 2000,
                disableOnInteraction: false,
              }"
               :loop="true"
               :pagination="{ clickable: true }"
               :scrollbar="{ draggable: true }">
        <swiper-slide>
          <img class="object-cover rounded-b-3xl w-full" src="../assets/images/advertising-1.webp" alt="">
        </swiper-slide>
        <swiper-slide>
          <img class="object-cover rounded-b-3xl w-full" src="../assets/images/advertising-2.webp" alt="">
        </swiper-slide>
        <swiper-slide>
          <img class="object-cover rounded-b-3xl w-full" src="../assets/images/advertising-3.webp" alt="">
        </swiper-slide>
      </swiper>
  </section>
</template>

<script setup>
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation';

import Category from "@/components/Category.vue"
import Product from "@/components/CardProduct.vue"
import CardDiscount from "@/components/CardDiscount.vue"
import {inject} from "vue";
let modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay];
let store = inject("store_data");
store.fetchDataCategories();

let products = store.getProducts,
    categories = store.getCategories,
    productNew = store.getProductsNew;
</script>

<style scoped>

</style>