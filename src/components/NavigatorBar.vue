<template>
  <div class="footer">
    <div class="footer-xx">
      <ul>
        <li class="iconfont icon-shouye"><span>首页</span>
        </li>
        <li class="iconfont icon-xiaoxi"><span>消息</span>
        </li>
        <li class="iconfont icon-31wode"><span>我的</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigatorBar"
}
</script>

<style scoped>
  .footer {
    height: 60px;
    background-color: #ff0000;
  }
  .footer-xx {
    background-color: #2b4b6b;
  }
  .footer-xx ul li{
    float: left;
    width: 50px;
    height: 50px;
    /*background-color: #42b983;*/
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
