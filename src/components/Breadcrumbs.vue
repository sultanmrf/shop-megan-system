<template>
  <div class="bg-white p-4 rounded-3xl">
    <div class="text-sm list-breadcrumbs">
      <ul class="flex gap-3">
        <li>
          <router-link to="/">خانه</router-link>
        </li>
        <li class="before:content-['>'] before:pe-2" v-for="breadcrumb in prop.breadcrumbs">
          <span v-if="breadcrumb.link === undefined" v-text="breadcrumb.title"></span>
          <router-link v-if="breadcrumb.link" :to="breadcrumb.link" v-text="breadcrumb.title"></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
let prop = defineProps(['breadcrumbs']);
</script>

<style scoped>

</style>