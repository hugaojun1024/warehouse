<template>
  <div class="table2">
    <el-table
      :data="tableData"
      stripe
      class="wuzi-table">
      <el-table-column
        prop="matCode"
        label="物资编码"
        sortable>
      </el-table-column>
      <el-table-column
        prop="matName"
        label="物资名称"
        sortable>
      </el-table-column>
      <el-table-column
        prop="transferNum"
        label="调拨数量"
        sortable>
      </el-table-column>
      <el-table-column
        prop="brand"
        label="品牌"
        sortable>
      </el-table-column>
      <el-table-column
        prop="matSpecifi"
        label="型号"
        sortable>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "TableForDiaobo",
  props: ['messageInfo'],
  data() {
    return {
      tableData: [],
    }
  },
  created() {
    this.load();
  },
  methods: {
    load() {
      console.log("messageInfo" + this.messageInfo)
      this.tableData = this.messageInfo.detail
      console.log(this.tableData)
    }
  }
}
</script>

<style scoped>

</style>
