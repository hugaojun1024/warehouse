<template>
  <div>
    <div class="header">
      <HeaderCompHasExit url="/"></HeaderCompHasExit>
    </div>
    <div class="suggest">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="反馈人" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="所在部门（中心）" prop="department">
          <el-input v-model="ruleForm.department"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="phone">
          <el-input v-model="ruleForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="问题类型" prop="type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="物资编码" name="type"></el-checkbox>
            <el-checkbox label="物资申购" name="type"></el-checkbox>
            <el-checkbox label="物资报废" name="type"></el-checkbox>
            <el-checkbox label="物资验收" name="type"></el-checkbox>
            <el-checkbox label="物资调拨" name="type"></el-checkbox>
            <el-checkbox label="物资质量" name="type"></el-checkbox>
            <el-checkbox label="物资维修" name="type"></el-checkbox>
            <el-checkbox label="物资台账" name="type"></el-checkbox>
            <el-checkbox label="物资盘点" name="type"></el-checkbox>
            <el-checkbox label="其他" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="问题描述" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item label="意见建议" prop="suggest">
          <el-input type="textarea" v-model="ruleForm.suggest"></el-input>
        </el-form-item>
        <el-form-item label="补充说明" prop="explain">
          <el-input type="textarea" v-model="ruleForm.explain"></el-input>
        </el-form-item>
<!--        <h5>附图</h5>-->
<!--        <el-upload-->
<!--          class="upload-demo"-->
<!--          drag-->
<!--          action="https://jsonplaceholder.typicode.com/posts/"-->
<!--          multiple>-->
<!--          <i class="el-icon-upload"></i>-->
<!--          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>-->
<!--          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>-->
<!--        </el-upload>-->
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" style="margin: 16px 15px 16px 16px">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import HeaderCompHasExit from "@/components/HeaderCompHasExit.vue";
export default {
  name: 'SuggestionsOffer',
  components: {
    HeaderCompHasExit
  },
  data () {
    return {
      ruleForm: {
        name: '',
        department: '',
        phone: '',
        type: [],
        desc: '',
        suggest: '',
        explain: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入反馈人姓名', trigger: 'blur' }
        ],
        department: [
          { required: true, message: '请输入所在部门', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入联系电话', trigger: 'blur' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个问题类型', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写问题描述', trigger: 'blur' }
        ],
        suggest: [
          { required: true, message: '请填写意见建议', trigger: 'blur' }
        ],
        explain: [
          { required: false, message: '请填写补充说明', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$router.push("/suggestionSuccess")
      // this.$refs[formName].validate((valid) => {
      //   if (valid) {
      //     alert('submit!')
      //   } else {
      //     console.log('error submit!!')
      //     return false
      //   }
      // })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
  .suggest {
    //background-color: #42b983;
    //padding: 20px 20px 20px 20px;
    margin: 20px 20px 20px 8px;
  }
  .el-form-item_content {
    line-height: 24px;
  }
</style>
