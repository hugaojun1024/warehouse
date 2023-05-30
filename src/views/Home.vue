<template>
  <el-container class="home-container">
    <!--头部区域-->
    <el-header>
      <HeaderComp></HeaderComp>
    </el-header>
    <!--页面主体区-->
    <el-main>
      <Carousel></Carousel>
      <div class="box">
        <div class="box-bd">
          <ul>
            <a href="/messageArrival">
              <li style="background-image: linear-gradient(#7ef6d6,#47ec94);">
                <img src="../assets/已到货.png">
                <span>物资到货信息</span>
              </li>
            </a>
            <a href="/messageTransfer">
              <li style="background-image: linear-gradient(#b7b33b,#bdec47);">
                <img src="../assets/调拨入库.png">
                <span>物资调拨信息</span>
              </li>
            </a>
            <a href="/stockInquiry">
              <li style="background-image: linear-gradient(#7EC7F6,#4780EC);">
                <img src="../assets/库存查询.png">
                <span>库存信息查询</span>
              </li>
            </a>
            <a href="/inventoryWarning">
              <li style="background-image: linear-gradient(#d5a1f7,#b76de7)">
                <img src="../assets/预警提醒.png">
                <span>物资库存预警</span>
              </li>
            </a>
            <a href="/zicanView">
              <li style="background-image: linear-gradient(#DE868F,#bd4c40)">
                <img src="../assets/资产 (1).png">
                <span>固定资产查询</span>
              </li>
            </a>
            <a v-if="suggestViewFlag" href="/suggestView">
              <li style="background-image: linear-gradient(#efb73f,#b7933b)">
                <img src="../assets/意见反馈.png">
                <span>反馈建议专栏</span>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </el-main>
    <!--底部区域-->
    <el-footer>
      <NavigatorBar index="1"></NavigatorBar>
    </el-footer>
  </el-container>
</template>

<script>
import NavigatorBar from "@/components/NavigatorBar.vue";
import Carousel from '@/components/CarouselView';
import HeaderComp from '@/components/HeaderComp';
export default {
  name: 'HomeVue',
  components: {
    Carousel,
    NavigatorBar,
    HeaderComp
  },
  data(){
    return{
      suggestViewFlag:false,
      userLoginInfo: localStorage.getItem("userLoginInfo") ? JSON.parse(localStorage.getItem("userLoginInfo")):{}
    }
  },
  created() {
    if (this.userLoginInfo.userId == null){
      this.$router.push("/loginUser")
    }
  },
  mounted() {
    if (this.userLoginInfo.role == 1){
      this.suggestViewFlag = true
    }
  }
}
</script>

<style lang="less" scoped>
  .home-container {
    height: 100%;
  }
  .el-header {
    padding: initial;
  }
  .box {
    margin-top: 30px;
    padding: 20px 27px;
  }
  .box-bd {
    //text-align: center;
  }
  .box-bd ul {
    //width: 380px;
    display: inline-block;
    //display: flex; /* 将ul元素变为弹性容器 */
    //justify-content: center; /* 水平居中ul元素中的li元素 */
  }
  .box-bd ul li {
    float: left;
    width: 110px;
    height: 110px;
    //margin-left: 2px;
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
