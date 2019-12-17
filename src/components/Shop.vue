<template>
    <div>
    <!-- Search Wrapper Area Start -->
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
                            <button type="submit"><img src="static/img/core-img/search.png" alt=""></button>
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
<!--                <h2>Censored</h2>-->
                    <h2>Censored</h2>
            </div>
            <!-- Navbar Toggler -->
            <div class="amado-navbar-toggler">
                <span></span><span></span><span></span>
            </div>
        </div>

        <left-bar/>
        <default-shop v-show="false"/>
        <list-item v-show="true"/>

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

    <footer/>
      <div class="single-products-catagory clearfix" v-for="(model, index) in list">
        <router-link :to="{name:'Shop'}">
          <img :src="getLink(model.image.url)" :alt="model.name">
          <!-- Hover Content -->
          <div class="hover-content">
            <div class="line"></div>
            <h4>{{model.name}}</h4>
          </div>
        </router-link>
      </div>
    </div>
</template>

<script>
import Cart from '@/components/Cart'
import Checkout from '@/components/Checkout'
import Product from '@/components/Product'
import LeftBar from "./LeftBar"
import Footer from "./Footer"
import DefaultShop from "./DefaultShop"
import ListItem from "./ListItem"
export default {
    data(){
        return {
            msg: 'Shop'
        }
    },
    components: { 
        Cart,
        Checkout,
        Product,
      Footer,
      LeftBar,
      DefaultShop,
      ListItem
    }
}
</script>

<style scoped>

</style>
