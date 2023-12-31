import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/index.vue'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import ShowProduct from '../views/ShowProduct.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import AboutUs from '../views/About.vue'
import ContactUs from '../views/ContactUs.vue'
import Error404 from '../views/404.vue'
import Blog from '../views/Blog.vue'
import ShowBlog from '../views/ShowBlog.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
          path: 'shop',
          name: 'shop',
          component: Shop
        },
        {
          path: 'product/:id',
          name: 'product',
          component: ShowProduct,
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUp
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutUs
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: ContactUs
    },
    {
      path: '/',
      name: '404',
      component: Error404
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
      children: [
        {
          path: 'b:id',
          component: ShowBlog,
        }
      ]
    }
  ]
})

export default router
