import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from './components/common/toast'
import Fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

// 安装插件
Vue.use(toast);
// 使用图片懒加载插件
Vue.use(VueLazyLoad, {
  loading: require('assets/img/common/placeholder-img.gif'),
  preload: 1.2
})

// 使用fastclick插件
Fastclick.attach(document.body);

Vue.config.productionTip = false

// 事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
