<template>
  <div class="category border border-slate-200 bg-white rounded-3xl leading-10">
    <router-link to="shop.html" class="category-item flex flex-col items-center justify-center p-4 h-40" :class="prop['clasessTagLink']">
      <img class="w-16 mb-4" :class="prop['clasessImg']" :src="prop['sourceImg']" :alt="prop['aliImg']" width="64" height="49">
      <h3 class="font-YekanBakh-ExtraBold text-base" :class="prop['clasessTitleImg']" v-text="prop['titleImg']"></h3>
    </router-link>
  </div>
</template>

<script setup>
let prop = defineProps(['source-img', 'titleImg', 'aliImg', 'clasessImg', 'clasessTitleImg', 'clasessTagLink']);
</script>

<style scoped lang="scss">
.category-item{
  img,h3{
    transition: 0.4s ease-in-out;
  }

  &:hover{
    & img,h3{
      transform: scale(1.2,1.2);
    }
  }
}
</style>