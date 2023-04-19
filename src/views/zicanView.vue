<template>
  <el-container>
    <el-header>
      <HeaderCompHasExit url="/"></HeaderCompHasExit>
    </el-header>
    <el-main>
      <div class="input-xx">
        <el-input v-model="input" placeholder="请输入实物码" suffix-icon="iconfont icon-sousuo"></el-input>
        <el-button>搜索</el-button>
      </div>
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
    margin:20px auto
  }
  .input-xx {
    //float: left;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .el-input {
    width: 520px;
    margin-right: 20px;
  }
</style>
