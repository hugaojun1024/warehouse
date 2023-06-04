<template>
  <div class="table2">
    <el-table
      :data="tableData"
      stripe
      class="wuzi-table">
      <el-table-column
        prop="ItemName"
        label="物品名称"
        sortable>
      </el-table-column>
      <el-table-column
        prop="numInIncoming"
        label="到货数量"
        sortable>
      </el-table-column>
      <el-table-column
        prop="unit"
        label="单位"
        sortable>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "TableForWuzi",
  data () {
    return {
      tableData: [{
        ItemName: '一次性医用口罩',
        numInIncoming: '20',
        unit:'箱'
      }, {
        ItemName: '酒精消毒水',
        numInIncoming: '88',
        unit:'瓶'
      }, {
        ItemName: '防疫服',
        numInIncoming: '12',
        unit:'件'
      }, {
        ItemName: '防汛沙袋',
        numInIncoming: '10',
        unit:'个'
      }]
    }
  }
}
</script>

<style scoped>

</style>
