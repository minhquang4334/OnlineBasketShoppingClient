<template>
  <!-- Search Wrapper Area Start -->
  <div>
  <div class="search-wrapper section-padding-100">
    <div class="search-close">
      <i class="fa fa-close" aria-hidden="true"></i>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="search-content">
            <form action="#" method="get">
              <input type="search" name="search" id="search" placeholder="Type your keyword...">
              <button type="submit"><img src="/static/img/core-img/search.png" alt=""></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Search Wrapper Area End -->

  <!-- ##### Main Content Wrapper Start ##### -->
  <div class="main-content-wrapper d-flex clearfix">

    <!-- Mobile Nav (max width 767px)-->
    <div class="mobile-nav">
      <!-- Navbar Brand -->
      <div class="amado-navbar-brand">
        <a href="index.html"><img src="/static/img/core-img/logo.png" alt=""></a>
      </div>
      <!-- Navbar Toggler -->
      <div class="amado-navbar-toggler">
        <span></span><span></span><span></span>
      </div>
    </div>

    <!-- Header Area Start -->
    <header class="header-area clearfix">
      <!-- Close Icon -->
      <div class="nav-close">
        <i class="fa fa-close" aria-hidden="true"></i>
      </div>
      <!-- Logo -->
      <div class="logo">
        <a href="index.html"><img src="/static/img/core-img/logo.png" alt=""></a>
      </div>
      <!-- Amado Nav -->
      <nav class="amado-nav">
        <ul>
          <li class="active"><a href="index.html">Home</a></li>
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

    <!-- Product Catagories Area Start -->
    <div class="products-catagories-area clearfix">
      <div class="amado-pro-catagory clearfix">

        <!-- Single Catagory -->
        <div class="single-products-catagory clearfix">
          <router-link :to="{name:'Shop'}">
            <img src="/static/img/bg-img/1.jpg" alt="">
            <!-- Hover Content -->
            <div class="hover-content">
              <div class="line"></div>
              <p>From $180</p>
              <h4>Modern Chair</h4>
            </div>
          </router-link>
        </div>

        <!-- Single Catagory -->
        <div class="single-products-catagory clearfix">
          <router-link :to="{name:'Shop'}">
            <img src="/static/img/bg-img/2.jpg" alt="">
            <!-- Hover Content -->
            <div class="hover-content">
              <div class="line"></div>
              <p>From $180</p>
              <h4>Minimalistic Plant Pot</h4>
            </div>
          </router-link>
        </div>

        <!-- Single Catagory -->
        <div class="single-products-catagory clearfix">
          <router-link :to="{name:'Shop'}">
            <img src="/static/img/bg-img/3.jpg" alt="">
            <!-- Hover Content -->
            <div class="hover-content">
              <div class="line"></div>
              <p>From $180</p>
              <h4>Modern Chair</h4>
            </div>
          </router-link>
        </div>

        <!-- Single Catagory -->
        <div class="single-products-catagory clearfix">
          <router-link :to="{name:'Shop'}">
            <img src="/static/img/bg-img/4.jpg" alt="">
            <!-- Hover Content -->
            <div class="hover-content">
              <div class="line"></div>
              <p>From $180</p>
              <h4>Night Stand</h4>
            </div>
          </router-link>
        </div>

        <!-- Single Catagory -->
        <div class="single-products-catagory clearfix">
          <router-link :to="{name:'Shop'}">
            <img src="/static/img/bg-img/5.jpg" alt="">
            <!-- Hover Content -->
            <div class="hover-content">
              <div class="line"></div>
              <p>From $18</p>
              <h4>Plant Pot</h4>
            </div>
          </router-link>
        </div>

        <!-- Single Catagory -->
        <div class="single-products-catagory clearfix">
          <router-link :to="{name:'Shop'}">
            <img src="/static/img/bg-img/6.jpg" alt="">
            <!-- Hover Content -->
            <div class="hover-content">
              <div class="line"></div>
              <p>From $320</p>
              <h4>Small Table</h4>
            </div>
          </router-link>
        </div>

        <!-- Single Catagory -->
        <div class="single-products-catagory clearfix">
          <router-link :to="{name:'Shop'}">
            <img src="/static/img/bg-img/7.jpg" alt="">
            <!-- Hover Content -->
            <div class="hover-content">
              <div class="line"></div>
              <p>From $318</p>
              <h4>Metallic Chair</h4>
            </div>
          </router-link>
        </div>

        <!-- Single Catagory -->
        <div class="single-products-catagory clearfix">
          <router-link :to="{name:'Shop'}">
            <img src="/static/img/bg-img/8.jpg" alt="">
            <!-- Hover Content -->
            <div class="hover-content">
              <div class="line"></div>
              <p>From $318</p>
              <h4>Modern Rocking Chair</h4>
            </div>
          </router-link>
        </div>

        <!-- Single Catagory -->
        <div class="single-products-catagory clearfix">
          <router-link :to="{name:'Shop'}">
            <img src="/static/img/bg-img/9.jpg" alt="">
            <!-- Hover Content -->
            <div class="hover-content">
              <div class="line"></div>
              <p>From $318</p>
              <h4>Home Deco</h4>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <!-- Product Catagories Area End -->
  </div>
  <!-- ##### Main Content Wrapper End ##### -->

  <!-- ##### Newsletter Area Start ##### -->
  <section class="newsletter-area section-padding-100-0">
    <div class="container">
      <div class="row align-items-center">
        <!-- Newsletter Text -->
        <div class="col-12 col-lg-6 col-xl-7">
          <div class="newsletter-text mb-100">
            <h2>Subscribe for a <span>25% Discount</span></h2>
            <p>Nulla ac convallis lorem, eget euismod nisl. Donec in libero sit amet mi vulputate consectetur. Donec auctor interdum purus, ac finibus massa bibendum nec.</p>
          </div>
        </div>
        <!-- Newsletter Form -->
        <div class="col-12 col-lg-6 col-xl-5">
          <div class="newsletter-form mb-100">
            <form action="#" method="post">
              <input type="email" name="email" class="nl-email" placeholder="Your E-mail">
              <input type="submit" value="Subscribe">
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ##### Newsletter Area End ##### -->

  <!-- ##### Footer Area Start ##### -->
  <footer class="footer_area clearfix">
    <div class="container">
      <div class="row align-items-center">
        <!-- Single Widget Area -->
        <div class="col-12 col-lg-4">
          <div class="single_widget_area">
            <!-- Logo -->
            <div class="footer-logo mr-50">
              <a href="index.html"><img src="/static/img/core-img/logo2.png" alt=""></a>
            </div>
            <!-- Copywrite Text -->
            <p class="copywrite"><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
              <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>
          </div>
        </div>
        <!-- Single Widget Area -->
        <div class="col-12 col-lg-8">
          <div class="single_widget_area">
            <!-- Footer Menu -->
            <div class="footer_menu">
              <nav class="navbar navbar-expand-lg justify-content-end">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#footerNavContent" aria-controls="footerNavContent" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
                <div class="collapse navbar-collapse" id="footerNavContent">
                  <ul class="navbar-nav ml-auto">
                      <li class="nav-item active">
                          <a class="nav-link" href="index.html">Home</a>
                      </li>
                      <li class="nav-item">
                          <router-link :to="{name:'Shop'}" class="nav-link">Shop</router-link>
                      </li>
                      <li class="nav-item">
                          <router-link :to="{name:'Product'}" class="nav-link">Product</router-link>
                      </li>
                      <li class="nav-item">
                          <router-link :to="{name:'Cart'}" class="nav-link">Cart</router-link>
                      </li>
                      <li class="nav-item">
                          <router-link :to="{name:'Checkout'}" class="nav-link">Checkout</router-link>
                      </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  </div>
</template>

<script>
import Cart from '@/components/Cart'
import Checkout from '@/components/Checkout'
import Shop from '@/components/Shop'
import Product from '@/components/Product'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Cart, 
    Checkout,
    Product,
    Shop
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
