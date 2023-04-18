<template>
  <div>
    <section>
      <el-table
        :show-header="false"
        :data="tableData"
        border
        :cell-style="columnStyle"
        style="width: 100%; margin-top: 20px"
      >
        <el-table-column prop="name" align="center"></el-table-column>
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
          name: "参数",
          value: 'c1221',
        },
        {
          name: "型号",
          value: 'Ax1210200c',
        },
        {
          name: "使用人",
          value: '张三',
        },
        {
          name: "责任人",
          value: "李四",
        },
        {
          name: "资产位置",
          value: "瑶湖西站二号出口",
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

  }
};
</script>

<style scoped>

</style>
