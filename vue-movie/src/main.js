import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(ElementUI);

// 请求绑定Vue原型属性上面，方便使用
Vue.prototype.$http = axios;

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
