<template>
  <footer class="p-10 bg-stone-800 text-white">
    <div class="container mx-auto max-w-screen-xl">
      <div class="grid grid-cols-12 gap-4 leading-8">
        <div class="col-span-12 lg:col-span-5">
          <img class="mb-4" src="@/assets/images/logo-white.png" alt="">
          <p>
            مگان سیستم با فراهم آوردن تنوع معقولی از محصولات در کنار عرضه با قیمت مناسب آن‌ها، به دنبال خرید راحت و رضایت‌بخش برای همراهان خودش است و این مهم را با مهیا کردن امکان بررسی فنی و کاربردی سیستم و ارائه محتوای مناسب و غنی محقق می‌سازد.
          </p>
        </div>
        <div class="col-span-12 lg:col-span-2 text-right md:text-center">
          <h3 class="font-YekanBakh-Bold text-white mb-4 text-lg">دسترسی سریع</h3>
          <ul>
            <li><router-link to="/home">صفحه اصلی</router-link></li>
            <li><router-link to="/shop">فروشگاه</router-link></li>
<!--            <li><router-link to="question">سوالات متداول</router-link></li>-->
            <li><router-link to="/contact-us">تماس با ما</router-link></li>
            <li><router-link to="/about-us">درباره ما</router-link></li>
          </ul>
        </div>
<!--        <div class="col-span-12 lg:col-span-2 text-right md:text-center">-->
<!--          <h3 class="font-YekanBakh-Bold text-white mb-4 text-lg">خدمات شرکت</h3>-->
<!--          <ul>-->
<!--            <li><router-link to="single-product.html">صفحه محصول</router-link></li>-->
<!--            <li><router-link to="single-page.html">جزئیات بلاگ</router-link></li>-->
<!--            <li><router-link to="successful.html">ثبت موفق</router-link></li>-->
<!--            <li><router-link to="unsuccessful.html">ثبت ناموفق</router-link></li>-->
<!--            <li><router-link to="404.html">404</router-link></li>-->
<!--          </ul>-->
<!--        </div>-->
        <div class="col-span-12 lg:col-span-3">
          <h3 class="font-YekanBakh-Bold text-white mb-4 text-lg">عضویت در خبرنامه</h3>
          <div class="flex items-center">
            <img src="@/assets/images/enamad_logo.png" alt="">
            <img src="@/assets/images/samandehi_logo.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </footer>

  <footer class="footer footer-center p-4 bg-stone-700 text-white">
    <div>
      <p>Copyright © 2023 - تمامی حقوق برای مگان سیستم محفوظ می باشد</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "header"
}
</script>

<style scoped>

</style>