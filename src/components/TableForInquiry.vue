<template>
  <div class="table2">
    <el-table
      :data="tableData"
      stripe
      class="wuzi-table">
      <el-table-column
        prop="matName"
        label="物资名称"
        sortable>
      </el-table-column>
      <el-table-column
        prop="matCode"
        label="实物码"
        sortable>
      </el-table-column>
      <el-table-column
        prop="stockNum"
        label="库存数量"
        sortable>
      </el-table-column>
      <el-table-column
        prop="storageLocation"
        label="储存位置"
        sortable>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'TableForInquiry',
  props:['tableData'],
  data () {
    return {
    }
  },
  created() {
  },
  methods:{
  }
}
</script>

<style lang="less" scoped>

</style>
