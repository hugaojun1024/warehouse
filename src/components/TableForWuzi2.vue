<template>
  <div class="table2">
    <el-table
      :data="tableData"
      stripe
      class="wuzi-table">
      <el-table-column
        prop="className"
        label="分类名称"
        sortable>
      </el-table-column>
      <el-table-column
        prop="wuziName"
        label="物资名称"
        sortable>
      </el-table-column>
      <el-table-column
        prop="physicalCode"
        label="实物码"
        sortable>
      </el-table-column>
      <el-table-column
        prop="availNum"
        label="可用值"
        sortable>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'TableForWuzi2',
  data () {
    return {
      tableData: [{
        className: '口罩1',
        wuziName: '一次性医用口罩1',
        warningNum: '488',
        availNum: '530',
        physicalCode: 'Ax1211233'
      }, {
        className: '口罩2',
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

</style>
