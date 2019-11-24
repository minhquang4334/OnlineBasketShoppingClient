<template>
  <div>
    <div class="limiter">
      <div class="container-login100" style="background-image: url('/static/img/bg-01.jpg');">
        <div class="wrap-login100">
          <div class="login100-form validate-form">
            <span class="login100-form-logo">
              <i class="zmdi zmdi-landscape"></i>
            </span>

            <span class="login100-form-title p-b-34 p-t-27">
              Log in
            </span>

            <div class="wrap-input100 validate-input" data-validate = "Enter username">
              <input class="input100" type="text" name="email" placeholder="Email" v-model="email">
              <span class="focus-input100" data-placeholder=""></span>
            </div>

            <div class="wrap-input100 validate-input" data-validate="Enter password">
              <input class="input100" type="password" name="pass" placeholder="Password" v-model="password">
              <span class="focus-input100" data-placeholder=""></span>
            </div>

            <div class="contact100-form-checkbox">
              <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me">
              <label class="label-checkbox100" for="ckb1">
                Remember me
              </label>

            </div>
            <div class="contact100-form-checkbox">
              <label class="cursor-pointer">
                Sign Up
              </label>
            </div>


            <div class="container-login100-form-btn">
              <button class="login100-form-btn" @click="login">
                Login
              </button>
            </div>

            <div class="text-center p-t-90">
              <a class="txt1" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="dropDownSelect1"></div>
  </div>

</template>
<script>
  import {post} from '../helper/request'
export default {
  data() {
    return {
      email: '',
      password: '',
      fail_msg: '',
      success_msg: '',
    }
  },
  methods: {
    login() {
      let payload = {
        email: this.email,
        password: this.password
      }
      let url = process.env.api_host + '/user/login'
      post(url, payload).then((res) => {
        let token = res.data.token
        console.log(token)
        this.$store.dispatch('auth/saveToken', token).then(res => {
        }).catch((err) => {
            console.log(err);
          }
        );
        this.$store.dispatch('auth/fetchUser')
          .then(() => {
            this.$notify({
              group: 'foo',
              type: 'success',
              title: 'Welcome ' + this.$store.state.auth.user.name,
              text: 'Let Order Your Food',
              duration: 5000,
              speed: 1000
            });
            this.$router.push({name: 'HelloWorld'});

          })
          .catch(() => {
            this.isLogin = false;
            this.$notify({
              group: 'foo',
              type: 'error',
              title: 'Login Failed',
              text: 'Something error when login',
              duration: 5000,
              speed: 1000
            });
          });

      })
        .catch(() => {
          this.$notify({
            group: 'foo',
            type: 'error',
            title: 'Login Failed',
            text: 'Login Failed',
            duration: 5000,
            speed: 1000
          });
        })
    }
  }
}
</script>
