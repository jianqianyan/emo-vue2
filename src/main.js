import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'

Vue.use(ElementUI);
Vue.config.productionTip = false

import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials=true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
