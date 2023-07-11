<template>
  <div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>

</template>

<script>
export default {
  data () {
    return {
      checkList: ['选中且禁用','复选框  A'],
      datatest:{
        feedBackPerson:"123123",
        dept:"123",
        phone:"189xxxxxxxx",
        problemType:["123","123"]
      }
    };
  },
  methods:{
    testtest(){
      this.request.post("/feed_back",this.datatest).then(res=>{
        console.log(res)
      })
    }
  }
};
</script>
