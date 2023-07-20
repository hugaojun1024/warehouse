<template>
  <el-container>
    <el-header>
      <HeaderCompHasExit url="/messageTransfer"></HeaderCompHasExit>
    </el-header>
    <el-main>
      <TableForDiaobo :messageInfo="messageInfo"></TableForDiaobo>
    </el-main>
    <el-footer style="text-align: center">
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
import TableForDiaobo from '@/components/TableForDiaobo'

export default {
  name: "DetailedList2",
  components: {HeaderCompHasExit, TableForDiaobo},
  data() {
    return {
      detailedData: [],
      messageInfo: []
    }
  },
  created() {
    if (this.$route.query.messageInfo) {
      this.messageInfo = this.$route.query.messageInfo;
      // console.log("messageInfo" + this.messageInfo)
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
