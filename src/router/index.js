import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Cart from '@/components/Cart'
import Checkout from '@/components/Checkout'
import Shop from '@/components/Shop'
import Product from '@/components/Product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
      path: '/product', 
      name: 'Product',
      component: Product
    }, 
  ]
})
