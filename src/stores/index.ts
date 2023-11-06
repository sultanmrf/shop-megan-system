import {defineStore} from "pinia";
import axios from "axios";
import {computed} from "vue";

export const useShopStore = defineStore('shop', {
    state: () => ({
        products: [],
        brands: [],
        categories: [],
        currency: "تومان"
    }),
    getters: {
        getProducts(state){
            return computed(() => state.products)
        },
        getCategories(state){
            return computed(() => state.categories)
        },
        getProductsNew(state){
            return computed(() => state.products.filter((item) => item.id >= 4))
        },
        getBrands(state){
            return computed(() => state.brands)
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
            const response = await axios.get("/src/assets/api/products.json");
            console.log(response.data)
            this.brands = response.data.brands;
        },
         getProduct(pro_id){
            let product = this.products.filter((item) => item.id == pro_id);
            return product[0];
        }
    },
})