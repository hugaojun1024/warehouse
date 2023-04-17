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
       <div class="wrap">
         <!--用户名-->
         <el-input v-model="loginForm.username" prefix-icon="iconfont icon-yonghu"></el-input>
         <!--密码-->
         <el-input v-model="loginForm.userPassword" prefix-icon="iconfont icon-mima" type="password"></el-input>
         <!--按钮区域-->
         <button @click="login" class="redBtn">登陆</button>
         <button @click="resetLoginForm" class="greyBtn">重置</button>
       </div>

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
        userPassword: ''
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
      console.log(this.loginForm)
      this.request.post("/user/login",this.loginForm).then(res=>{
        console.log(res)
        if (res.code == 200){
          //登陆成功
          this.$router.push("/user_profile")
        }
        else if(res.code == 400){
          //登陆失败
          this.$message.error(res.msg)
        }
      })
      // this.$refs.loginFormRef.validate(async valid => {
      //   if (!valid) return;
      //   const data =  this.$http.post("login", this.loginForm)
      //   console.log(data)
      //   if (data.status !== 200) {
      //     this.$message.error("用户名或密码错误1")
      //   } else {
      //     this.$router.push("/user_profile")
      //   }
      // })
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
  .el-input{
    width: 80%;
    margin-top: 10px;
    margin-bottom: 10px;
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
  .wrap{
    width: 100%;
    text-align: center;
    margin-top: 80px;
  }
</style>
