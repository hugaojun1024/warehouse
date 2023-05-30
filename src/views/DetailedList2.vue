<template>
  <el-container>
    <el-header>
      <HeaderCompHasExit url="/"></HeaderCompHasExit>
    </el-header>
    <el-main>
      <TableForWuzi></TableForWuzi>
    </el-main>
    <el-footer style="text-align: center">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </el-footer>
  </el-container>
</template>

<script>
import HeaderCompHasExit from "@/components/HeaderCompHasExit.vue";
import TableForWuzi from '@/components/TableForWuzi'
export default {
  name: "DetailedList",
  components: { HeaderCompHasExit, TableForWuzi }
}
</script>

<style scoped>
.el-header {
  padding: initial;
}
</style>
