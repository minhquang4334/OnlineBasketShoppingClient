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
                    <a href="Shop"><img src="img/core-img/logo.png" alt=""></a>
                </div>
                <!-- Navbar Toggler -->
                <div class="amado-navbar-toggler">
                    <span></span><span></span><span></span>
                </div>
            </div>

            <left-bar/>

            <!-- Product Details Area Start -->
            <div class="single-product-area section-padding-100 clearfix">
                <div class="container-fluid">

                    <div class="row">
                        <div class="col-12">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb mt-50">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item"><a href="#">Furniture</a></li>
                                    <li class="breadcrumb-item"><a href="#">Baskets</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">{{product.name}}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 col-lg-7">
                            <div class="single_product_thumb">
                                <div id="product_details_slider" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                        <li class="active" data-target="#product_details_slider" data-slide-to="0" :style="{ 'background-image': 'url(' + getLink(product.image.url) + ')' }">
                                        </li>
                                        <li data-target="#product_details_slider" data-slide-to="1" style="background-image: url(/static/img/product-img/pro-big-2.jpg);">
                                        </li>
                                        <li data-target="#product_details_slider" data-slide-to="2" style="background-image: url(/static/img/product-img/pro-big-3.jpg);">
                                        </li>
                                        <li data-target="#product_details_slider" data-slide-to="3" style="background-image: url(/static/img/product-img/pro-big-4.jpg);">
                                        </li>
                                    </ol>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <a class="gallery_img" :href="getLink(product.image.url)">
                                                <img class="d-block w-100" :src="getLink(product.image.url)" alt="First slide">
                                            </a>
                                        </div>
                                        <div class="carousel-item">
                                            <a class="gallery_img" href="static/img/product-img/pro-big-2.jpg">
                                                <img class="d-block w-100" src="static/img/product-img/pro-big-2.jpg" alt="Second slide">
                                            </a>
                                        </div>
                                        <div class="carousel-item">
                                            <a class="gallery_img" href="static/img/product-img/pro-big-3.jpg">
                                                <img class="d-block w-100" src="static/img/product-img/pro-big-3.jpg" alt="Third slide">
                                            </a>
                                        </div>
                                        <div class="carousel-item">
                                            <a class="gallery_img" href="static/img/product-img/pro-big-4.jpg">
                                                <img class="d-block w-100" src="static/img/product-img/pro-big-4.jpg" alt="Fourth slide">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-5">
                            <div class="single_product_desc">
                                <!-- Product Meta Data -->
                                <div class="product-meta-data">
                                    <div class="line"></div>
                                    <p class="product-price">{{currency.format(product.price)}}</p>
                                    <router-link :to="{name:'Product', params: {id: product.id}}">
                                        <h6>{{product.name}}</h6>
                                    </router-link>
                                    <!-- Ratings & Review -->
                                    <div class="ratings-review mb-15 d-flex align-items-center justify-content-between">
                                        <div class="ratings">
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </div>
                                        <div class="review">
                                            <a href="#">Write A Review</a>
                                        </div>
                                    </div>
                                    <!-- Avaiable -->
                                    <p class="avaibility"><i class="fa fa-circle"></i> In Stock</p>
                                </div>

                                <div class="short_overview my-5">
                                    <p>{{product.description}}</p>
                                </div>

                                <!-- Add to Cart Form -->
                                <div class="cart clearfix">
                                    <div class="cart-btn d-flex mb-50">
                                        <p>Qty</p>
                                        <div class="quantity">
                                            <span class="qty-minus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 1 ) effect.value--;return false;"><i class="fa fa-caret-down" aria-hidden="true"></i></span>
                                            <input type="number" class="qty-text" id="qty" v-model="quanty" step="1" min="1" max="300" name="quantity" value="1">
                                            <span class="qty-plus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"><i class="fa fa-caret-up" aria-hidden="true"></i></span>
                                        </div>
                                    </div>
                                    <div class="widget brands mb-50">
                                        <!-- Widget Title -->
                                        <h6 class="widget-title mb-30">Size</h6>

                                        <div class="widget-desc">
                                            <!-- Single Form Check -->
                                            <div class="form-check"  v-for="size in sizes">
                                                <input class="form-check-input" type="radio" name="psize" :value="size.id" :id="size.size" v-model="selected_size">
                                                <label class="form-check-label" :for="size.size">{{(size.size)}}</label>
                                            </div>
<!--                                            &lt;!&ndash; Single Form Check &ndash;&gt;-->
<!--                                            <div class="form-check">-->
<!--                                                <input class="form-check-input" type="radio" value="M" id="M" name="psize">-->
<!--                                                <label class="form-check-label" for="M">M</label>-->
<!--                                            </div>-->
<!--                                            &lt;!&ndash; Single Form Check &ndash;&gt;-->
<!--                                            <div class="form-check">-->
<!--                                                <input class="form-check-input" type="radio" value="L" id="L" name="psize">-->
<!--                                                <label class="form-check-label" for="L">L</label>-->
<!--                                            </div>-->
<!--                                            &lt;!&ndash; Single Form Check &ndash;&gt;-->
<!--                                            <div class="form-check">-->
<!--                                                <input class="form-check-input" type="radio" value="XL" id="XL" name="psize">-->
<!--                                                <label class="form-check-label" for="XL">XL</label>-->
<!--                                            </div>-->
<!--                                            &lt;!&ndash; Single Form Check &ndash;&gt;-->
<!--                                            <div class="form-check">-->
<!--                                                <input class="form-check-input" type="radio" value="XXL" id="XXL" name="psize">-->
<!--                                                <label class="form-check-label" for="XXL">XXL</label>-->
<!--                                            </div>-->
                                        </div>
                                    </div>
                                    <div class="widget color mb-50">
                                        <!-- Widget Title -->
                                        <h6 class="widget-title mb-30">Color</h6>

                                        <div class="widget-desc">
                                            <ul class="d-flex">
                                                <li><a class="color4 cursor-pointer" @click="setColor(`Blue`)" :class="selected_color == `Blue` ? `border-color` : ``"></a></li>
                                                <li><a class="color5 cursor-pointer" @click="setColor(`Red`)" :class="selected_color == `Red` ? `border-color` : ``"></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <button type="submit" name="addtocart" value="5" class="btn amado-btn" @click="addToCart">Add to cart</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="row bootstrap snippets">
                <div class="col-md-6 col-md-offset-2 col-sm-12">
                    <div class="comment-wrapper">
                        <div class="panel panel-info">
                            <div class="panel-heading">
                                Comment panel
                            </div>
                            <div class="panel-body">
                                <textarea class="form-control" placeholder="write a comment..." rows="3"></textarea>
                                <br>
                                <button type="button" class="btn btn-info pull-right">Post</button>
                                <div class="clearfix"></div>
                                <hr>
                                <ul class="media-list">
                                    <li class="media">
                                        <a href="#" class="pull-left">
                                            <img src="https://bootdey.com/img/Content/user_1.jpg" alt="" class="img-circle">
                                        </a>
                                        <div class="media-body">
                                            <span class="text-muted pull-right">
                                                <small class="text-muted">30 min ago</small>
                                            </span>
                                            <strong class="text-success">@MartinoMont</strong>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Lorem ipsum dolor sit amet, <a href="#">#consecteturadipiscing </a>.
                                            </p>
                                        </div>
                                    </li>
                                    <li class="media">
                                        <a href="#" class="pull-left">
                                            <img src="https://bootdey.com/img/Content/user_2.jpg" alt="" class="img-circle">
                                        </a>
                                        <div class="media-body">
                                            <span class="text-muted pull-right">
                                                <small class="text-muted">30 min ago</small>
                                            </span>
                                            <strong class="text-success">@LaurenceCorreil</strong>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Lorem ipsum dolor <a href="#">#ipsumdolor </a>adipiscing elit.
                                            </p>
                                        </div>
                                    </li>
                                    <li class="media">
                                        <a href="#" class="pull-left">
                                            <img src="https://bootdey.com/img/Content/user_3.jpg" alt="" class="img-circle">
                                        </a>
                                        <div class="media-body">
                                            <span class="text-muted pull-right">
                                                <small class="text-muted">30 min ago</small>
                                            </span>
                                            <strong class="text-success">@JohnNida</strong>
                                            <p>
                                                Lorem ipsum dolor <a href="#">#sitamet</a> sit amet, consectetur adipiscing elit.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </div>
            <!-- Product Details Area End -->
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
import Checkout from '@/components/Checkout'
import Shop from '@/components/Shop'
import LeftBar from "./LeftBar"
import Footer from "./Footer"
import {get} from "../helper/request"
export default {
  data() {
    return {
      msg: 'Product',
      product_id: this.$route.params.id,
      colors: [],
      sizes: [],
      product_details: [],
      product: {},
      selected_size: 1,
      selected_color: "Blue",
      quanty: 1,
    }
  },
  components: {
    Cart,
    Checkout,
    Shop,
    LeftBar,
    Footer
  },
  mounted() {
    this.getInfo()
    this.getProductDetails()
  },

  methods: {
    getInfo() {
      let url = process.env.api_host + '/size_color'
      get(url).then((res) => {
        this.colors = res.data.colors
        this.sizes = res.data.sizes
      })
    },

    getProductDetails() {
      let url = process.env.api_host + '/info?id=' + this.product_id
      get(url).then((res) => {
        this.product_details = res.data.model_detail
        this.product = res.data.model
      })
    },

    setColor(color) {
      this.selected_color = color
    },

    addToCart() {
      let quantity = document.getElementById('qty').value

      let order = {
        name: this.product.name,
        id: this.product.id,
        image: this.product.image.url,
        size: this.selected_size,
        color: this.selected_color,
        price: this.product.price,
        quantity: quantity,
        model_detail_id: this.product_details[0].id ? this.product_details[0].id : 1
      }
      let o =  this.$store.state.orderList.filter((p) => p.id === order.id)
      if(o.length) {
        o[0].quantity = parseInt(o[0].quantity) +  parseInt(order.quantity)
      } else {
        this.$store.state.orderList.push(order)
      }
      window.localStorage.setItem('orderList', JSON.stringify(this.$store.state.orderList))
      alert("Add this product to cart successfully")
      console.log( this.$store.state.orderList)
      this.$notify({
        group: 'foo',
        type: 'success',
        title: 'Add to Cart Success',
        text: 'Successfully',
        duration: 3000,
        speed: 1000
      });
      this.$router.push({
        name: 'Cart'
      })
    }
  }
}
</script>

<style scoped>
    .form-check {
    position: relative;
    display: inline-block;
    }
    
    .form-check-label {
        padding-right: 1.25rem;
        padding-left: 1px;
        margin-bottom: 0;
    }
    
    body{margin-top:20px;}

    .comment-wrapper .panel-body {
        max-height:650px;
        overflow:auto;
    }

    .comment-wrapper .media-list .media img {
        width:64px;
        height:64px;
        border:2px solid #e5e7e8;
    }

    .comment-wrapper .media-list .media {
        border-bottom:1px dashed #efefef;
        margin-bottom:25px;
    }

    .border-color {
      border: 4px gold solid;
    }
    
    @media (min-width: 768px)
    .col-md-6 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
        flex: 0 0 100%;
        max-width: 100%;
    }
</style>
