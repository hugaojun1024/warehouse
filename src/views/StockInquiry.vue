<template>
  <el-container>
    <el-header>
      <HeaderCompHasExit url="/"></HeaderCompHasExit>
    </el-header>
    <el-main>
      <div class="input-xx">
        <el-input v-model="pageInfo.matName" placeholder="请输入物资名称" suffix-icon="iconfont icon-sousuo"></el-input>
        <el-button @click="load" v-loading.fullscreen.lock="loading">搜索</el-button>
      </div>
      <TableForInquiry :tableData="tableData"></TableForInquiry>
    </el-main>
    <el-footer style="text-align: center">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="pageInfo.total"
        @current-change="page"
        :page-size="pageInfo.pageSize"
        :current-page="pageInfo.pageNum">
      </el-pagination>
    </el-footer>
  </el-container>
</template>

<script>
import HeaderCompHasExit from "@/components/HeaderCompHasExit.vue";
import TableForInquiry from '@/components/TableForInquiry'
export default {
  name: 'inventoryWarning',
  components: { HeaderCompHasExit, TableForInquiry },
  data(){
    return {
      pageInfo:{
        total:10,
        pageNum:1,
        pageSize:6,
        matName:''
      },
      data:[],
      tableData:[],
      loading:false
    }
  },
  created() {
    this.load()
  },
  methods:{
    load(){
      this.loading = true
      this.request.get("/request_data_forwarding/stock_inquiry?matName=" + this.pageInfo.matName).then((res)=>{
        this.data = res.data.objectData
        this.pageInfo.total = this.data.length
        this.page()
      }).finally(()=>{
      })
      this.loading = false
    },
    page(currentPage){
      this.loading = true
      if (currentPage != null){
        this.pageInfo.pageNum = currentPage
      }
      let start = (this.pageInfo.pageNum - 1) * this.pageInfo.pageSize
      let end = start + this.pageInfo.pageSize
      console.log(this.pageInfo)
      console.log(start + "  " + end)
      this.tableData = this.data.slice(start,end)
      console.log(this.tableData)
      this.loading = false
    }
  }
}
</script>

<style lang="less" scoped>
  .el-header {
    padding: initial;
  }
  .input-xx {
    //float: left;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .el-input {
    width: 520px;
    margin-right: 20px;
  }
</style>
