// import Vue from 'vue'
// import Vuex from 'vuex'
//
// Vue.use(Vuex)
//
// export default new Vuex.Store({
//   state: {
//     ws: null, //建立的连接
//     lockReconnect: false, //是否真正建立连接
//     timeout: 15000, //15秒一次心跳
//     timeoutObj: null, //心跳心跳倒计时
//     serverTimeoutObj: null, //心跳倒计时
//     timeoutnum: null, //断开 重连倒计时
//     msg: null //接收到的信息
//   },
//   getters: {
//     // 获取接收的信息
//     socketMsgs: state => {
//       return state.msg
//     }
//   },
//   mutations: {
//     //初始化ws 用户登录后调用
//     webSocketInit(state) {
//       let that = this
//       //this 创建一个state.ws对象【发送、接收、关闭socket都由这个对象操作】
//       state.ws = new WebSocket("ws://localhost:8081/websocket");
//       state.ws.onopen = function(res){
//         console.log("Connection success...");
//         /**
//          * 启动心跳检测
//          */
//         that.commit("start");
//       }
//       state.ws.onmessage = function(res){
//         if (res.data === "heartCheck") {
//           // 收到服务器信息，心跳重置
//           that.commit("reset");
//           console.log("socket-heartCheck");
//         }else{
//           state.msg = res;
//         }
//       }
//       state.ws.onclose = function(res){
//         console.log("Connection closed...");
//         //重连
//         that.commit('reconnect');
//       }
//       state.ws.onerror = function(res){
//         console.log("Connection error...");
//         //重连
//         that.commit('reconnect');
//       }
//     },
//     reconnect(state) {
//       //重新连接
//       let that = this;
//       if (state.lockReconnect) {
//         return;
//       }
//       state.lockReconnect = true;
//       //没连接上会一直重连,30秒重试请求重连，设置延迟避免请求过多
//       state.timeoutnum &&
//       clearTimeout(state.timeoutnum);
//       state.timeoutnum = setTimeout(() => {
//         //新连接
//         that.commit('webSocketInit')
//         state.lockReconnect = false;
//       }, 5000);
//     },
//     reset(state) {
//       //重置心跳
//       let that = this;
//       //清除时间
//       clearTimeout(state.timeoutObj);
//       clearTimeout(state.serverTimeoutObj);
//       //重启心跳
//       that.commit('start')
//     },
//     start(state) {
//       //开启心跳
//       var self = this;
//       state.timeoutObj &&
//       clearTimeout(state.timeoutObj);
//       state.serverTimeoutObj &&
//       clearTimeout(state.serverTimeoutObj);
//       state.timeoutObj = setTimeout(() => {
//         //这里发送一个心跳，后端收到后，返回一个心跳消息，
//         if (state.ws.readyState === 1) {
//           //如果连接正常
//           state.ws.send("heartCheck");
//         } else {
//           //否则重连
//           self.commit('reconnect');
//         }
//         state.serverTimeoutObj = setTimeout(function () {
//           //超时关闭
//           state.ws.close();
//         }, state.timeout);
//       }, state.timeout);
//     },
//   },
//   actions: {
//     webSocketInit({
//                     commit
//                   }, url) {
//       commit('webSocketInit', url)
//     },
//     webSocketSend({
//                     commit
//                   }, p) {
//       commit('webSocketSend', p)
//     }
//   }
// })

let websocket = null;

//判断当前浏览器是否支持WebSocket
if('WebSocket' in window){
  websocket = new WebSocket("ws://localhost:8081/websocket");
}else{
  alert('Not support websocket')
}

//连接发生错误的回调方法
websocket.onerror = function(){
  console.log("发生错误");
};

//连接成功建立的回调方法
websocket.onopen = function(event){
  console.log("建立连接");
}

//接收到消息的回调方法
websocket.onmessage = function(event){
  console.log("event.data" + event.data)
  this.messageData = event.data;
  localStorage.setItem("websData", this.messageData);
  // setMessageInnerHTML(event.data);
  // $(".progress-bar").attr("style","width:"+event.data+"%")
}

//连接关闭的回调方法
websocket.onclose = function(){
  console.log("关闭连接");
}

//监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
window.onbeforeunload = function(){
  alert("已关闭连接");
  websocket.close();
}

//将消息显示在网页上
function setMessageInnerHTML(innerHTML){
  document.getElementById('message').innerHTML += innerHTML + '<br/>';
}

//关闭连接
function closeWebSocket(){
  alert("已关闭连接");
  websocket.close();
}

// //开始
// $("#btn").click(function(){
//   $.ajax({
//     url: "http://localhost:8089/codeController/jinDuTiao",
//     type:'post',
//     success: function(HTML) {//返回页面内容
//       console.log(HTML);
//     }
//   });
// })
