<template>
  <el-container>
    <el-header>
      <HeaderComp></HeaderComp>
    </el-header>
    <el-main>
      <div class="input-xx">
        <el-input v-model="input" placeholder="请输入内容" suffix-icon="iconfont icon-sousuo"></el-input>
        <el-button>搜索</el-button>
      </div>
      <TableForWuzi2></TableForWuzi2>
    </el-main>
    <el-footer>
    </el-footer>
  </el-container>
</template>

<script>
import HeaderComp from '@/components/HeaderComp'
import TableForWuzi2 from '@/components/TableForWuzi2'
export default {
  name: 'inventoryWarning',
  components: { HeaderComp, TableForWuzi2 }
}
</script>

<style lang="less" scoped>
  .el-header {
    padding: initial;
  }
  .input-xx {
    float: left;
  }
  .el-input {
    width: 300px;
  }
</style>
