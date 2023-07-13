import Vue from 'vue'
import App from './App.vue'
import router from './router'
import jquery from 'jquery'
Vue.prototype.$ = jquery
import jsQR from 'jsqr/dist/jsQR.js';
import './plugins/element.js'
// 导入全局样式表
import './assets/css/global.css'
import './assets/fonts/iconfont.css'
import request from "../utils/request";
import request2 from "../utils/request"

// 配置请求的根路径
Vue.prototype.request = request
Vue.config.productionTip = false
//
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
