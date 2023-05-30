<template>
  <el-container>
    <el-header>
      <HeaderCompHasExit url="/"></HeaderCompHasExit>
    </el-header>
    <el-main>
<!--      <div class="input-xx">-->
<!--        <el-input v-model="input" placeholder="请输入内容" suffix-icon="iconfont icon-sousuo"></el-input>-->
<!--        <el-button>搜索</el-button>-->
<!--      </div>-->
      <TableForWuzi></TableForWuzi>

    </el-main>
    <el-footer style="text-align: center">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </el-footer>
  </el-container>
</template>

<script>
import HeaderCompHasExit from "@/components/HeaderCompHasExit.vue";
import TableForWuzi from '@/components/TableForWarning'
export default {
  name: 'inventoryWarning',
  components: { HeaderCompHasExit, TableForWuzi }
}
</script>

<style lang="less" scoped>
  .el-header {
    padding: initial;
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
