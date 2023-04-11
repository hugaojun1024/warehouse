<template>
  <el-table
    :data="tableData"
    stripe
    class="wuzi-table">
    <el-table-column
      prop="className"
      label="分类名称">
    </el-table-column>
    <el-table-column
      prop="wuziName"
      label="物资名称">
    </el-table-column>
    <el-table-column
      prop="physicalCode"
      label="实物码">
    </el-table-column>
    <el-table-column
      prop="availNum"
      label="可用值">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'TableForWuzi',
  data () {
    return {
      tableData: [{
        className: '口罩',
        wuziName: '一次性医用口罩',
        warningNum: '488',
        availNum: '530',
        physicalCode: 'Ax1211233'
      }, {
        className: '口罩',
        wuziName: '一次性医用口罩',
        warningNum: '488',
        availNum: '530',
        physicalCode: 'Ax1211233'
      }, {
        className: '口罩',
        wuziName: '一次性医用口罩',
        warningNum: '488',
        availNum: '530',
        physicalCode: 'Ax1211233'
      }, {
        className: '口罩',
        wuziName: '一次性医用口罩',
        warningNum: '488',
        availNum: '530',
        physicalCode: 'Ax1211233'
      }]
    }
  }
}
</script>

<style lang="less" scoped>
  .wuzi-table {
    width: 414px;
  }
</style>
