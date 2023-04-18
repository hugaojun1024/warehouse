<template>
  <el-container>
    <el-header>
      <HeaderCompHasExit url="/"></HeaderCompHasExit>
    </el-header>
    <el-main>
      <button class ="depart">设备信息</button>
      <transverse-table :tableData="table_data"></transverse-table>
    </el-main>
    <el-footer>
    </el-footer>
  </el-container>
</template>

<script>
import HeaderCompHasExit from "@/components/HeaderCompHasExit.vue";
import TransverseTable from "@/components/TransverseTable";
export default {
  name: "zicanView",
  components: {
    HeaderCompHasExit,TransverseTable
  }
}
</script>

<style lang = "less" scoped>
  .el-header {
    padding: initial;
  }
  .depart {
    background-color: #efefef;
    width: 98%;
    height: 70px;
    border-radius: 25px;
    font-size: 18px;
    font-weight: bolder;
    color: #101010;
    display:block;
    margin:0 auto
  }
</style>
