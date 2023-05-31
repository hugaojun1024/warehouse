<template>
  <el-container class="home-container">
    <!--头部区域-->
    <el-header>
      <HeaderComp></HeaderComp>
    </el-header>
    <!--页面主体区-->
    <el-main>
      <div class="center">
        <img src="../assets/扫码.png" >
      </div>
    </el-main>
    <!--底部区域-->
    <el-footer>
      <NavigatorBar index="2"></NavigatorBar>
    </el-footer>
  </el-container>
</template>

<script>
import NavigatorBar from "@/components/NavigatorBar.vue";
import HeaderComp from '@/components/HeaderComp';
export default {
  name: "QRcode",
  components: {
    NavigatorBar,
    HeaderComp
  }
}
</script>

<style scoped>
.el-header {
  padding: initial;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh; /* 可以根据需要调整高度 */
}
</style>
