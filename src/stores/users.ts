import {defineStore} from "pinia";
import {reactive, ref, toRaw, toRef} from "vue";
import Swal from "sweetalert2";

export const useUsersStore = defineStore('users', {
    state: () => ({
        users: ref([])
    }),
    getters: {
        getUsers(state){
            return state.users;
        },
    },
    actions: {
        /* اضافه کردن کاربر  */
        async addUser(dataUser){
            dataUser.id = this.users.length + 1; /* ثبت یک شناسه برای کاربر جدید */
            await this.users.push(dataUser);
            localStorage.setItem("users", JSON.stringify(this.users));
        },
        deleteUser(idUser){
            localStorage.removeItem(idUser);
        }
    },
})