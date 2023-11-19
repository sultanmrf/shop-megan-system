import {defineStore} from "pinia";
import axios from "axios";
import {computed, reactive, ref} from "vue";

export const useShopStore = defineStore('shop', {
    state: () => ({
        products: [],
        product: "",
        brands: [],
        categories: [],
        currency: "تومان"
    }),
    getters: {
        getProducts(state){
            return computed(() => state.products);
        },
        getCategories(state){
            return computed(() => state.categories);
        },
        getProductsNew(state){
            return computed(() => state.products.filter((item) => item.id >= 4));
        },
        getBrands(state){
            return computed(() => state.brands);
        },
        getProduct(state){
            return computed(() => state.product);
        },
        getCurrency(state){
            return state.currency;
        },
    },
    actions: {
        async fetchDataProduct(){
            const response = await axios.get("/src/assets/api/products.json");
            this.products = response.data.products;
        },
        async fetchDataCategories(){
            const response = await axios.get("/src/assets/api/categories.json");
            this.categories = response.data.categories;
        },
        async fetchDataBrands(){
            const response = await axios.get("/src/assets/api/brands.json");
            this.brands = response.data.brands;
        },
        async fetchGetProduct(pro_id){
            let response = await axios.get("/src/assets/api/products.json");
            this.product = response.data.products.filter((item) => item.id == pro_id)[0];
        }
    },
})