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
<!--      <el-table-column-->
<!--        prop="warningNum"-->
<!--        label="预警值"-->
<!--      sortable>-->
<!--      </el-table-column>-->
      <el-table-column
        prop="warningNum"
        label="预警值"
        sortable>
        <template slot-scope="scope">
          <el-input v-model="datalist.warningNum" size="mini"></el-input>
        </template>
      </el-table-column>
      <el-table-column
        prop="stockNum"
        label="仓库数量"
      sortable>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'TableForWuzi',
  props:['tableData'],
  data () {
    return {
      datalist:{
        warningNum:"7",
      }
    }
  },
  created() {
    this.saveData();
  },
  methods: {
    saveData() {
      const saveData = [];
      console.log(111111)
      this.tableData.forEach(row => {
        const materialName = row.matName;
        const warningValue = this.datalist.warningNum;
        console.log("materialName" + materialName);
        console.log("warningValue" + warningValue);
        saveData.push({materialName, warningValue});
      })
      console.log("saveData" + this.saveData)
    }
  }
}
</script>

<style lang="less">
th.el-table_1_column_3 .cell{
  color:#f30;
}
</style>
