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
                        <div class="checkout_details_area mt-50 clearfix">

                            <div class="cart-title">
                                <h2>Checkout</h2>
                            </div>

                            <form action="#" method="post">
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <input type="text" class="form-control" id="first_name" value="" placeholder="First Name" v-model="first_name" required>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <input type="text" class="form-control" id="last_name" value="" placeholder="Last Name" v-model="last_name" required>
                                    </div>
                                    <div class="col-12 mb-3">
                                        <input type="text" class="form-control" id="company" placeholder="Company Name" v-model="company_name" value="">
                                    </div>
                                    <div class="col-12 mb-3">
                                        <input type="email" class="form-control" id="email" placeholder="Email" value="" v-model="email" required>
                                    </div>
                                    <div class="col-12 mb-3">
                                        <div class="nice-select w-100" tabindex="0"><span class="current">Việt Nam</span>

                                        </div>
                                    </div>
                                    <div class="col-12 mb-3">
                                        <input type="text" class="form-control mb-3" id="street_address" placeholder="Address" value="" v-model="address" required>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <input type="text" class="form-control" id="zipCode" placeholder="Zip Code" v-model="zip_code" value="">
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <input type="text" class="form-control" id="phone_number" min="0" placeholder="Phone No" value="" v-model="phone" required>
                                    </div>
                                    <div class="col-12 mb-3">
                                        <textarea name="comment" class="form-control w-100" id="comment" cols="30" rows="10" placeholder="Leave a comment about your order" v-model="comment"></textarea>
                                    </div>

<!--                                    <div class="col-12">-->
<!--                                        <div class="custom-control custom-checkbox d-block mb-2">-->
<!--                                            <input type="checkbox" class="custom-control-input" id="customCheck2">-->
<!--                                            <label class="custom-control-label" for="customCheck2">Create an accout</label>-->
<!--                                        </div>-->
<!--                                        <div class="custom-control custom-checkbox d-block">-->
<!--                                            <input type="checkbox" class="custom-control-input" id="customCheck3">-->
<!--                                            <label class="custom-control-label" for="customCheck3">Ship to a different address</label>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                </div>
                            </form>
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

                            <div class="payment-method">
                                <!-- Cash on delivery -->
                                <div class="custom-control custom-checkbox mr-sm-2">
                                    <input type="checkbox" class="custom-control-input" id="cod" checked>
                                    <label class="custom-control-label" for="cod">Cash on Delivery</label>
                                </div>
                                <!-- Paypal -->
                                <div class="custom-control custom-checkbox mr-sm-2">
                                    <input type="checkbox" class="custom-control-input" id="paypal">
                                    <label class="custom-control-label" for="paypal">Paypal <img class="ml-15" src="static/img/core-img/paypal.png" alt=""></label>
                                </div>
                            </div>

                            <div class="cart-btn mt-100">
                                <span class="btn amado-btn w-100 padding-top-12" @click="checkout">Checkout</span>
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
import Cart from '@/components/Cart'
import Shop from '@/components/Shop'
import Product from '@/components/Product'
import LeftBar from "./LeftBar"
import Footer from "./Footer"
import {post} from "../helper/request"

export default {
    data(){
        return {
            msg: 'Checkout',
          order_products: [],
          first_name: '',
          last_name: '',
          company_name: '',
          email: '',
          address: '',
          zip_code: '',
          phone: '',
          comment: '',
          payment_id: Math.floor(Math.random() * 100000) + 100000

        }
    },
    components: { 
        Cart,
        Shop,
        Product,
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
      checkout() {
        let check = confirm("Are you sure to checkout!! total price is: " + this.totalPrice + '$')
        if(check) {
          if(!(this.first_name && this.last_name && this.email && this.address && this.phone)) {
            alert("Please fill in checkout form!!");
            return;
          }
          let url = process.env.api_host + "/order"
          let order = []
          this.order_products.forEach(o => {
            let tmp = {
              detail_model_id: o.model_detail_id,
              qty: o.quantity
            }
            order.push(tmp)
          })

          let payload = {
            receive_name: this.first_name + ' ' + this.last_name,
            company_name: this.company_name,
            email: this.email,
            address: this.address,
            zip_code: this.zip_code,
            phone_number: this.phone,
            comment: this.comment,
            payment_id: this.payment_id,
            payment_type_id: 1,
            shipping_type_id: 1,
            user_id: Math.floor(Math.random() * 50) + 1,
            price: this.totalPrice,
            status: 1,
            payload: order
          }
          post(url, payload).then(res => {
            console.log(res)
            alert("Checkout Successfully!! Please wait for 2,3 days for Grab can ship these products for you!")
            window.localStorage.removeItem('orderList')
            this.$store.state.orderList = []
            this.$router.push({
              name: 'Shop'
            })
          }).catch(err => {
            alert(err)
          })
        }
      }
  }
}
</script>

<style scoped>
    
</style>
