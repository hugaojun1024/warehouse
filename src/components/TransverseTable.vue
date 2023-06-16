<template>
<section>
  <div>
    <el-table
      :show-header="false"
      :data="transformedTableData"
      border
      :cell-style="columnStyle"
      style="width: 100%; margin-top: 20px"
    >
      <el-table-column prop="key" align="center"></el-table-column>
      <el-table-column prop="value" align="center"></el-table-column>
    </el-table>
  </div>
</section>
</template>

<script>
export default {
  name: "TransverseTable",
  props: ['transformedTableData'],
  data () {
    return {
    }
  },
  created() {
    console.log("other" + this.transformedTableData)
  },
  methods:{
  }
};
</script>

<style scoped>

</style>
