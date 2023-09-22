import {defineStore} from "pinia";
import axios from "axios";
import {computed} from "vue";

export const useShopStore = defineStore('shop', {
    state: () => ({
        products: [],
        categories: []
    }),
    getters: {
        getProducts(state){
            return computed(() => state.products)
        },
        getCategories(state){
            return computed(() => state.categories)
        }
    },
    actions: {
        async fetchDataProduct(){
            const response = await axios.get("/src/assets/api/products.json");
            this.products = response.data.products;
        },
        async fetchDataCategories(){
            const response = await axios.get("/src/assets/api/categories.json");
            this.categories = response.data.categories;
        }
    },
})