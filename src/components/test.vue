<template>
  <div>
    <el-checkbox-group v-model="checkList">
      <el-checkbox label="复选框 A"></el-checkbox>
      <el-checkbox label="复选框 B"></el-checkbox>
      <el-checkbox label="复选框 C"></el-checkbox>
      <el-checkbox label="禁用" disabled></el-checkbox>
      <el-checkbox label="选中且禁用" disabled></el-checkbox>
    </el-checkbox-group>
    <el-button @click="testtest">测试</el-button>
  </div>

</template>

<script>
export default {
  data () {
    return {
      checkList: ['选中且禁用','复选框 A'],
      datatest:{
        feedBackPerson:"123123",
        dept:"123",
        phone:"189xxxxxxxx",
        problemType:["123","123"]
      }
    };
  },
  methods:{
    testtest(){
      this.request.post("/feed_back",this.datatest).then(res=>{
        console.log(res)
      })
    }
  }
};
</script>
