// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入路由器
import router from './router'
// 引入 Jquery
import jquery from 'jquery'
Vue.prototype.$ = jquery
import jsQR from 'jsqr/dist/jsQR.js';

// 引入Element组件
import './plugins/element.js'

// 导入全局样式表
import './assets/css/global.css'
import './assets/fonts/iconfont.css'

import request from "../utils/request";
// import request2 from "../utils/request"

// 配置请求的根路径
Vue.prototype.request = request

// 关闭Vue的生产提示
Vue.config.productionTip = false

// 创建Vm
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
