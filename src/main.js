import Vue from 'vue'
import App from './App.vue'
import router from './router'
import FastClick from 'fastclick'
// import '../static/css/iconfont.css'

import '../static/css/reset.css'
FastClick.attach(document.body);
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router, //使用上vue-router
}).$mount('#app')
