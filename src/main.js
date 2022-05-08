import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'

// 引入ElementUI
Vue.use(ElementUI);
Vue.config.productionTip = false

// 引入axios
import _axios from './until/_axios'
Vue.prototype.$axios = _axios

// 引入vuex
import Vuex from "vuex";
import store from "./store";
Vue.prototype.$store = store;
Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
