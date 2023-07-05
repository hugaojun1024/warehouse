<template>
  <div>
    <el-header>
      <HeaderCompHasExit url="/"></HeaderCompHasExit>
    </el-header>
    <div class="content">
      <div class="message-content">
        <div class="message-item" v-for="item in messageData">
          <a :href="'/message_info?messageId=' + item.messageId">
            <div class="message-img">
              <img style="margin-left: 30px" src="../assets/message.png" width="30px" height="30px">
            </div>
            <div class="message-text">
              <span style="font-weight: bolder">{{item.messageTitle}}</span>
              <span style="font-size: 13px; margin-left: 50px;color: #9A9A9A">{{item.messageTime}}</span>
              <p style="margin-top: 20px">{{item.messageTitle}}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCompHasExit from '@/components/HeaderCompHasExit'
import NavigatorBar from "@/components/NavigatorBar.vue";

export default {
  name: "MessageArrival",
  components:{
    HeaderCompHasExit,
    NavigatorBar
  },
  created() {
    if (this.userLoginInfo.userId == null){
      this.$router.push("/loginUser")
    }
  },
  data(){
    return {
      userLoginInfo: localStorage.getItem("userLoginInfo") ? JSON.parse(localStorage.getItem("userLoginInfo")):{},
      messageData:[
        {
          messageId:1,
          messageTitle:'到货信息提醒推送1',
          messageContext:'通知内容',
          messageTime:"2023月5月1日",
          messageFrom:'管理员'
        },
        {
          messageId:2,
          messageTitle:'到货信息提醒推送2',
          messageContext:'通知内容',
          messageTime:'2023月5月1日',
          messageFrom:'管理员'
        },
        {
          messageId:3,
          messageTitle:'到货信息提醒推送3',
          messageContext:'通知内容',
          messageTime:'2023月5月1日',
          messageFrom:'管理员'
        }
      ]
    }
  }
}

let websocket = null;

//判断当前浏览器是否支持WebSocket
if('WebSocket' in window){
  websocket = new WebSocket("ws://localhost:8081/api/websocket");
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

</script>

<style scoped>

.el-header {
  padding: initial;
}

.header{
  height: 60px;
  width: 100%;
}
.content{
  width: 100%;
}

.content .message-content{
  width: 100%;
  height: calc(100vh - 120px);
}
.content .message-item{
  height: 120px;
  border-bottom: 3px solid #eee;
}
.content .message-img{
  padding-top: 38px;
  float: left;
  width: 25%;
}
.content .message-text{
  padding-top: 20px;
  float: left;
  width: 75%;
}
</style>
