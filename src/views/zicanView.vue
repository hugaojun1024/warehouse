<template>
  <el-container>
    <el-header>
      <HeaderCompHasExit url="/"></HeaderCompHasExit>
    </el-header>
    <el-main>
      <div class="input-xx">
        <el-input v-model="pageInfo.unitCode" placeholder="请输入实物码" suffix-icon="iconfont icon-sousuo"></el-input>
        <el-button @click="search" v-loading.fullscreen.lock="loading">搜索</el-button>
      </div>
      <button class ="depart">设备信息</button>
      <TransverseTable :transformedTableData="transformedTableData"></TransverseTable>
    </el-main>
    <el-footer>
    </el-footer>
  </el-container>
</template>

<script>
import HeaderCompHasExit from "@/components/HeaderCompHasExit.vue";
import TransverseTable from "@/components/TransverseTable";
export default {
  name: "zicanView",
  components: {
    HeaderCompHasExit,TransverseTable
  },
  data() {
    return {
      pageInfo: {
        unitCode: ''
      },
      tableData: [  //tableData是一个数组
        //一个对象：键值对
        // {
          // "position1Name": "场段所-1号线场段所-车辆段",
          // "positionRemark": "办公楼308",
          // "quantity": 1,
          // "manageChargerId": " ",
          // "manageChargerName": "李洪滔",
          // "netValue": 0,
          // "manageDeptCname": "维修中心",
          // "matSpecifi": "专业照度计",
          // "startUseDate": "20220224",
          // "useLineNo": "01",
          // "useLineName": "1号线",
          // "sourceKind": "10",
          // "manageDeptCode": "1020116",
          // "useDeptCode": "1020116",
          // "unitCode": "90000080361",
          // "useDeptCname": "维修中心",
          // "useChargerName": " ",
          // "assetCname": "照度仪",
          // "useChargerId": " ",
          // "position1Code": "C010002",
          // "assetStatus": "在用",
          // "originValue": 2556.64
        // }
      ],
      transformedTableData: [],
      loading: false
    }
  },

  created() {
    this.load()
  },

  methods: {
    /**
     * 将 tableData[0] 对象中的键值对用一个数组对象保存
     * @returns {*[]}
     */
    transformedTableDataMethod() {
      const transformedTableData = [];
      const keyMap = {
        position1Name: "设备位置",
        positionRemark: "具体位置",
        manageChargerName: "管理责任人",
        unitCode: "合一码",
        useDeptCname: "使用部门名称"
      };
      for (let key in this.tableData[0]) {
        // console.log("key " + key)
        // *** 可以用this.tableData[0][key]获取key对应的值
        // console.log("value " + this.tableData[0][key])
        // if (key === "position1Name") {
        //   key1 = "设备位置"
        //   transformedTableData.push({ key: key1, value: this.tableData[0][key]});
        // } else if (key === "positionRemark") {
        //   key1 = "具体位置"
        //   transformedTableData.push({ key: key1, value: this.tableData[0][key]});
        // } else if (key === "manageChargerName") {
        //   key1 = "管理责任人"
        //   transformedTableData.push({ key: key1, value: this.tableData[0][key]});
        // } else if (key === "unitCode") {
        //   key1 = "合一码"
        //   transformedTableData.push({ key: key1, value: this.tableData[0][key]});
        // } else if (key === "useDeptCname") {
        //   key1 = "使用部门名称"
        //   transformedTableData.push({ key: key1, value: this.tableData[0][key]});
        // }
        Object.keys(keyMap).forEach((key1) => {
          // let value = keyMap[key1];
          // console.log(key, value);
          if (key === key1) {
            transformedTableData.push({ key: keyMap[key1], value: this.tableData[0][key]});
            /*
             * *** push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
             * 注意： 新元素将添加在数组的末尾。此方法改变数组的长度。
             * 提示： 在数组起始位置添加元素请使用 unshift() 方法。*/
          }
        });

      }
      this.transformedTableData = transformedTableData; // ***必须更新属性值
      console.log("this.transformedTableData" + this.transformedTableData)
      return transformedTableData;
    },

    /**
     * 优化 transformedTableDataMethod
     */
    // transformedTableDataMethod2() {
    //   const keyMapping = {
    //     position1Name: "设备位置",
    //     positionRemark: "具体位置"
    //     // Add more key-value pairs as needed
    //   };
    //
    //   const transformedTableData = Object.keys(this.tableData[0]).map(key => {
    //     return {
    //       key: keyMapping[key] || key,
    //       value: this.tableData[0][key]
    //     };
    //   });
    //
    //   console.log("this.transformedTableData" + this.transformedTableData)
    // },

    /**
     * 自定义列背景色
     * @param row
     * @param column
     * @param rowIndex
     * @param columnIndex
     * @returns {string}
     */
    columnStyle({ row, column, rowIndex, columnIndex }) {
      if (columnIndex == 0) {
        // 修改每行第一个单元格的背景色
        return "background:#f3f6fc;";
      }else{
        return "background:#ffffff;";
      }
    },

    /**
     * 请求服务器地址
     */
    load(){
      this.loading = true
      if (this.$route.query.unicode !== '') {
        this.pageInfo.unitCode = this.$route.query.unicode
        this.request.get("/request_data_forwarding/property_inquiry?unitCode=" + this.pageInfo.unitCode).then((res)=>{
          // console.log("load 返回 "+res)
          // console.log(res.data.objectData[0])
          this.tableData = res.data.objectData
          // console.log(this.data)
          // this.tableData = this.data
          // console.log(this.tableData)
          this.transformedTableDataMethod()
          // console.log("create() + " + this.transformedTableData)
        }).finally(()=>{
          this.loading = false
        })
      } else {
        this.loading = false
      }
    },

    search(){
      this.$route.query.unicode = this.pageInfo.unitCode
      this.load()
    }

  }
}
</script>

<style lang = "less" scoped>
  .el-header {
    padding: initial;
  }
  .depart {
    background-color: #efefef;
    width: 98%;
    height: 70px;
    border-radius: 25px;
    font-size: 18px;
    font-weight: bolder;
    color: #101010;
    display:block;
    margin:20px auto
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
