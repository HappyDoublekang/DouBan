// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'

import Api from '@/extend/api.js'

// 设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false
Vue.use(router);

// 请求绑定Vue属性上面，方便使用
Vue.prototype.$http = axios;
Vue.prototype.api = Api;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
