<template>
  <el-container class="home-container">
    <el-header>
      <HeaderCompHasExit url="/"></HeaderCompHasExit>
    </el-header>
    <div class="content">
      <div class="message-content">
        <div class="message-item" v-for="item in messageData" :key="item.messageId">
          <a :href="'/message_info?messageId=' + item.messageId + '&mainId=' + item.mainId">
            <div class="message-img">
              <img style="margin-left: 30px" src="../assets/message.png" width="30px" height="30px">
            </div>
            <div class="message-text">
              <ul style="list-style-type:none">
                <li><span style="font-weight: bolder; font-size: 14px;">订单号：{{ item.main.purcOrderId }}</span></li>
                <li><span style="font-size: 13px; color: #828282">来自：{{ item.main.recCreator }}</span></li>
                <li><p style="margin-top: 16px">到货时间：{{ item.main.arrivalDate | formatDate }}</p></li>
              </ul>
            </div>
          </a>
        </div>
      </div>
    </div>
  </el-container>
</template>

<script>
import HeaderCompHasExit from '@/components/HeaderCompHasExit'
import NavigatorBar from "@/components/NavigatorBar.vue";

export default {
  name: "MessageArrival",
  components: {
    HeaderCompHasExit,
    NavigatorBar
  },
  data() {
    return {
      messageData: []
    }
  },
  created() {
    this.load()
  },
  methods: {
    load() {
      this.loading = true
      this.request.get("/point/get_messages").then((res) => {
        this.messageData = res.data.data.reverse()
        console.log(this.messageData)
      }).finally(()=>{
      })
      this.loading = false
    }
  },
  // 在Vue组件的`filters`选项中定义过滤器
  filters: {
    formatDate(value) {
      if (!value) return ''; // 处理空值情况

      // 将时间字符串截取为年月日格式
      const year = value.substring(0, 4);
      const month = value.substring(4, 6);
      const day = value.substring(6, 8);
      return `${year}-${month}-${day}`;
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

.header {
  height: 60px;
  width: 100%;
}

.content {
  width: 100%;
}

.content .message-content {
  width: 100%;
  height: calc(100vh - 120px);
}

.content .message-item {
  height: 120px;
  border-bottom: 3px solid #eee;
}

.content .message-img {
  padding-top: 38px;
  float: left;
  width: 25%;
}

.content .message-text {
  padding-top: 20px;
  float: left;
  width: 75%;
}
</style>
