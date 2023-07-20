<template>
  <el-container>
    <el-header>
      <HeaderCompHasExit url="/messageArrival"></HeaderCompHasExit>
    </el-header>
    <el-main>
      <TableForWuzi :messageInfo="messageInfo"></TableForWuzi>
    </el-main>
    <el-footer style="text-align: center">
      <!--去掉页码-->
      <!--      <el-pagination-->
      <!--        background-->
      <!--        layout="prev, pager, next"-->
      <!--        :total="1000">-->
      <!--      </el-pagination>-->
    </el-footer>
  </el-container>
</template>

<script>
import HeaderCompHasExit from "@/components/HeaderCompHasExit.vue";
import TableForWuzi from '@/components/TableForWuzi'

export default {
  name: "DetailedList",
  components: {HeaderCompHasExit, TableForWuzi},
  data() {
    return {
      detailedData: [],
      messageInfo: []
    }
  },
  created() {
    if (this.$route.query.messageInfo) {
      this.messageInfo = this.$route.query.messageInfo;
      // console.log(this.messageInfo)
    }
  },
  methods: {}
}
</script>

<style scoped>
.el-header {
  padding: initial;
}
</style>
