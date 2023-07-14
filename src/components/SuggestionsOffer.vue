<template>
  <div>
    <div class="header">
      <HeaderCompHasExit url="/"></HeaderCompHasExit>
    </div>
    <div class="context">
        <span>反馈人：</span>
        <el-input class="input" v-model="datatest.feedBackPerson"></el-input><br>
      <span>所在部门（中心）：</span>
      <el-input class="input" v-model="datatest.dept"></el-input><br>
      <span>联系电话：</span>
      <el-input class="input" v-model="datatest.phone"></el-input><br>
      <span>问题类型：</span>
      <el-checkbox-group v-model="datatest.problemType">
        <el-checkbox label="物资编码"></el-checkbox>
        <el-checkbox label="物资申购"></el-checkbox>
        <el-checkbox label="物资报废"></el-checkbox>
        <el-checkbox label="物资验收"></el-checkbox>
        <el-checkbox label="物资调拨"></el-checkbox>
        <el-checkbox label="物资质量"></el-checkbox>
        <el-checkbox label="物资维修"></el-checkbox>
        <el-checkbox label="物资台账"></el-checkbox>
        <el-checkbox label="物资盘点"></el-checkbox>
        <el-checkbox label="其他"></el-checkbox>
      </el-checkbox-group><br>
      <span>问题描述</span>
      <el-input type="textarea" class="input" v-model="datatest.problemDesc"></el-input><br>
      <span>意见建议</span>
      <el-input type="textarea" class="input" v-model="datatest.suggestion"></el-input><br>
      <span>补充说明</span>
      <el-input type="textarea" class="input" v-model="datatest.supplement"></el-input><br>
    </div>
    <div class="footer">
      <button class="redBtn" @click="submit">提交</button>
      <button class="greyBtn" @click="reset">重置</button>
    </div>
  </div>

</template>

<script>
import HeaderCompHasExit from "@/components/HeaderCompHasExit.vue";

export default {
  name: "SuggestionOffer",
  components:{
    HeaderCompHasExit
  },
  data () {
    return {
      checkList: ['选中且禁用','复选框 A'],
      datatest:{
        feedBackPerson:"",
        dept:"",
        phone:"",
        problemType:[],
        problemDesc:"",
        suggestion:"",
        supplement:""
      }
    };
  },
  methods:{
    submit(){
      this.request.post("/feed_back",this.datatest).then(res=>{
        console.log(res)
        if (res.code == 200){
          this.$router.push("/suggestionSuccess")
        }
      })
    },
    reset(){
      //重置
      this.datatest = {
        feedBackPerson:"",
        dept:"",
        phone:"",
        problemType:[],
        problemDesc:"",
        suggestion:"",
        supplement:""
      }
    },
  }
};
</script>

<style lang="less" scoped>
  span{
    line-height: 66px;
    margin-left: 20px;
  }
  .input{
    line-height: 50px;
    width: 200px;
    float: right;
    margin-right: 50px;
  }
  .footer{
    text-align: center;
  }
  /* 优化 内边距 */
  .el-checkbox-group {
    padding: 22px;
  }

  .el-checkbox {
    font-size: 20px;
  }
</style>
