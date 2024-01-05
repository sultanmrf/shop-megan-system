<template>
  <breadcrumbs :breadcrumbs="[{title: 'دسته بندی'},{title: 'جزئیات محصول'}]"/>
  <section v-if="product" class="section-product-info">
    <div class="bg-white p-4 rounded-3xl">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-12 md:col-span-4">
          <swiper  :modules="modules"
                   :slides-per-view="1"
                   :space-between="50"
                   :pagination="{ clickable: true }"
                   :scrollbar="{ draggable: true }"
                   :thumbs="{ swiper: thumbsSwiper }"
                   class="swiper swiper-pro-main border border-b rounded-3xl">
            <swiper-slide v-for="image in product.sourceFile.lg">
              <img class="rounded-xl cursor-pointer" :src="image" :alt="product.title">
            </swiper-slide>
          </swiper>
          <swiper
              :slides-per-view="4"
              :space-between="2"
              :modules="[Thumbs]"
              watch-slides-progress
              @swiper="setThumbsSwiper"
              class="swiper-relation-pro-main mt-4"
          >
            <swiper-slide v-for="image in product.sourceFile.lg">
              <img class="rounded-xl cursor-pointer" :src="image" :alt="product.title">
            </swiper-slide>
          </swiper>
        </div>
        <div v-if="product" class="col-span-12 md:col-span-8">
          <div class= "p-4">
            <div class="bg-stone-50 rounded-xl p-4 leading-8">
              <h1 class="font-YekanBakh-ExtraBold text-base" v-text="product.title"></h1>
              <p>دسته بندی: {{ product.category.title }}</p>
            </div>
            <div class="grid grid-cols-12 mt-4">
              <div class="col-span-12 lg:col-span-8 p-4">
                <ul class="leading-8 text-stone-500">
                  <li v-for="pro_details in product.details">{{ pro_details }}</li>
                </ul>
                <div class="flex gap-4 text-base mt-4">
                  <span class="line-through">{{ numberFormat(product.offPrice) }} {{ store.currency }} </span>
                  <span class="text-yellow-500">{{ numberFormat(product.price) }} {{ store.currency }}</span>
                </div>
                <button class="btn bg-stone-800 hover:bg-stone-900 text-white my-6">افزودن به سبد خرید</button>
                <div>
                  <a class="border px-4 py-2 rounded-xl" href="comparison.html">افزودن به مقایسه</a>
                </div>
              </div>
              <PurchaseGuarantee/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section v-if="product" class="section-description">
    <div class="bg-white rounded-3xl p-8 leading-8">
      <p class="text-3xl font-YekanBakh-ExtraBlack mb-4">توضیحات</p>
      <p>{{ product.description}}</p>
    </div>
  </section>
</template>

<script setup>
import {inject, ref} from 'vue';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y ,Thumbs} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useRoute } from 'vue-router';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation';
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import PurchaseGuarantee from "@/components/PurchaseGuarantee.vue";
import {numberFormat} from "@/helpers/numberFormat";

let modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay, Thumbs],
    store = inject("store_data"),
    route = useRoute(),
    thumbsSwiper = ref(null),
    setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };

store.fetchGetProduct(route.params.id);
let product = store.getProduct;

</script>

<style scoped lang="scss">
/* active style swiper section pro main start*/
.swiper-relation-pro-main :deep(.swiper-wrapper){
  justify-content: center;
  .swiper-slide-thumb-active img{
    border: 1px solid rgb(234 179 8);
    border-radius: 8px;
    box-shadow: 0 0 4px rgb(234, 179, 8,0.9);
  }
}
/* active style swiper section pro main end*/

</style>