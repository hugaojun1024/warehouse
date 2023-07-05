import axios from 'axios'
import ElementUI, {Message} from 'element-ui';
import router from "@/router";

const request = axios.create({
  baseURL: 'http://localhost:8081',  // 注意！！ 这里是全局统一加上了 '/api' 前缀，也就是说所有接口都会加上'/api'前缀在，页面里面写接口的时候就不要加 '/api'了，否则会出现2个'/api'，类似 '/api/api/user'这样的报错，切记！！！
  timeout: 30000
})

// request 拦截器
// 可以自请求发送前对请求做一些处理
// 比如统一加token，对请求参数统一加密
request.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/json;charset=utf-8';
  const token = localStorage.getItem("token");
  console.log(token);
  if (token) config.headers['token'] = token;
  return config;

}, error => {
  return Promise.reject(error)
});

// response 拦截器
// 可以在接口响应后统一处理结果
request.interceptors.response.use(
  (response) => response,
  ({ response }) => {
    const {status, data} = response;
    const {message} = data;
    Message.error(message);
    if (status === 401) router.push('/loginUser');
    return Promise.reject(error);
  }
  // response => {
    // let res = response.data;
    // // 如果是返回的文件
    // if (response.config.responseType === 'blob') {
    //   return res
    // }
    // // 兼容服务端返回的字符串数据
    // if (typeof res === 'string') {
    //   res = res ? JSON.parse(res) : res
    // }
    //当token验证不通过时跳转回首页，并给出提示\
    // console.log("response.status" + response.status)
    // if (response.status === '401'){
    //   console.log(1111)
    //   window.location.href="/loginUser";
    // }
    // return response;


    // let res = response.data;
    // console.log(res);
    // console.log(res.code);
    // if (res.code === '401') router.push("/loginUser");
    // return res;
  // },
  // error => {
  //   console.log('err ++' + error) // for debug
  //   return Promise.reject(error)
  // }
)

function sleep(delay) {
  var start = (new Date()).getTime();
  while((new Date()).getTime() - start < delay) {
    continue;
  }
}

export default request

