<style>
th.el-table_1_column_3 .cell{
  color:#f30;
}
</style>

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
        prop="warningNum"
        label="预警值"
      sortable>
        <template slot-scope="scope">
          <span :style="{ color: 'red' }">{{ scope.row.warningNum }}</span>
        </template>
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
  name: 'TableForWuzi',
  data () {
    return {
      tableData: [{
        className: '口罩',
        wuziName: '一次性医用口罩',
        warningNum: '488',
        availNum: '530'
      }, {
        className: '口罩',
        wuziName: '一次性医用口罩',
        warningNum: '488',
        availNum: '530'
      }, {
        className: '口罩',
        wuziName: '一次性医用口罩',
        warningNum: '488',
        availNum: '530'
      }, {
        className: '口罩',
        wuziName: '一次性医用口罩',
        warningNum: '488',
        availNum: '530'
      }]
    }
  }
}
</script>

