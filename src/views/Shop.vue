<script setup lang="ts">
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import Product from "@/components/CardProduct.vue"
import {computed, inject, onMounted, reactive, ref, toRaw, watchEffect} from "vue";
import Filter from "@/components/Filter.vue";

let store = inject("store_data"),
    products = ref();

</script>

<template>
  <breadcrumbs :breadcrumbs="[{title: 'دسته بندی'},{title: 'فروشگاه'}]"/>
  <div class="grid grid-cols-12 gap-4">
    <div class="col-span-12 lg:col-span-9 order-2 lg:order-2">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <product v-for="product in products" :key="product.id" :id="product.id" :source-file="product.sourceFile.sm" :title="product.title" :price="product.price" :discount="30"/>
      </div>
      <!--      <div class="flex justify-center mt-10">-->
      <!--        <div class="join">-->
      <!--          <button class="join-item btn">«</button>-->
      <!--          <button class="join-item btn">صفحه 22</button>-->
      <!--          <button class="join-item btn">»</button>-->
      <!--        </div>-->
      <!--      </div>-->
    </div>
    <div class="col-span-12 lg:col-span-3 order-1 lg:order-1">
      <Filter v-model="products"/>
    </div>
  </div>

</template>

<style scoped>

</style>