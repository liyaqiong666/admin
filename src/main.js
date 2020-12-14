import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
Vue.prototype.$axios = axios

import http from './http/http.js';
Vue.prototype.$http = http;

// import Vant from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Vant);

//引入Element-UI 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
