<template>
  <div>
    <el-header>
      <HeaderCompHasExit url="/"></HeaderCompHasExit>
    </el-header>
    <div class="content">
      <div class="message-content">
        <div class="message-item" v-for="item in messageData">
          <a :href="'/message_info2?messageId=' + item.messageId">
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
  name: "MessageTransfer",
  components:{
    HeaderCompHasExit,
    NavigatorBar
  },
  created() {
    // if (this.userLoginInfo.userId == null){
    //   this.$router.push("/loginUser")
    // }
  },
  data(){
    return {
      userLoginInfo: localStorage.getItem("userLoginInfo") ? JSON.parse(localStorage.getItem("userLoginInfo")):{},
      messageData:[
        {
          messageId:1,
          messageTitle:'物资调拨信息提醒推送1',
          messageContext:'通知内容',
          messageTime:'2023月5月1日',
          messageFrom:'管理员'
        },
        {
          messageId:2,
          messageTitle:'物资调拨信息提醒推送2',
          messageContext:'通知内容',
          messageTime:'2023月5月1日',
          messageFrom:'管理员'
        },
        {
          messageId:3,
          messageTitle:'物资调拨信息提醒推送3',
          messageContext:'通知内容',
          messageTime:'2023月5月1日',
          messageFrom:'管理员'
        }
      ]
    }
  }
}
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
