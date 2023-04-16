import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入全局样式表
import './assets/css/global.css'
import './assets/fonts/iconfont.css'

import axios from 'axios'
// 配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:3007/api/'
Vue.prototype.$http = axios
Vue.config.productionTip = false
//
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
