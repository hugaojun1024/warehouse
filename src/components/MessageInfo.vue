<template>
  <div>
    <div class="header">
      <HeaderComp></HeaderComp>
    </div>
    <div class="content">
      <div class="message-title">
        <h3>{{messageInfo.messageTitle}}</h3>
      </div>
      <div class="message-time-from">
        <span>{{messageInfo.messageTime}}</span>
        <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;来自：{{messageInfo.messageFrom}}</span>
      </div>
      <div class="message-content">
        <p>{{messageInfo.messageContext}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComp from "@/components/HeaderComp.vue";
import axios from "axios";
export default {
  name: "MessageInfo",
  components:{
    HeaderComp
  },
  data(){
    return {
      messageInfo:{
        messageId:2,
        messageTitle:'到货信息提醒推送2',
        messageContext:'通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容',
        messageTime:'2022-12-16',
        messageFrom:'管理员'
      },
      messageId:0
    }
  },
  created() {
    this.messageId = this.getParam('messageId')
    this.load()

  },
  methods:{
    load(){
      //向服务器请求获取这条通知的具体信息
      axios.request().get("url",{
        param:{
          messageId:this.messageId
        }
      }).then(res=>{
        this.messageInfo = res.data
      })
    },
    getParam(par){
      //获取当前URL
      let local_url = document.location.href;
      //获取要取得的get参数位置
      let get = local_url.indexOf(par +"=");
      if(get == -1){
        return false;
      }
      //截取字符串
      let get_par = local_url.slice(par.length + get + 1);
      //判断截取后的字符串是否还有其他get参数
      let nextPar = get_par.indexOf("&");
      if(nextPar != -1){
        get_par = get_par.slice(0, nextPar);
      }
      return get_par;
    }
  }
}
</script>

<style scoped>
  .header{
    height: 60px;
    width: 100%;
  }
  .content .message-title{
    width: 100%;
    text-align: center;
    line-height: 80px;
    font-size: 20px;
    font-weight: lighter;
  }
  .content .message-time-from{
    width: 100%;
    text-align: center;
    color: #9A9A9A;
  }
  .content .message-content{
    width: 80%;
    padding-top: 30px;
    line-height: 26px;
    font-size: 15px;
    margin: 0 auto;
  }
</style>
