# API接口格式文档
### baseURl:
http://0vo.cc:8088/

### 登陆验证
请求方式：post

请求地址：/user/login

请求参数: 一个json对象，格式如下

```json
{
  "username": "用户名",
  "userPassword": "密码"
}
```


### 例子
验证登陆
```javascript
this.request.post("/user/login",{
    username:"admin",
    password:"123456"
}).then(res=>{
    //查看服务端返回数据
    console.log(res)
})
```
返回的res数据

```json
{
  "code": "200",
  "msg": "登陆成功",
  "data": {
    "userId": "001",
    "username": "admin",
    "userPassword": "123456"
  }
}
```
其中，所有的响应数据都经过统一格式封装，code是这次请求的状态码,msg是服务器端返回的消息，data是携带的数据
拿到结果和数据后，前端处理相关页面的业务逻辑