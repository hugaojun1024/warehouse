<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="反馈人">
            <span>{{ props.row.feedBackPerson }}</span>
          </el-form-item>
          <el-form-item label="所在部门">
            <span>{{ props.row.dept }}</span>
          </el-form-item>
          <el-form-item label="联系电话">
            <span>{{ props.row.phone }}</span>
          </el-form-item>
          <el-form-item label="问题类型">
            <span>{{ props.row.type }}</span>
          </el-form-item>
          <el-form-item label="问题描述">
            <span>{{ props.row.problemDesc }}</span>
          </el-form-item>
          <el-form-item label="意见建议">
            <span>{{ props.row.suggestion }}</span>
          </el-form-item>
          <el-form-item label="补充说明">
            <span>{{ props.row.supplement }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="反馈人"
      prop="feedBackPerson">
    </el-table-column>
    <el-table-column
      label="问题类型"
      prop="type">
    </el-table-column>
    <el-table-column
      label="问题描述"
      prop="problemDesc">
    </el-table-column>
  </el-table>
</template>

<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>

<script>
export default {

  created() {
    this.load()
  },
  methods:{
    load(){
      //加载数据
      this.request.get("/feed_back/page",{
        params:{
          pageNum:1,
          pageSize:8
        }
      }).then(res=>{
        this.tableData = res.records
      })
    }
  },
  data() {
    return {
      tableData: [{
        id: '12987122',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }, {
        id: '12987123',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }, {
        id: '12987125',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }, {
        id: '12987126',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }]
    }
  }
}
</script>
