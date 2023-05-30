<template>
  <div class="footer">
    <div class="footer-xx">
      <ul>
        <a href="/" :style="home">
          <li class="iconfont icon-shouye"><span>首页</span></li>
        </a>
        <a :style="message" href="/message">
          <li class="iconfont icon-code"><span>扫描资产码</span></li>
        </a>
        <a :style="profile" href="/user_profile">
          <li class="iconfont icon-31wode"><span>我的</span></li>
        </a>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
    name: "NavigatorBar",
    props:['index'],
    created() {
      this.init()
    },
    data(){
      return {
        Index:this.index,
        home:'color: #ccc',
        message:'color: #ccc',
        profile:'color: #ccc'
      }
    },
    methods:{
      init(){
        if (this.index == 1){
          //首页
          this.home = 'color: #fff'
        } else if(this.index == 2){
          //消息
          this.message = 'color: #fff'
        } else if(this.index == 3){
          // 个人中心
          this.profile = 'color: #fff'

        }
      }
    }
}
</script>

<style lang="less" scoped>
  .footer {
    position: fixed; /*or前面的是absolute就可以用*/
    bottom: 0px;
    height: 60px;
    width: 100%;
    background-color: #ff0000;
  }
  .footer-xx {
    //background-color: #2b4b6b;
    //text-align: center;
    display: flex; /* 将footer-xx元素变为弹性容器 */
    justify-content: center; /* 水平居中其内部的ul元素 */
  }
  .footer-xx ul {
    //display: inline-block;
    display: flex; /* 将ul元素变为弹性容器 */
    justify-content: center; /* 水平居中ul元素中的li元素 */
  }
  .footer-xx ul li{
    //float: left;
    width: 80px;
    height: 50px;
    ///*background-color: #42b983;*/
    //margin-right: 67px;
    //margin-bottom: 15px;
    //margin-top: 5px;
    //display: flex;
    flex-direction: column;
    //justify-content: center;
    //align-items: center;
    font-size: 40px;
    display: flex; /* 将li元素变为弹性容器 */
    justify-content: center; /* 水平居中其内部的文本 */
    align-items: center; /* 垂直居中文本 */
    margin: 4px 40px; /* 可选：添加水平间距 */
  }
  .footer-xx ul li > span{
    text-align: center;
    font-size: 15px;
  }

</style>
