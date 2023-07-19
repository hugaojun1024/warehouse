<template>
  <div>
    <div class="header">
      <HeaderCompHasExit :url="'/messageArrival'"></HeaderCompHasExit>
    </div>
    <div class="content">
      <div class="message-title">
        <h3>订单号：{{ messageInfo.main.purcOrderId }}</h3>
      </div>
      <div class="message-time-from">
        <span>到货时间：{{ messageInfo.main.arrivalDate | formatDate }}</span>
        <span style="margin-left: 6px">来自：{{ messageInfo.main.recCreator }}</span>
      </div>
      <div class="message-content">
        <!--        <p>{{messageInfo.messageContext}}</p>-->
        <!--        <button class ="depart">设备信息</button>-->
        <transverse-table2 :messageInfo="messageInfo"></transverse-table2>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCompHasExit from "@/components/HeaderCompHasExit.vue";
import TransverseTable2 from "@/components/TransverseTable2";

export default {
  name: "MessageInfo",
  components: {
    HeaderCompHasExit,
    TransverseTable2
  },
  data() {
    return {
      messageInfo: [],
      messageId: '',
      mainId: ''
    }
  },
  created() {
    this.messageId = this.getParam('messageId')
    this.mainId = this.getParam('mainId')
    console.log(this.messageId)
    console.log(this.mainId)
    this.load()
  },
  methods: {
    load() {
      //向服务器请求获取这条通知的具体信息
      this.loading = true
      this.request.get("point/get_messagesById", {
        params: {
          messageId: this.messageId,
          mainId: this.mainId
        }
      }).then(res => {
        this.messageInfo = res.data.data
        console.log(this.messageInfo)
      })
    },
    getParam(par) {
      //获取当前URL
      let local_url = document.location.href;
      //获取要取得的get参数位置
      let get = local_url.indexOf(par + "=");
      if (get === -1) {
        return false;
      }
      //截取字符串
      let get_par = local_url.slice(par.length + get + 1);
      //判断截取后的字符串是否还有其他get参数
      let nextPar = get_par.indexOf("&");
      if (nextPar !== -1) {
        get_par = get_par.slice(0, nextPar);
      }
      return get_par;
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
.header {
  height: 60px;
  width: 100%;
}

.content .message-title {
  width: 100%;
  text-align: center;
  line-height: 80px;
  font-size: 20px;
  font-weight: lighter;
}

.content .message-time-from {
  width: 100%;
  text-align: center;
  color: #9A9A9A;
}

.content .message-content {
  width: 80%;
  padding-top: 30px;
  line-height: 26px;
  font-size: 15px;
  margin: 0 auto;

  > p {
    text-indent: 2em;
  }
}

.depart {
  background-color: #efefef;
  width: 98%;
  height: 70px;
  border-radius: 25px;
  font-size: 18px;
  font-weight: bolder;
  color: #101010;
  display: block;
  margin: 0 auto
}
</style>
