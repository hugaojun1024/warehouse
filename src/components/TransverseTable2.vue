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
          name: "到货仓库",
          value: "双港站"
        },
        {
          name: "序号",
          value: '00001',
        },
        {
          name: "采购订单号",
          value: 'Ax1210200c',
        },
        {
          name: "物资编码",
          value: 'SX00121',
        },
        {
          name: "物资名称",
          value: "计划到货量",
        },
        {
          name: "可登记数量",
          value: "100000",
        },
        {
          name: "本次到货数量",
          value: "10000"
        },
        {
          name: "规格型号",
          value: "x1122"
        },
        {
          name:"品牌厂家",
          value: "XXXX"
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
