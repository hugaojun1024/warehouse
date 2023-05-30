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
  name: 'TableForWuzi2',
  data () {
    return {

    }
  },
  created() {
    this.getWuziMessage()
  },
  methods: {
    getWuziMessage() {
      this.request.post('/',null, {
        headers: {
          'serviceId':'GET_EXPEND_GOODS'
        }
      }).then(res=>{
        console.log(res)
        if (res.code === 200){

        }
        else if(res.code === 400){

        }
        else if (res.code === 300){

        }
      })
    }
  }
}
</script>

<style lang="less" scoped>

</style>
