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
                                    <li class="breadcrumb-item active" aria-current="page">white modern Basket</li>
                                </ol>
                            </nav>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 col-lg-7">
                            <div class="single_product_thumb">
                                <div id="product_details_slider" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                        <li class="active" data-target="#product_details_slider" data-slide-to="0" style="background-image: url(/static/img/product-img/pro-big-1.jpg);">
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
                                            <a class="gallery_img" href="static/img/product-img/pro-big-1.jpg">
                                                <img class="d-block w-100" src="static/img/product-img/pro-big-1.jpg" alt="First slide">
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
                                    <p class="product-price">$180</p>
                                    <router-link :to="{name:'Product'}">
                                        <h6>White Modern Basket</h6>
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
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?</p>
                                </div>

                                <!-- Add to Cart Form -->
                                <form class="cart clearfix" method="post">
                                    <div class="cart-btn d-flex mb-50">
                                        <p>Qty</p>
                                        <div class="quantity">
                                            <span class="qty-minus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 1 ) effect.value--;return false;"><i class="fa fa-caret-down" aria-hidden="true"></i></span>
                                            <input type="number" class="qty-text" id="qty" step="1" min="1" max="300" name="quantity" value="1">
                                            <span class="qty-plus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"><i class="fa fa-caret-up" aria-hidden="true"></i></span>
                                        </div>
                                    </div>
                                    <div class="widget brands mb-50">
                                        <!-- Widget Title -->
                                        <h6 class="widget-title mb-30">Size</h6>

                                        <div class="widget-desc">
                                            <!-- Single Form Check -->
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="S">
                                                <label class="form-check-label" for="S">S</label>
                                            </div>
                                            <!-- Single Form Check -->
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="M">
                                                <label class="form-check-label" for="M">M</label>
                                            </div>
                                            <!-- Single Form Check -->
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="L">
                                                <label class="form-check-label" for="L">L</label>
                                            </div>
                                            <!-- Single Form Check -->
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="O">
                                                <label class="form-check-label" for="O">O</label>
                                            </div>
                                            <!-- Single Form Check -->
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="XL">
                                                <label class="form-check-label" for="XL">XL</label>
                                            </div>
                                            <!-- Single Form Check -->
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="XXL">
                                                <label class="form-check-label" for="XXL">XXL</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="widget color mb-50">
                                        <!-- Widget Title -->
                                        <h6 class="widget-title mb-30">Color</h6>

                                        <div class="widget-desc">
                                            <ul class="d-flex">
                                                <li><a href="#" class="color1"></a></li>
                                                <li><a href="#" class="color2"></a></li>
                                                <li><a href="#" class="color3"></a></li>
                                                <li><a href="#" class="color4"></a></li>
                                                <li><a href="#" class="color5"></a></li>
                                                <li><a href="#" class="color6"></a></li>
                                                <li><a href="#" class="color7"></a></li>
                                                <li><a href="#" class="color8"></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <button type="submit" name="addtocart" value="5" class="btn amado-btn">Add to cart</button>
                                </form>

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
export default {
    data(){
        return {
            msg: 'Product'
        }
    },
    components: { 
        Cart,
        Checkout,
        Shop,
      LeftBar,
      Footer
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
    
    @media (min-width: 768px)
    .col-md-6 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
        flex: 0 0 100%;
        max-width: 100%;
    }
</style>
