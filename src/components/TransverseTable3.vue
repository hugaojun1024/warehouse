<template>
  <div>
    <section>
      <el-table
        :show-header="false"
        :data="transformedTableData"
        border
        :cell-style="columnStyle"
        style="width: 100%; margin-top: 20px"
        @cell-click="handleCellClick"
      >
        <el-table-column prop="key" align="center">
          <template slot-scope="scope">
            <span :style="{ color: scope.row.key === '*调拨项数*' ? 'blue' : '' }">{{ scope.row.key }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="value" align="center"></el-table-column>
      </el-table>
    </section>
  </div>
</template>
<script>
export default {
  name: "TransverseTable",
  props: ['messageInfo'],
  data() {
    return {
      transformedTableData:[
        // {
        //   name: "调拨申请车间",
        //   value: "双港站"
        // },
        // {
        //   name: "物资类别",
        //   value: '防疫用品',
        // },
        // {
        //   name: "调拨项数",
        //   value: '200',
        // },
        // {
        //   name: "调拨申请时间",
        //   value: '2023年5月11日',
        // }
      ]
    };
  },
  created() {
    this.transformedTableDataMethod();
  },
  methods: {
    // 自定义列背景色
    columnStyle({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        // 修改每行第一个单元格的背景色
        return "background:#f3f6fc;";
      }else{
        return "background:#ffffff;";
      }
    },
    // 点击跳转详情页
    handleCellClick(row, column, event) {
      if (row.key === '*调拨项数*') {
        // Redirect to the desired link when the "到货项数" cell is clicked
        // window.location.href = '/DetailedList'; // Replace with your desired link
        this.$router.push({
          path: '/DetailedList2',
          query: {
            messageInfo:this.messageInfo
          }
        })
      }
    },
    // 转换数据
    transformedTableDataMethod() {
      const transformedTableData = [];
      const keyMap = {
        transferNo: "调拨单号",
        num: "*调拨项数*",
      };
      for (let key in this.messageInfo.main) {
        Object.keys(keyMap).forEach((key1) => {
          if (key === key1 ) {
            transformedTableData.push({ key: keyMap[key1], value: this.messageInfo.main[key]});
          }
        });
      }
      this.transformedTableData = transformedTableData; // ***必须更新属性值
      console.log("this.transformedTableData" + this.transformedTableData)
      return transformedTableData;
    }
  }
};
</script>

<style scoped>

</style>
