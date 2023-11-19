<template>
  <div class="flex flex-column gap-4">
    <v-card class="bg-white rounded-3xl">
      <v-card-item class="p-4">
        <v-card-title class="font-YekanBakh-ExtraBold text-lg">
          محدوده قیمت:
        </v-card-title>
      </v-card-item>
      <v-range-slider
          class="px-4"
          v-model="filters.price"
          step="5"
          min="100000"
          max="100000000"
          color="#fbbf24"
          strict
          hide-details
      ></v-range-slider>
      <div class="flex justify-between p-4">
        <span class="min-price">{{numberFormat(filters.price[1])}} {{currency}}</span>
        <span class="max-price">{{numberFormat(filters.price[0])}} {{currency}}</span>
      </div>
    </v-card>
    <v-card class="bg-white rounded-3xl p-4">
      <v-card-item class="p-0">
        <v-card-title class="font-YekanBakh-ExtraBold text-base">
          دسته های محصولات:
        </v-card-title>
      </v-card-item>
      <ul class="flex flex-column p-0 gap-5 pb-4">
        <li v-for="category in categories">
          <v-locale-provider rtl>
            <v-checkbox v-model="filters.categories" :value="category.id" class="p-0 text-subtitle-2 h-4" hide-details color="#fbbf24">
              <template v-slot:label>
                <span class="text-sm text-black">{{ category.title }}</span>
              </template>
            </v-checkbox>
          </v-locale-provider>
        </li>
      </ul>
    </v-card>
    <v-card class="bg-white rounded-3xl p-4">
      <v-card-item class="p-0">
        <v-card-title class="font-YekanBakh-ExtraBold text-base">
          فیلتر براساس برند:
        </v-card-title>
      </v-card-item>
      <ul class="flex flex-column p-0 gap-5 pb-4">
        <li v-for="brand in brands">
          <v-locale-provider rtl>
            <v-checkbox v-model="filters.brands" :value="brand.id" class="p-0 text-subtitle-2 h-4" hide-details color="#fbbf24">
              <template v-slot:label>
                <span class="text-sm text-black">{{ brand.title }}</span>
              </template>
            </v-checkbox>
          </v-locale-provider>
        </li>
      </ul>
    </v-card>
  </div>
  {{ checkEditingFilter }}
</template>

<script setup lang="ts">
import {numberFormat} from "@/helpers/numberFormat";
import {computed, defineEmits, defineProps, inject, reactive} from "vue";

interface filter{
  price: number[],
  categories: number[],
  brands: number[]
}

let store = inject("store_data"),
    props = defineProps(['modelValue']),
    emit = defineEmits(['update:modelValue']),
    currency = inject("currency"),
    categories = store.getCategories,
    brands = store.getBrands,
    filters:filter = reactive({
      price: [100000, 100000000],
      categories: [],
      brands: []
    }),
    getResultFilter = (filter_data) => {
      return store.products.filter((product) => {
        let checkExistBrand: boolean = filter_data.brands.includes(product.brand_id), /* چک کردن وجود برند در محصول */
            checkExistCategories: boolean = filter_data.categories.includes(product.category.id), /* چک کردن وجود دسته بندی در محصول */
            checkExistRangePrice: boolean = (product.price >= filter_data.price[0] && product.price <= filter_data.price[1]); /* فیلتر براساس حداقل و حداکثر قیمت محصول  */

        if(filter_data.brands.length && filter_data.categories.length === 0){
          return checkExistRangePrice && checkExistBrand;
        }

        if(filter_data.categories.length && filter_data.brands.length === 0){
          return checkExistRangePrice && checkExistCategories;
        }

        if(filter_data.brands.length && filter_data.categories.length){
          return checkExistRangePrice && checkExistCategories && checkExistBrand;
        }

        return checkExistRangePrice;
      });
    }; /* برگشت اطلاعات فیلتر شده  */

store.fetchDataBrands();
const checkEditingFilter = computed(() => {
  let data = reactive(getResultFilter(filters));
  if((filters.brands.length > 0 || filters.categories.length > 0) || (filters.price[0] > 100000 || filters.price[1] < 100000000)){
    emit('update:modelValue',  data);
  }else{
    emit('update:modelValue',  data);
  }
})
</script>

<style scoped>

</style>