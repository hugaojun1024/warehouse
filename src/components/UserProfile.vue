<template>
  <div>
    <div class="header">
      <HeaderComp></HeaderComp>
    </div>
    <div class="content">
      <img class="avatar" src="../assets/avatar.png" alt="avatar" width="200">
      <p class="username">李明浩</p>
      <button class="button-option first">联系我们</button>
      <button class="button-option">反馈建议</button>
      <button class="button-option">关于软件</button>
      <button class="redBtn" @click="logout()">退出登陆</button>
    </div>
    <div class="footer">
      <NavigatorBar></NavigatorBar>
    </div>
  </div>
</template>

<script>
import HeaderCompHasExit from "@/components/HeaderCompHasExit.vue";
import HeaderComp from "@/components/HeaderComp.vue";
import NavigatorBar from "@/components/NavigatorBar.vue";

export default {
  name: "UserProfile",
  components: {
    HeaderCompHasExit,
    HeaderComp,
    NavigatorBar
  },
  methods:{
    logout(){
      this.$router.push("/loginUser")
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
    height: calc(100vh - 120px);
    text-align: center;
  }
  .footer{
    height: 60px;
    width: 100%;
  }
  .content .avatar{
    border-radius: 100px;
    margin-top: 66px;
  }
  .content .username{
    font-size: 22px;
    margin: 30px auto;
  }
  .button-option{
    width: 100%;
    height: 50px;
    background-color: #ffffff;
    border-bottom: 1px solid #999;
  }
  .first{
    border-top: 1px solid #999;
  }
</style>
