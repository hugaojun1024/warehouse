<template>
  <el-container>
    <el-header>
      <HeaderCompHasExit url="/"></HeaderCompHasExit>
    </el-header>
    <el-main>
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          下拉菜单选择仓库<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-tag type="warning">{{selectedStation}}</el-tag>
        <el-dropdown-menu slot="dropdown" >
          <el-dropdown-item  @click.native="redirectToDTDS" v-loading.fullscreen.lock="loading" >
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
      <TableForWarning :tableData="tableData" :loading="loading2"></TableForWarning>
    </el-main>
    <el-footer style="text-align: center">
      <el-pagination background layout="prev, pager, next" :total="pageInfo.total" @current-change="page"></el-pagination>
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
        pageSize:10,
        // storageLocation:''
      },
      data:[],
      tableData:[],
      selectedStation:"未选择仓库", // 添加一个变量用于存储选择的地铁站
      loading2:false
    }
  },
  created() {

  },
  methods: {
    redirectToDTDS() {
      this.loading2 = true
      console.log(this.loading)
      this.selectedStation = "地铁大厦站"; // 当选择了地铁大厦站时，更新 selectedStation 变量
      this.request.get("/request_data_forwarding/stock_inquiryBySL?storageLocation=01A01&pageNum="+this.pageInfo.pageNum+"&pageSize=" + this.pageInfo.pageSize).then((res)=>{
        this.tableData = res.data.objectData;
        this.pageInfo.total = res.data.total
        // console.log(res)
        // console.log("data" + this.data)
        // this.pageInfo.total = this.data.length
        // this.page()
      }).finally(()=>{
        this.loading2 = false
      })

    },
    redirectToXZNGG() {
      this.loading2 = true
      this.selectedStation = "西站南广场站"; // 当选择了西站南广场站时，更新 selectedStation 变量
      this.request.get("/request_data_forwarding/stock_inquiryBySL?storageLocation=01A02&pageNum=" + this.pageInfo.pageNum + "&pageSize=" + this.pageInfo.pageSize).then((res) => {
        this.tableData = res.data.objectData;
        // console.log(res)
        // console.log("data" + this.data)
        // this.pageInfo.total = this.data.length
        // this.page()
      }).finally(() => {
        this.loading2 = false
      })
    },
    // },
    page(currentPage){
      if (currentPage != null){
        this.pageInfo.pageNum = currentPage
      }
      if (this.selectedStation == '地铁大厦站'){
        this.redirectToDTDS()
      }
      if (this.selectedStation == '西站南广场站'){
        this.redirectToXZNGG()
      }
      // console.log(this.pageInfo)
      // console.log(start + "  " + end)
      // console.log(this.tableData)
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

.el-tag {
  margin: 0px 0px 0px 20px;
  padding:0px 52px;
}

.el-button, .el-dropdown {
  margin-left: 10px;
  font-size: 16px;
}

.el-tag, .el-tooltip__popper {
  font-size: 15px;
}
</style>

