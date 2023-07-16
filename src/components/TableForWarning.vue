<template>
  <div class="table2">
    <el-table
      v-loading="this.loading"
      :data="tableData"
      stripe
      class="wuzi-table">
      <el-table-column
        prop="matName"
        label="物资名称"
      sortable>
      </el-table-column>>
      <el-table-column
        prop="warningNum"
        label="预警值"
        sortable>
        <template slot-scope="scope">
          <el-input @blur="saveWarning(scope.row)" type="text" v-model="scope.row.warningNum"/>
        </template>
      </el-table-column>
      <el-table-column
        prop="stockNum"
        label="仓库数量"
        sortable>
        <template slot-scope="scope">
          <span :class="{ 'red-text': scope.row.warningNum <= scope.row.stockNum && scope.row.warningNum != null }">
            {{ scope.row.stockNum }}
          </span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'TableForWuzi',
  props:['tableData','loading'],
  data () {
    return {
      datalist:{
        warningNum:"",
      }
    }
  },
  created() {
    this.saveData();
  },
  methods: {
    saveData() {
      const saveData = [];
      this.tableData.forEach(row => {
        const materialName = row.matName;
        const warningValue = this.datalist.warningNum;
        console.log("materialName" + materialName);
        console.log("warningValue" + warningValue);
        saveData.push({materialName, warningValue});
      })
      console.log("saveData" + this.saveData)
    },
    saveWarning(row){
      if (row.warningNum != null){
        this.request.post("/warning/set_warning_num",{
          batchNo: row.batchNo,
          warningNum: row.warningNum
        }).then(res=>{
          if (res.code === '200') {
          }
        }).finally(()=>{
          this.$message.success("已自动保存")
        })
      }
    }
  }
}
</script>

<style lang="less">
th.el-table_1_column_3 .cell{
  color:#f30;
}

.red-text {
  color: red;
  font-weight: bold;
}
</style>
