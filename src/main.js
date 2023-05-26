import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/flexible'
import '@/asset/reset.scss'
import CountTo from 'vue-count-to'

Vue.config.productionTip = false
Vue.component('count-to', CountTo)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
