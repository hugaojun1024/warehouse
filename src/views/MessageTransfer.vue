<template>
  <div>
    <el-header>
      <HeaderCompHasExit url="/"></HeaderCompHasExit>
    </el-header>
    <div class="content">
      <div class="message-content">
        <div class="message-item" v-for="item in messageData" :key="item.transferId">
          <a :href="'/message_info2?transferId=' + item.transferId + '&mainId=' + item.mainId">
            <div class="message-img">
              <img style="margin-left: 30px" src="../assets/message.png" width="30px" height="30px">
            </div>
            <div class="message-text">
              <ul style="list-style-type: none">
                <li><span style="font-weight: bolder">调拨单号：{{ item.main.transferNo }}</span></li>
                <li><span style="font-size: 13px;font-weight: bold; color: #c00202; margin-top: 20px;">调拨项数：{{ item.main.num }} 项</span></li>
                <!--<p style="margin-top: 20px">{{ item.messageTitle }}</p>-->
              </ul>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCompHasExit from '@/components/HeaderCompHasExit'
import NavigatorBar from "@/components/NavigatorBar.vue";

export default {
  name: "MessageTransfer",
  components: {
    HeaderCompHasExit,
    NavigatorBar
  },
  created() {
    this.load()
  },
  data() {
    return {
      messageData: []
    }
  },
  methods: {
    load() {
      this.loading = true
      this.request.get("/point/get_transfer").then((res)=>{
        this.messageData = res.data.data.reverse()
        console.log(this.messageData[1].transferId)
        console.log(this.messageData[1].mainId)
        console.log(this.messageData)
      }).finally(()=>{
      })
      this.loading = false
    }
  }
}
</script>

<style scoped>
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
  height: 90px;
  border-bottom: 3px solid #eee;
}

.content .message-img {
  padding-top: 26px;
  float: left;
  width: 25%;
}

.content .message-text {
  padding-top: 20px;
  float: left;
  width: 75%;
}
</style>
