// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Notifications from 'vue-notification'
import axios from 'axios'
import store from './store/index'
Vue.config.productionTip = false
Vue.use(Notifications)

Vue.prototype.getLink = (link) => {
  return process.env.storage_host + link
}
Vue.prototype.currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0
})

Vue.prototype.set_colors = [
  {
    id: 1,
    class: 'color4'
  },
  {
    id: 2,
    class: 'color5'
  },
  {
    id: 3,
    class: 'color6'
  },
  {
    id: 4,
    class: 'color8'
  },
]

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
