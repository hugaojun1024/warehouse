<template>
  <div class="table2">
    <el-table
      :data="tableData"
      stripe
      class="wuzi-table">
      <el-table-column
        prop="matName"
        label="物品名称"
        sortable>
      </el-table-column>
      <el-table-column
        prop="arrivalNumber"
        label="到货数量"
        sortable>
      </el-table-column>
      <el-table-column
        prop="purcBrand"
        label="品牌"
        sortable>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "TableForWuzi",
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
      console.log(this.messageInfo)
      this.tableData = this.messageInfo.detail
    }
  }
}
</script>

<style scoped>

</style>
