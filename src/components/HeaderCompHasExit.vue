<template>
  <el-container class="home-container">
    <el-header>
<!--      <li class="iconfont icon-tuichu"></li>-->
      <div>
        <img src="../assets/erweima_logo1.png" alt="" height="50">
        <span>资产全链条管理平台</span>
      </div>
    </el-header>
  </el-container>
</template>

<script>
export default {
  name: 'HeaderComp'
}
</script>

<style lang="less" scoped>
  .home-container {
    height: 100%;
  }
.el-header {
  background-color: #DB0039;
  display: flex;
  justify-content: center;
  //align-items: center;
  color: #ffffff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
  > li {
      background-color: #42b983;
      float: left;
      display: flex;
      list-style: none;
      width: 30px;
      height: 20px;
      margin-right: 12px;
      font-size: 20px;
      align-items: center;
    }
}
</style>
