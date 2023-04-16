<template>
 <div>
   <div>
     <HeaderComp></HeaderComp>
   </div>
   <div class="login_container">
     <div class="login_box">
       <!--头像区域-->
       <div class="avatar_box">
         <img src="../assets/erweima_logo1.png" alt="">
       </div>
       <!-- 登录表单区域 -->
       <el-form style="text-align: center;width: 90%; margin-left: 20px" ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
         <!--用户名-->
         <el-form-item prop="username">
           <el-input v-model="loginForm.username" prefix-icon="iconfont icon-yonghu"></el-input>
         </el-form-item>
         <!--密码-->
         <el-form-item prop="password">
           <el-input v-model="loginForm.password" prefix-icon="iconfont icon-mima" type="password"></el-input>
         </el-form-item>
         <!--按钮区域-->
         <button @click="login" class="redBtn">登陆</button>
         <button @click="resetLoginForm" class="greyBtn">重置</button>
       </el-form>
     </div>
   </div>
   <div class="footer">
     <NavigatorBar></NavigatorBar>
   </div>
 </div>
</template>

<script>
import NavigatorBar from "@/components/NavigatorBar";
import HeaderComp from '@/components/HeaderComp';
export default {
  name: 'loginUser',
  components: {
    HeaderComp,
    NavigatorBar
  },
  data () {
    return {
      // 这是登录表单的数据绑定对象
      loginForm: {
        username: '',
        password: ''
      },
      // 这是表单验证规则对象
      loginFormRules: {
        // 验证用户名是否合法
        username: [
          { required: true, message: '请输入登录名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 点击重置按钮，重置登录表单
    resetLoginForm () {
      // console.log(this);
      this.$refs.loginFormRef.resetFields()
    },
    login () {
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return;
        const data =  this.$http.post("login", this.loginForm)
        console.log(data)
        if (data.status !== 200) {
          this.$message.error("用户名或密码错误1")
        } else {
          this.$router.push("/user_profile")
        }
      })
      // if (this.loginForm.username == 'admin' && this.loginForm.password == '123456'){
      //   this.$router.push("/user_profile")
      // }
      // else{
      //   this.$message.error("用户名或密码错误")
      // }
    }
  }
}
</script>

<style lang="less" scoped>
  .login_container {
    height: 100%;
  }

  .login_box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .avatar_box {
      height: 130px;
      width: 130px;
      border: 1px solid #eee;
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0 0 10px #ddd;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
      }
    }
  }
  .login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }
  .btns {
    display: flex;
    justify-content: flex-end;
  }
  .footer{
    width: 100%;
    position: fixed;
    top: calc(100vh - 60px);
    left: 0px;
    text-align: center;
  }
</style>
