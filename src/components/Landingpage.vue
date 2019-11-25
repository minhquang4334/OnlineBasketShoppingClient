<template>
  <div>
    <div class="site-wrap">

      <div class="site-mobile-menu site-navbar-target">
        <div class="site-mobile-menu-header">
          <div class="site-mobile-menu-close mt-3">
            <span class="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div class="site-mobile-menu-body"></div>
      </div>
    
      <div class="top-bar py-3 bg-light" id="home-section">
        <div class="container">
          <div class="row align-items-center">
          
            <div class="col-6 text-left">
              <ul class="social-media">
                <li><a href="#" class=""><span class="icon-facebook"></span></a></li>
                <li><a href="#" class=""><span class="icon-twitter"></span></a></li>
                <li><a href="#" class=""><span class="icon-instagram"></span></a></li>
                <li><a href="#" class=""><span class="icon-linkedin"></span></a></li>
              </ul>
            </div>
            <div class="col-6">
              <p class="mb-0 float-right">
                <span class="mr-3"><a href="tel://#"> <span class="icon-phone mr-2" style="position: relative; top: 2px;"></span><span class="d-none d-lg-inline-block text-black">(+1) 234 5678 9101</span></a></span>
                <span><a href="#"><span class="icon-envelope mr-2" style="position: relative; top: 2px;"></span><span class="d-none d-lg-inline-block text-black">shop@yourdomain.com</span></a></span>
              </p>
              
            </div>
          </div>
        </div> 
      </div>

      <header class="site-navbar py-4 bg-white js-sticky-header site-navbar-target" role="banner">

        <div class="container">
          <div class="row align-items-center">
            
            <div class="col-6 col-xl-2">
              <h1 class="mb-0 site-logo">
                <router-link :to="{name:'HelloWorld'}" class="amado-navbar-brand">
                    <h2>Censored</h2>
                </router-link>
              </h1>
            </div>
            <div class="col-12 col-md-10 d-none d-xl-block">
              <nav class="site-navigation position-relative text-right" role="navigation">

                <ul class="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                  <li>
                    <router-link :to="{name:'HelloWorld'}" class="nav-link ">
                        Home
                    </router-link>
                  </li>
                  <li><a href="#about-section" class="nav-link">About Us</a></li>
                  <li><a href="#contact-section" class="nav-link">Contact</a></li>
                </ul>
              </nav>
            </div>

            <div class="col-6 d-inline-block d-xl-none ml-md-0 py-3" style="position: relative; top: 3px;"><a href="#" class="site-menu-toggle js-menu-toggle text-black float-right"><span class="icon-menu h3"></span></a></div>

          </div>
        </div>
        
      </header>

    
      
      <div class="site-blocks-cover overlay" style="background-image: url(static/landingpage/images/hero_2.jpg);" data-aos="fade" data-stellar-background-ratio="0.5">
        <div class="container">
          <div class="row align-items-center justify-content-center">

            <div class="col-md-12" data-aos="fade-up" data-aos-delay="400">
                          
              <div class="row mb-4">
                <div class="col-md-7">
                  <h1>Shop With Us</h1>
                  <p class="mb-5 lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
                  <div>
                    <!-- <a href="#" class="btn btn-white btn-outline-white py-3 px-5 rounded-0 mb-lg-0 mb-2 d-block d-sm-inline-block">Shop Now</a> -->
                    <router-link :to="{name:'HelloWorld'}" class="btn btn-white btn-outline-white py-3 px-5 rounded-0 mb-lg-0 mb-2 d-block d-sm-inline-block">
                        <h6>Shop Now</h6>
                    </router-link>
                    <a href="#" class="btn btn-white py-3 px-5 rounded-0 d-block d-sm-inline-block">Club Membership</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  

    </div> <!-- .site-wrap -->
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import LeftBar from "./LeftBar"
import Footer from "./Footer"
export default {
    name: 'Landingpage',
    data(){
        return {
            msg: 'Landingpage'
        }
    },
    components: { 
      LeftBar,
      Footer,
      HelloWorld
    }
}
</script>

<style lang="" scoped>
    
</style>