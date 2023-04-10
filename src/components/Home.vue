<template>
  <el-container class="home-container">
    <!--头部区域-->
    <el-header>
      <div>
        <img src="../assets/erweima_logo1.png" alt="" height="50">
        <span>资产全链条管理平台</span>
      </div>
    </el-header>
    <!--页面主体区-->
    <el-main>
      <Carousel></Carousel>
      <div class="box">
        <div class="box-bd">
          <ul>
            <li style="background-image: linear-gradient(#7EC7F6,#4780EC);">
              <img src="../assets/库存查询.png">
              <span>库存信息查询</span>
            </li>
            <li style="background-image: linear-gradient(#7FE6E6,#50968B)">
              <img src="../assets/预警提醒.png">
              <span>库存预警提醒</span>
            </li>
            <li style="background-image: linear-gradient(#EA4826,#F09837)">
              <img src="../assets/扫码.png">
              <span>扫描资产码</span>
            </li>
            <li style="background-image: linear-gradient(#DE868F,#BD3124)">
              <img src="../assets/意见反馈.png">
              <span>建言献策</span>
            </li>
          </ul>
        </div>
      </div>
    </el-main>
    <!--底部区域-->
    <el-footer>
      <NavigatorBar></NavigatorBar>
    </el-footer>
  </el-container>
</template>

<script>
import Carousel from '@/components/CarouselView'
import NavigatorBar from "@/components/NavigatorBar.vue";
export default {
  name: 'HomeVue',
  components: {
    Carousel,
    NavigatorBar
  }
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
  }
  .box {
    margin-top: 30px;
    width: 414px;
  }
  .box-bd ul {
    width: 380px;
  }
  .box-bd ul li {
    float: left;
    width: 110px;
    height: 110px;
    margin-right: 50px;
    margin-bottom: 15px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > img {
      width: 70px;
      height: 70px;
      display: block;
    }
    > span {
      text-align: center;
      margin: 5px;
    }
  }
  .footer {
    height: 60px;
    border: 1px;
    background-color: #ff0000;
  }
  .footer-xx {
    margin-top: 2px;
    background-color: #2b4b6b;
  }
  .footer-xx ul li{
    float: left;
    width: 50px;
    height: 50px;
    //background-color: #42b983;
    margin-right: 74px;
    margin-bottom: 15px;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    > span {
      text-align: center;
      font-size: 15px;
    }
  }
</style>
