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
              <li style="background-image: linear-gradient(#7ef6d6,#47ec94); position: relative;">
                <img src="../assets/已到货.png">
                <span>物资到货信息</span>
                <span v-if="newsFlag" class="new-message">有新信息</span>
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
              <li style="background-image: linear-gradient(#e76379,#ee8470)">
                <img src="../assets/资产 (1).png">
                <span>固定资产查询</span>
              </li>
            </a>
            <!--            <a v-if="suggestViewFlag" href="/suggestView">-->
            <!--              <li style="background-image: linear-gradient(#f2c047,#ee9446)">-->
            <!--                <img src="../assets/意见反馈.png">-->
            <!--                <span>反馈建议专栏</span>-->
            <!--              </li>-->
            <!--            </a>-->

            <!--    优化功能，改成普通用户能看见但是点击不进去        -->
            <a @click="handleClick" :aria-disabled="suggestViewFlag" :href="suggestViewFlag ? '/suggestView' : null">
              <li style="background-image: linear-gradient(#f2c047,#ee9446)">
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
  data() {
    return {
      suggestViewFlag: false,
      newsFlag: true,
      userLoginInfo: localStorage.getItem("userLoginInfo") ? JSON.parse(localStorage.getItem("userLoginInfo")) : {}
    }
  },
  methods: {
    handleClick() {
      // 进行权限检查，假设 isAdmin 表示当前用户是否为管理员
      const isAdmin = this.suggestViewFlag; // 根据实际情况设置管理员权限

      if (isAdmin) {
        // 执行点击事件的逻辑
        // null
      } else {
        // 非管理员提示信息
        this.$message.error("抱歉！您没有权限访问此功能，请升级您的权限");
      }
    }
  },
  created() {

    let websocket = null;

//判断当前浏览器是否支持WebSocket
    if ('WebSocket' in window) {
      websocket = new WebSocket("ws://localhost:8081/websocket");
    } else {
      alert('Not support websocket')
    }

//连接发生错误的回调方法
    websocket.onerror = function () {
      console.log("发生错误");
    };

//连接成功建立的回调方法
    websocket.onopen = function (event) {
      console.log("建立连接");
    }

//接收到消息的回调方法
    websocket.onmessage = function (event) {
      console.log("event.data" + event.data)
      this.messageData = event.data;
      localStorage.setItem("websData", this.messageData);
      // if (event.data != null) {
      //   this.newsFlag  === true
      // }
      // console.log(this.newsFlag)
      // setMessageInnerHTML(event.data);
      // $(".progress-bar").attr("style","width:"+event.data+"%")
    }

//连接关闭的回调方法
    websocket.onclose = function () {
      console.log("关闭连接");
    }

//监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
    window.onbeforeunload = function () {
      alert("已关闭连接");
      websocket.close();
    }

//将消息显示在网页上
    function setMessageInnerHTML(innerHTML) {
      document.getElementById('message').innerHTML += innerHTML + '<br/>';
    }

//关闭连接
    function closeWebSocket() {
      alert("已关闭连接");
      websocket.close();
    }
  },
  mounted() {
    if (this.userLoginInfo.role === 1) {
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

.el-footer {
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

.new-message {
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: red;
  color: white;
  padding: 5px;
  border-radius: 50%;
  font-size: 12px;
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

.footer-xx ul li {
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
