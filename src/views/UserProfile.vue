<template>
  <div>
    <div class="header">
      <HeaderComp></HeaderComp>
    </div>
    <div class="content">
      <img class="avatar" src="../assets/erweima_logo1.png" alt="avatar" width="200">
      <p class="username">{{userLoginInfo.nickname}}</p>
      <button class="button-option first" @click="contactUs">联系我们</button>
      <button class="button-option" onclick="window.location.href='/SuggestionsOffer'">反馈建议</button>
      <button class="button-option" @click="aboutApp">关于软件</button>
      <button class="redBtn" @click="logout()">退出登陆</button>
    </div>
    <div class="footer">
      <NavigatorBar index="3"></NavigatorBar>
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
  data(){
    return {
      //这段代码是将本地存储中的userLoginInfo数据项解析为JSON格式，
      // 并将解析后的结果赋值给userLoginInfo对象。如果本地存储中不存在userLoginInfo，则将userLoginInfo对象初始化为空对象 {}。
      userLoginInfo: localStorage.getItem("userLoginInfo") ? JSON.parse(localStorage.getItem("userLoginInfo")): null,
      token: localStorage.getItem("token")
    }
  },
  created() {
    if (this.userLoginInfo == null || this.token == null ){
      this.$router.push("/loginUser")
    }
  },
  mounted() {
  },
  methods:{
    logout(){
      //清除本地保存的用户登录信息
      if (localStorage.getItem("token") != null || localStorage.getItem("userLoginInfo") != null){
        localStorage.removeItem("token")
        localStorage.removeItem("userLoginInfo")
      }
      this.$router.push("/loginUser")
    },
    contactUs(){
      this.$router.push("/contact_us")
    },
    aboutApp(){
      this.$router.push("/about_app")
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
  .avatar{
    border: 2px solid #eee;
  }
</style>
