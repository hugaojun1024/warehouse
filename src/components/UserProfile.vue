<template>
  <div>
    <div class="header">
      <HeaderComp></HeaderComp>
    </div>
    <div class="content">
      <div class="avatar">
        <img src="../assets/avatar.png" alt="avatar" width="200">
      </div>
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
    background-color: #42b983;
    text-align: center;
  }
  .footer{
    height: 60px;
    width: 100%;
  }
</style>
