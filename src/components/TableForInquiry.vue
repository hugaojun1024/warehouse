<template>
  <div class="table2">
    <el-table
      :data="tableData"
      stripe
      class="wuzi-table">
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
        prop="numInStork"
        label="库存数量"
        sortable>
      </el-table-column>
      <el-table-column
        prop="location"
        label="储存位置"
        sortable>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'TableForInquiry',
  data () {
    return {
      tableData: [{
        wuziName: '一次性医用口罩',
        numInStork: '530',
        physicalCode: 'Ax1211233',
        location:'地铁大厦站'
      }, {
        wuziName: '一次性医用口罩',
        numInStork: '530',
        physicalCode: 'Ax1211233',
        location:'地铁大厦站'
      }, {
        wuziName: '一次性医用口罩',
        numInStork: '530',
        physicalCode: 'Ax1211233',
        location:'地铁大厦站'
      }, {
        wuziName: '一次性医用口罩',
        numInStork: '530',
        physicalCode: 'Ax1211233',
        location:'地铁大厦站'
      }]
    }
  }
}
</script>

<style lang="less" scoped>

</style>
