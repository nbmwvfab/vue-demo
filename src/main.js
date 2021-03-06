import Vue from 'vue'
import App from './App.vue'
import router from './router'
import FastClick from 'fastclick'
import store from './store/index'
// import '../static/css/iconfont.css'
import {Button} from "mint-ui"
import '../static/css/reset.css'
import './mock/mockServer'

FastClick.attach(document.body);
Vue.config.productionTip = false

Vue.use(Button)
new Vue({
    render: h => h(App),
    router, //使用上vue-router
    store,
}).$mount('#app')
