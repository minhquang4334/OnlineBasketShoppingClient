<template>
  <!-- Header Area Start -->
  <header class="header-area clearfix">
    <!-- Close Icon -->
    <div class="nav-close">
      <i class="fa fa-close" aria-hidden="true"></i>
    </div>
    <!-- Logo -->
    <div class="logo">
      <h2>Censored</h2>
    </div>
    <!-- Amado Nav -->
    <nav class="amado-nav">
      <ul>
        <li ><router-link :to="{name:'Index'}">Index</router-link></li>
        <li><router-link :to="{name:'Shop'}">Shop</router-link></li>
        <li><router-link :to="{name:'Product'}">Product</router-link></li>
        <li><router-link :to="{name:'Cart'}">Cart</router-link></li>
        <li><router-link :to="{name:'Checkout'}">Checkout</router-link></li>
      </ul>
    </nav>
    <!-- Button Group -->
    <div class="amado-btn-group mt-30 mb-100">
      <a href="#" class="btn amado-btn mb-15">%Discount%</a>
      <a href="#" class="btn amado-btn active">New this week</a>
    </div>
    <!-- Cart Menu -->
    <div class="cart-fav-search mb-100">
      <router-link :to="{name:'Cart'}"><img src="static/img/core-img/cart.png" alt=""> Cart <span>(0)</span></router-link>
      <a href="#" class="fav-nav"><img src="/static/img/core-img/favorites.png" alt=""> Favourite</a>
      <a href="#" class="search-nav"><img src="/static/img/core-img/search.png" alt=""> Search</a>
    </div>
    <!-- Social Button -->
    <div class="social-info d-flex justify-content-between">
      <a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
      <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
      <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
      <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
    </div>
  </header>
  <!-- Header Area End -->
</template>
<script>
  import Cart from '@/components/Cart'
  import Checkout from '@/components/Checkout'
  import Shop from '@/components/Shop'
  import Product from '@/components/Product'
  import Index from '@/components/Index'
  export default {
    components: {
      Cart,
      Checkout,
      Product,
      Shop,
      Index,
    },
  }
</script>
