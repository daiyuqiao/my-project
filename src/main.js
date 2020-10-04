import Vue from 'vue'
import App from './App.vue'
// 引用element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 引入封装的router
// test3
import router from '@/router/index'

// 路由守卫 路由守卫
import Bus from '@/api/bus.js'
Vue.use(Bus)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
