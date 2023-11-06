<script setup>
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import Product from "@/components/CardProduct.vue"
import {useShopStore} from "@/stores/index"
import {reactive, ref} from "vue";

let store = useShopStore();
store.fetchDataProduct();
store.fetchDataCategories();
let filters = reactive({
  categories: [],
  price:0,
  brand: []
})
let products = store.getProducts,
    categories = store.getCategories,
    brands = store.fetchDataBrands;

</script>

<template>
  <breadcrumbs :breadcrumbs="[{title: 'دسته بندی'},{title: 'فروشگاه'}]"/>
  <div class="grid grid-cols-12 gap-4">
    <div class="col-span-12 lg:col-span-9 order-2 lg:order-2">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <product v-for="product in products" :id="product.id" :source-file="product.sourceFile.sm" :title="product.title" :price="product.price" :discount="30"/>
      </div>
      <div class="flex justify-center mt-10">
        <div class="join">
          <button class="join-item btn">«</button>
          <button class="join-item btn">صفحه 22</button>
          <button class="join-item btn">»</button>
        </div>
      </div>
    </div>
    <div class="col-span-12 lg:col-span-3 order-1 lg:order-1">
      <div class="bg-white rounded-3xl mb-4 p-4">
        <h3 class="font-YekanBakh-ExtraBold text-base">فیلتر بر اساس قیمت:</h3>
        <div class="my-4">
          <input type="range" min="0" max="100" value="40" class="range range-warning" />
        </div>
        <span>قیمت تا 143000 هزار تومان</span>

      </div>
      <div class="bg-white rounded-3xl mb-4 p-4">
        <h3 class="font-YekanBakh-ExtraBold text-base">دسته های محصولات:</h3>
        <div class="my-4">
          <ul class="menu p-0">
            <li v-for="category in categories" class="d-flex">
              <v-locale-provider rtl>
                <v-checkbox v-model="filters.categories" :value="category.id" class="p-0 text-subtitle-2" hide-details color="#fbbf24">
                  <template v-slot:label>
                    <span class="text-sm text-black">{{ category.title }}</span>
                  </template>
                </v-checkbox>
              </v-locale-provider>
            </li>
          </ul>
        </div>
      </div>
      <div class="bg-white rounded-3xl p-4">
        <h3 class="font-YekanBakh-ExtraBold text-base">فیلتر براساس برند:</h3>
        <div class="flex flex-col mt-4 gap-4">
          <v-locale-provider rtl>
            <v-radio-group>
              <v-radio v-for="brand in brands" :label="brand" value="one"></v-radio>
            </v-radio-group>
          </v-locale-provider>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>