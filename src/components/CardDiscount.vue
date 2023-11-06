<template>
  <div class="card-discount hidden lg:block lg:col-span-3">
    <div class="bg-stone-800 rounded-3xl p-4">
      <div class="flex flex-col leading-8">
        <p class="text-white text-center">با 30 درصد تخفیف شگفتانه محصول خود را خریداری کنید :)</p>
        <div class="flex justify-center my-12">
          <img class="w-48" src="../assets/images/off.png" alt="">
        </div>
        <div class="grid grid-cols-4 gap-2 leading-4">
          <div class="flex flex-col text-center text-white bg-stone-900 px-2 py-4 rounded-2xl">
                      <span class="countdown font-YekanBakh-SemiBold text-3xl">
                        <span id="counterElement" style="--value:60;"></span>
                      </span>
            ثانیه
          </div>
          <div class="flex flex-col text-center text-white bg-stone-900 px-2 py-4 rounded-2xl">
                      <span class="countdown font-YekanBakh-SemiBold text-3xl">
                        <span style="--value:10;"></span>
                      </span>
            دقیقه
          </div>
          <div class="flex flex-col text-center text-white bg-stone-900 px-2 py-4 rounded-2xl">
                      <span class="countdown font-YekanBakh-SemiBold text-3xl">
                        <span style="--value:24;"></span>
                      </span>
            ساعت
          </div>
          <div class="flex flex-col text-center text-white bg-stone-900 px-2 py-4 rounded-2xl">
                      <span class="countdown font-YekanBakh-SemiBold text-3xl">
                        <span style="--value:4;"></span>
                      </span>
            روز
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.card-discount{
  height: 26.25rem;
}
</style>