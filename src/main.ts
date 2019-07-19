import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/reset.css';
import store from './store';
import axios, { AxiosInstance } from 'axios'
// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function(el) {
    // 聚焦元素
    el.focus()
  }
})
// Vue.use(v => {
//   v.prototype.$http = axios
// })
 Vue.prototype.$http = axios;

declare module 'Vue/types/vue' {
  interface Vue {
    $http: AxiosInstance
  }
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
