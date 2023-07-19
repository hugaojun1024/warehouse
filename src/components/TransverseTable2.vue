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
            <span :style="{ color: scope.row.key === '*到货项数*' ? 'blue' : '' }">{{ scope.row.key }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="value" align="center">

        </el-table-column>
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
      messageInfo:[
        // {
        //   name: "到货仓库",
        //   value: "双港站"
        // },
        // {
        //   name: "名称",
        //   value: '00001',
        // },
        // {
        //   name: "采购订单号",
        //   value: 'Ax1210200c',
        // },
        // {
        //   name: "*到货项数*",
        //   value: '121',
        // },
        // {
        //   name: "到货时间",
        //   value: "2023年5月1日",
        // },
        // {
        //   name: "验收截止时间",
        //   value: "2023年5月8日",
        // }
      ],
      transformedTableData:[]
    };
  },
  created() {
    // console.log(this.messageInfo)
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
    handleCellClick(row, column, event) {
      if (row.key === '*到货项数*') {
        // Redirect to the desired link when the "到货项数" cell is clicked
        // window.location.href = '/DetailedList'; // Replace with your desired link
        // 需优化
        this.$router.push({
          path: '/DetailedList',
          query: {
            messageInfo:this.messageInfo
          }
        })
      }
    },
    transformedTableDataMethod() {
      const transformedTableData = [];
      const keyMap = {
        warehouseNo: "到货仓库",
        contractName: "名称",
        purcOrderId: "采购订单号",
        arrivalNum: "*到货项数*",
        arrivalDate: "到货时间",
        endTime:"验收截止时间"
      };

      for (let key in this.messageInfo.main) {

        Object.keys(keyMap).forEach((key1) => {
          // let value = keyMap[key1];
          // console.log(key, value);
          // 特殊处理 arrivalDate 格式
          if (key === key1 && key === "arrivalDate" ) {
            const dataTimeString = this.messageInfo.main[key]
            // console.log(dataTimeString)
            const year = dataTimeString.substring(0,4)
            const month = dataTimeString.substring(4, 6);
            const day = dataTimeString.substring(6, 8);
            const formattedDate = `${year}-${month}-${day}`;
            transformedTableData.push({ key: keyMap[key1], value: formattedDate});

          } else if (key === key1 && key === "endTime" ) {
            const endTimeString = this.messageInfo.main[key].substring(0,10);
            transformedTableData.push({ key: keyMap[key1], value: endTimeString})

          } else if (key === key1) {
            transformedTableData.push({ key: keyMap[key1], value: this.messageInfo.main[key]});
            // console.log(this.messageInfo.main[key])
            /*
             * *** push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
             * 注意： 新元素将添加在数组的末尾。此方法改变数组的长度。
             * 提示： 在数组起始位置添加元素请使用 unshift() 方法。*/
          }
        });
      }
      this.transformedTableData = transformedTableData; // ***必须更新属性值
      // console.log("this.transformedTableData" + this.transformedTableData)
      return transformedTableData;
    }
  }
}
</script>

<style scoped>

</style>
