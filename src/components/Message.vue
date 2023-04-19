<template>
  <div>
    <div class="header">
      <HeaderComp></HeaderComp>
    </div>
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
    <div>
      <NavigatorBar></NavigatorBar>
    </div>
  </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp'
import NavigatorBar from "@/components/NavigatorBar.vue";
export default {
  name: "Message",
  components:{
    HeaderComp,
    NavigatorBar
  },
  data(){
    return {
      messageData:[
        {
          messageId:1,
          messageTitle:'到货信息提醒推送1',
          messageContext:'通知内容',
          messageTime:'2023-02-01',
          messageFrom:'管理员'
        },
        {
          messageId:2,
          messageTitle:'到货信息提醒推送2',
          messageContext:'通知内容',
          messageTime:'2022-12-16',
          messageFrom:'管理员'
        },
        {
          messageId:3,
          messageTitle:'到货信息提醒推送3',
          messageContext:'通知内容',
          messageTime:'2022-12-01',
          messageFrom:'管理员'
        }
      ]
    }
  }
}
</script>

<style scoped>
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
