<template>
  <el-container>
    <el-header>
      <HeaderCompHasExit url="/"></HeaderCompHasExit>
    </el-header>
    <el-main>
      <el-dropdown>
        <span class="el-dropdown-link">
          下拉菜单选择仓库<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item divided>地铁大厦站</el-dropdown-item>
          <el-dropdown-item divided>西站南广场站</el-dropdown-item>
<!--          <el-dropdown-item divided disabled>秋水广场站</el-dropdown-item>-->
<!--          <el-dropdown-item divided>其他</el-dropdown-item>-->
        </el-dropdown-menu>
      </el-dropdown>
      <TableForWarning></TableForWarning>
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
import TableForWarning from '@/components/TableForWarning'

export default {
  name: 'inventoryWarning',
  components: {HeaderCompHasExit, TableForWarning}
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

.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
