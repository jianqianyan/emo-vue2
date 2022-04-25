import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'

// 引入ElementUI
Vue.use(ElementUI);
Vue.config.productionTip = false

// 引入axios
import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials=true;

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
