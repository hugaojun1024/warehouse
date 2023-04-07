<template>
  <div class="Mess-box">
    <ul>
      <li>
        <div class="w">
          <div class="iconfont icon-shouye"></div>
        </div>
        <div class="links">4567</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MessageMenu'
}
</script>

<style lang="less" scoped>
  .Mess-box {
    background-color: pink;
  }
  .Mess-box ul {
    float: left;
  }
  .Message {
    height: 124px;
  }
  .icon {
    float: left;
  }
  .links {
    float: right;
  }
</style>
