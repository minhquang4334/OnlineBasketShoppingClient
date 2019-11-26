import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Cart from '@/components/Cart'
import Checkout from '@/components/Checkout'
import Shop from '@/components/Shop'
import Product from '@/components/Product'
import Login from '@/components/Login'
import LandingPage from '@/components/Landingpage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },

    {
      path: '/cart', 
      name: 'Cart',
      component: Cart
    },
    {
      path: '/checkout', 
      name: 'Checkout',
      component: Checkout
    },
    {
      path: '/shop', 
      name: 'Shop',
      component: Shop
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: Product
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
  ]
})
