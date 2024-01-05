<template>
  <section class="h-screen px-4 flex items-center">
    <div class="container mx-auto max-w-screen-lg">
      <div class="bg-white rounded-2xl overflow-hidden">
        <div class="flex flex-col md:flex-row gap-8">
          <div class="flex-1 p-8 md:p-4 lg:p-20 lg:pb-0">
            <v-card max-width="450" class="mx-auto" variant="flat">
              <v-form v-model="form" @submit.prevent="register">
                <h2 class="text-3xl font-YekanBakh-ExtraBlack my-4">ثبت نام</h2>
                <v-text-field
                    v-model="formData.username"
                    :readonly="loadingBtnForm"
                    class="mb-2"
                    clearable
                    label="نام و نام خانوادگی"
                    placeholder="نام و نام خانوادگی خود را وارد کنید"
                ></v-text-field>
                <v-text-field
                    v-model="formData.email"
                    :readonly="loadingBtnForm"
                    class="mb-2"
                    clearable
                    label="ایمیل"
                    placeholder="ایمیل خود را وارد کنید"
                ></v-text-field>
                <v-text-field
                    v-model="formData.password"
                    :readonly="loadingBtnForm"
                    clearable
                    label="رمز عبور"
                    placeholder="رمز عبور خود را وارد کنید"
                ></v-text-field>
                <v-btn type="submit" :disabled="!form"
                       :loading="loadingBtnForm" class="btn bg-stone-800 hover:bg-stone-900 text-white w-full my-4">ثبت
                </v-btn>
              </v-form>
              <p class="text-center my-4">قبلا ثبت نام کرده اید؟ <router-link to="login" class="text-blue-darken-1">وارد شوید</router-link></p>
            </v-card>
          </div>
          <div class="hidden md:flex">
            <img class="bg-cover my-auto" src="../assets/images/sign-up.webp" alt="" width="450" height="450">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {reactive, ref} from "vue";
import {useUsersStore} from "@/stores/users";
import Swal from 'sweetalert2'
import {useRouter} from 'vue-router'

let storeUser = useUsersStore(),
    formData = reactive({
      username: "",
      email: "",
      password: ""
    }),
    form = ref(false),
    loadingBtnForm = ref(false),
    router = useRouter(),
    register = () => {
      loadingBtnForm.value = true;
      if(storeUser.getUsers.find(x => x.email === formData.email)){
        Swal.fire({
              text: ` این کاربر${formData.username} موجوده لطفا ورود کن `,
              icon: 'warning',
              position: 'center',
              showConfirmButton: false,
              timer: 2500,
              toast: true
            }
        );
        loadingBtnForm.value = false;
        return false;
      }
      storeUser.addUser({...formData}).then(() => {
        setTimeout(() => {
          Swal.fire({
                text: 'ثبت نام شما با موفقیت انجام شد',
                icon: 'success',
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500,
                toast: true
              }
          );
          loadingBtnForm.value = false;
          router.push("/");
        }, 1000)
      });
    };

</script>

<style scoped>

</style>