<template>
  <el-container class="home-container">
    <el-header>
      <HeaderComp></HeaderComp>
    </el-header>
    <el-main>
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
    </el-main>
    <!--底部区域-->
    <el-footer>
      <NavigatorBar></NavigatorBar>
    </el-footer>
  </el-container>
</template>

<script>
import NavigatorBar from "@/components/NavigatorBar";
import HeaderComp from '@/components/HeaderComp';
// import { mapMutations } from 'vuex';

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
    login () {
      // console.log(this.loginForm)
      // this.request.post("/user/login",this.loginForm).then(res=>{
      //   console.log(res)
      //   if (res.code == 200){
      //     //用户名密码校验成功
      //     //存储账户信息
      //     console.log("ok")
      //     localStorage.setItem("userLoginInfo",JSON.stringify(res.data))
      //     const token  = localStorage.getItem("userLoginInfo");
      //     console.log(token);
      //     this.$router.push("/qrcode")
      //   }
      //   else if(res.code == 400){
      //     //登陆失败
      //     this.$message.error(res.msg)
      //   }
      //   else if (res.code == 300){
      //     //
      //     this.$message.error("您输入的用户名或密码为空")
      //   }
      // })

      let _this = this;
      if (this.loginForm.username === "" || this.loginForm.password === "") {
        this.$message.error("账号或密码不能为空");
      } else {
        this.request.post("/user/login", this.loginForm).then(res=>{
          // console.log("res " + res);
          const info = res.data.data;
          // console.log(info);
          // console.log(info.token);
          const token = info.token;
          // 将用户token保存到vuex中
          // _this.changeLogin({ Authorization: _this.userToken });
          localStorage.setItem("token",token);
          localStorage.setItem("userLoginInfo",JSON.stringify(res.data.data.user))
          _this.$router.push('/');
          // alert('登陆成功');
          this.$message.success("欢迎访问");
        }).catch(error => {
          this.$message.error("账号或密码错误");
          console.log(error);
        })
      }
    },
    // 点击重置按钮，重置登录表单
    resetLoginForm () {
      // console.log(this);
      this.$refs.loginFormRef.resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  height: 100%;
}
.el-header {
  padding: initial;
}
.el-footer {
  padding:initial;
}
.login_box {
  width: 100%;
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
//.footer{
//  width: 100%;
//  position: fixed;
//  top: calc(100vh - 60px);
//  left: 0px;
//  text-align: center;
//}
.wrap{
  width: 100%;
  text-align: center;
  margin-top: 80px;
}
</style>
