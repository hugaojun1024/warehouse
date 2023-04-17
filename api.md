# api接口
### baseURl:
http://0vo.cc:8088/

### 登陆验证
请求地址：/user/login


### 例子
验证登陆
```javascript
this.axios.post("/user/login",{
    username:"admin",
    password:"123456"
}).then(res=>{
    //查看服务端返回数据
    console.log(res)
})
```