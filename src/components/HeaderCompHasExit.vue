<template>
  <div class="HeaderComp">
    <span class="iconfont icon-tuichu" @click="exitBtn(Urlto)"></span>
    <div class="content">
      <img src="../assets/erweima_logo1.png" alt="" height="50">
      <span class="title-text">资产全链条管理平台</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComp',
  props:['url'],
  data(){
    return{
      Urlto:this.url
    }
  },
  methods:{
    exitBtn(url){
      this.$router.push(url)
    }
  }
}
</script>

<style lang="less" scoped>
  .HeaderComp{
    height: 60px;
    width: 100%;
    background-color: #DB0039;
  }
  .content{
    width: 60%;
    margin:0 auto;
    padding-top: 5px;
  }
  .content img{
    float: left;
    margin-right: 10px;
  }
  .content .title-text {
    color: #ffffff;
    font-size: 20px;
    line-height: 50px;
  }
  .iconfont{
    color: #ffffff;
    font-size: 24px;
    position: fixed;
    top: 20px;
    left: 20px;
  }
</style>
