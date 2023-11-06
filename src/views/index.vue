<script setup>
import Header from "../components/layouts/Header.vue"
import Footer from "../components/layouts/Footer.vue"

import {useShopStore} from "@/stores/index"
import {provide} from "vue";

let store = useShopStore();
store.fetchDataProduct();
provide("store_data" , store)
</script>

<template>
  <Header/>

  <Main class="container mx-auto max-w-screen-xl flex flex-col gap-7 py-4">
    <router-view></router-view>
  </Main>

  <Footer/>
</template>


<style scoped>

</style>