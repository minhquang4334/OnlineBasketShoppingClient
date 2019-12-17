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
                    <h2>Censored</h2>
                </div>
                <!-- Navbar Toggler -->
                <div class="amado-navbar-toggler">
                    <span></span><span></span><span></span>
                </div>
            </div>

           <left-bar/>

            <div class="cart-table-area section-padding-100">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 col-lg-8">
                            <div class="cart-title mt-50">
                                <h2>Shopping Cart</h2>
                            </div>

                            <div class="cart-table clearfix">
                                <table class="table table-responsive">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="product in order_products">
                                            <td class="cart_product_img">
                                                <a href="#"><img :src="getLink(product.image)" alt="product"></a>
                                            </td>
                                            <td class="cart_product_desc">
                                                <h5>{{product.name}}</h5>
                                            </td>
                                            <td class="price">
                                                <span>{{currency.format(product.price)}}</span>
                                            </td>
                                            <td class="qty">
                                                <div class="qty-btn d-flex">
                                                    <p>Qty</p>
                                                    <div class="quantity">
                                                        <span class="qty-minus" @click="changeQty(product, -1)"><i class="fa fa-minus" aria-hidden="true"></i></span>
                                                        <input type="number" class="qty-text" :id="`qty-` + product.id " step="1" min="1" max="300" name="quantity" :value="product.quantity">
                                                        <span class="qty-plus" @click="changeQty(product, +1)"><i class="fa fa-plus" aria-hidden="true"></i></span>
                                                    </div>
                                                </div>
                                            </td>
                                          <td class="price">
                                            <span>{{currency.format(parseInt(product.price) * parseInt(product.quantity))}}</span>
                                          </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="col-12 col-lg-4">
                            <div class="cart-summary">
                                <h5>Cart Total</h5>
                                <ul class="summary-table">
                                    <li><span>subtotal:</span> <span>{{currency.format(totalPrice)}}</span></li>
                                    <li><span>delivery:</span> <span>Free</span></li>
                                    <li><span>total:</span> <span>{{currency.format(totalPrice)}}</span></li>
                                </ul>
                                <div class="cart-btn mt-100">
                                    <router-link :to="{name:'Checkout'}" class="btn amado-btn w-100 padding-top-12">Checkout</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
    </div>
</template>

<script>
import Checkout from '@/components/Checkout'
import LeftBar from "./LeftBar"
import Footer from "./Footer"
export default {
    name: 'Cart',
    data(){
        return {
            msg: 'Cart',
          order_products: []
        }
    },
    components: { 
        Checkout,
      LeftBar,
      Footer
    },
  mounted() {
    this.order_products = this.$store.state.orderList
    console.log( this.order_products)

  },

  computed: {
      totalPrice : function () {
        let total = 0
        this.order_products.forEach(o => {
          total += parseInt(o.price) * o.quantity
        })
        return total
      }
  },

  methods: {
    changeQty(product, qty) {
      let re = parseInt(product.quantity) + qty
      if (re > 0) {
        product.quantity = re
      }
      else {
        let check = confirm("Are you want to delete this product from cart!!")
        if(check) {
          let index = this.order_products.indexOf(product)
          if(index > -1) {
            this.order_products.splice(index, 1)
          } else {
            alert("Something error !!")
          }
        }
      }
      window.localStorage.setItem('orderList', JSON.stringify(this.order_products))
    }
  }
}
</script>

<style scoped>

</style>
