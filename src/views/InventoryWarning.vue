<template>
  <el-container>
    <el-header>
      <HeaderCompHasExit url="/"></HeaderCompHasExit>
    </el-header>
    <el-main>
      <el-dropdown>
        <span class="el-dropdown-link">
          下拉菜单选择仓库<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item divided @click.native="redirectToDTDS" v-loading.fullscreen.lock="loading">
<!--            <router-link to="https://www.baidu.com" target="_blank">地铁大厦站</router-link>-->
            地铁大厦站
          </el-dropdown-item>
          <el-dropdown-item divided @click.native="redirectToXZNGG" v-loading.fullscreen.lock="loading">
            西站南广场站
          </el-dropdown-item>
          <!-- <el-dropdown-item divided disabled>秋水广场站</el-dropdown-item>
          <el-dropdown-item divided>其他</el-dropdown-item> -->
        </el-dropdown-menu>
      </el-dropdown>
      <TableForWarning :tableData="tableData"></TableForWarning>
    </el-main>
    <el-footer style="text-align: center">
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    </el-footer>
  </el-container>
</template>

<script>
import HeaderCompHasExit from "@/components/HeaderCompHasExit.vue";
import TableForWarning from '@/components/TableForWarning'

export default {
  name: 'inventoryWarning',
  components: { HeaderCompHasExit, TableForWarning },
  data() {
    return {
      pageInfo:{
        total:10,
        pageNum:1,
        pageSize:6,
        // storageLocation:''
      },
      data:[],
      tableData:[],
      loading:false
    }
  },
  created() {

  },
  methods: {
    redirectToDTDS() {
      this.loading = true
      this.request.get("/request_data_forwarding/stock_inquiryBySL?storageLocation=01B020402(02-03-01)").then((res)=>{
        this.data = res.objectData
        console.log("data" + this.data)
        this.pageInfo.total = this.data.length
        this.page()
      }).finally(()=>{
      })
      this.loading = false
    },
    redirectToXZNGG() {
      window.location.href = 'https://www.baidu.com';
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

.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}

.el-icon-arrow-down {
  font-size: 12px;
}
</style>
