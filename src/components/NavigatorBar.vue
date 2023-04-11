<template>
  <div class="footer">
    <div class="footer-xx">
      <ul>
        <a href="/">
          <li class="iconfont icon-shouye"><span>首页</span></li>
        </a>
        <a href="/message">
          <li class="iconfont icon-xiaoxi"><span>消息</span></li>
        </a>
        <a href="/loginUser">
          <li class="iconfont icon-31wode"><span>我的</span></li>
        </a>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: "NavigatorBar"
}
</script>

<style lang="less" scoped>
  .footer {
    height: 60px;
    background-color: #ff0000;
  }
  .footer-xx {
    //background-color: #2b4b6b;
    text-align: center;
  }
  .footer-xx ul {
    display: inline-block;
  }
  .footer-xx ul li{
    float: left;
    width: 50px;
    height: 50px;
    /*background-color: #42b983;*/
    margin-right: 10px;
    margin-right: 74px;
    margin-bottom: 15px;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 40px;
  }
  .footer-xx ul li > span{
    text-align: center;
    font-size: 15px;
  }

</style>
