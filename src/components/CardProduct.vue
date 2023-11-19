<template>
  <div class="card-product bg-white rounded-3xl leading-10 p-4 shadow-md">
    <div v-if="product.discount" class="bg-red-600 absolute top-2 right-2 rounded-full w-10 h-10 text-white">
      <p class="flex items-center justify-center" v-text="product.discount + '%'"></p>
    </div>
    <router-link :to="{name:'product', params: {id: product.id}}" class="flex flex-col items-center justify-center">
      <img class="mb-3" :src="product.sourceFile" :alt="product.title" width="200" height="200">
    </router-link>
    <div class="text-center">
      <router-link :to="{name:'product', params: {id: product.id}}">
        <h3 class="font-YekanBakh-ExtraBold text-base h-20" v-text="product.title"></h3>
      </router-link>
      <div class="flex justify-center gap-4 text-base mt-4">
        <span class="text-slate-900">{{numberFormat(product.price)}} {{currency}}</span>
      </div>
      <div class="flex gap-2 items-center mt-4">
        <router-link to="card">
          <v-tooltip text="افزودن به سبد خرید" location="top">
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" icon="$vuetify" variant="tonal" class="text-success">
                <v-icon color="success" icon="$vuetify" class="mdi mdi-cart-plus"></v-icon>
              </v-btn>
            </template>
          </v-tooltip>
        </router-link>
        <router-link to="comparison" class="ms-auto">
          <v-tooltip text="افزودن به علاقه مندی ها" location="top">
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" icon="$vuetify" variant="tonal" class="text-red-darken-3">
                <v-icon color="red" icon="$vuetify" class="mdi mdi-heart-outline text-red-accent-5"></v-icon>
              </v-btn>
            </template>
          </v-tooltip>
        </router-link>
        <router-link to="comparison">
          <v-tooltip text="افزودن به مقایسه" location="top" close="text-sm">
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" icon="$vuetify" variant="tonal" class="text-warning">
                <v-icon color="warning" icon="$vuetify" class="mdi mdi-compare-horizontal"></v-icon>
              </v-btn>
            </template>
          </v-tooltip>
        </router-link>
      </div>
    </div>
  </div>

</template>

<script setup>
import {inject} from "vue";
import {numberFormat} from "@/helpers/numberFormat";

let product = defineProps(['id', 'title', 'sourceFile', 'price', 'discount']),
    store = inject("store_data"),
    currency = inject("currency");

</script>

<style scoped>
.card-product{
  /*height: 26.25rem;*/
}
</style>