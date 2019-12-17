<template>
  <div class="amado_product_area section-padding-100">
    <div class="container-fluid">

      <div class="row">

        <!-- Single Product Area -->
        <div class="col-12 col-sm-6 col-md-12 col-xl-6" v-for="product in products">
          <div class="single-product-wrapper">
            <!-- Product Image -->
            <div class="product-img">
              <img :src="getLink(product.image.url)" alt="" class="image-max">
              <!-- Hover Thumb -->
            </div>

            <!-- Product Description -->
            <div class="product-description d-flex align-items-center justify-content-between">
              <!-- Product Meta Data -->
              <div class="product-meta-data">
                <div class="line"></div>
                <p class="product-price">{{currency.format(product.price)}}</p>
                <router-link :to="{name:'Product', params: {id: product.id}}" class="nav-link">
                  <h6>{{product.name}}</h6>
                </router-link>
              </div>
              <!-- Ratings & Cart -->
              <div class="ratings-cart text-right">
                <div class="ratings">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </div>
                <div class="cart">
                  <a href="cart.html" data-toggle="tooltip" data-placement="left" title="Add to Cart"><img src="static/img/core-img/cart.png" alt=""></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <!-- Pagination -->
          <nav aria-label="navigation">
            <ul class="pagination justify-content-end mt-50">
              <li class="page-item active"><a class="page-link" href="#">01.</a></li>
              <li class="page-item"><a class="page-link" href="#">02.</a></li>
              <li class="page-item"><a class="page-link" href="#">03.</a></li>
              <li class="page-item"><a class="page-link" href="#">04.</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {get} from "../helper/request"
  export default {
    data() {
      return {
        products: [],
        current_page: 1,
        per_page: 9
      }
    },

    mounted() {
      this.getListProducts()
    },


    methods: {
      getListProducts() {
        let url = process.env.api_host + '/list'
        get(url).then((res) => {
          this.current_page = res.data.current_page
          this.per_page = res.data.per_page
          this.products = res.data.entries
        })

      }
    }

  }
</script>

<style scoped>
  .image-max {
  / / increase if you have very small images display: block;
    margin: auto;

    height: auto;
    max-width: 400px;
    max-height: 330px;
    width: auto;
  }
</style>
