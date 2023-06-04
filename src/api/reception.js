import { request1} from "/utils/request";

// get接口写法 ---- 接口1
export function queryAllTree(params) {
  return request1({
    url: '/api/user/login',
    method: 'post',
    params: params
  })
}
// post 接口写法---- 接口2
export function childernTree(params) {
  return request1({
    url: '/api/',
    method: 'post',
    data: params
  })
}

