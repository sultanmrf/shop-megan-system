<script setup>
import {useShopStore} from "@/stores"
import {provide} from "vue";

let store = useShopStore();
store.fetchDataProduct();
store.fetchDataCategories();

provide("store_data" , store);
provide("currency" , store.getCurrency);
</script>

<template>
    <router-view></router-view>
</template>

<style>

</style>
