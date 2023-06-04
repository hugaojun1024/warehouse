<template>
  <div>
    <section>
      <el-table
        :show-header="false"
        :data="tableData"
        border
        :cell-style="columnStyle"
        style="width: 100%; margin-top: 20px"
        @cell-click="handleCellClick"
      >
        <el-table-column prop="name" align="center">
          <template slot-scope="scope">
            <span :style="{ color: scope.row.name === '*到货项数*' ? 'blue' : '' }">{{ scope.row.name }}</span>
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
  // props: ['tableData'],
  data() {
    return {
      tableData:[
        {
          name: "调拨申请车间",
          value: "双港站"
        },
        {
          name: "物资类别",
          value: '防疫用品',
        },
        {
          name: "调拨项数",
          value: '200',
        },
        {
          name: "调拨申请时间",
          value: '2023年5月11日',
        }
      ]
    };
  },
  methods: {
    // 自定义列背景色
    columnStyle({ row, column, rowIndex, columnIndex }) {
      if (columnIndex == 0) {
        // 修改每行第一个单元格的背景色
        return "background:#f3f6fc;";
      }else{
        return "background:#ffffff;";
      }
    },
    handleCellClick(row, column, event) {
      if (row.name === '*到货项数*') {
        // Redirect to the desired link when the "到货项数" cell is clicked
        window.location.href = '/DetailedList'; // Replace with your desired link
      }
    },
  }
};
</script>

<style scoped>

</style>
