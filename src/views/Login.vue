<template>
  <section class="section-login h-screen px-4 flex items-center">
    <div class="container mx-auto max-w-screen-lg">
      <div class="bg-white rounded-2xl overflow-hidden">
        <div class="flex flex-col md:flex-row gap-8">
          <div class="flex-1 p-8 md:p-4 lg:p-20 lg:pb-0">
            <v-card max-width="450" class="mx-auto" variant="flat">
              <v-form v-model="form" @submit.prevent="submit">
                <h2 class="text-3xl font-YekanBakh-ExtraBlack my-4">ورود</h2>
                <v-text-field
                    v-model="formData.email"
                    :readonly="loading"
                    class="mb-2"
                    clearable
                    label="ایمیل"
                    placeholder="ایمیل خود را وارد کنید"
                ></v-text-field>

                <v-text-field
                    v-model="formData.password"
                    :readonly="loading"
                    clearable
                    label="رمز عبور"
                    placeholder="رمز عبور خود را وارد کنید"
                ></v-text-field>
                <v-btn type="submit" :disabled="!form"
                       :loading="loading" class="btn bg-stone-800 hover:bg-stone-900 text-white w-full my-4">ورود
                </v-btn>
              </v-form>
            </v-card>
            <p class="text-center my-4">رمز عبور خود را <a href="">فراموش </a>کرده اید؟</p>
            <div class="divider my-8">یا</div>
            <p class="text-center my-4">
              <router-link to="sign-up">حساب کاربری ندارید !!!</router-link>
            </p>
          </div>
          <div class="hidden md:flex">
            <img class="bg-cover my-auto" src="../assets/images/login.webp" alt="" width="450" height="450">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

import {reactive, ref} from "vue";

let formData = reactive({
      email: "",
      password: ""
    }),
    form = ref(false),
    loading = ref(false),
    submit = () => {
      loading.value = true;
      setTimeout(()=>{
        loading.value = false;
      },2000)
    };

</script>

<style scoped>

</style>