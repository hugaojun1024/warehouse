import { requestLever} from "utils/request";

//模板列表  get 请求
export function formTemplateList(params){
  return requestLever({
    url: '/form/list',
    method: 'get',
    params: params
  })
}

// 更新表单 post 请求
export function formTemplateUpdate(params){
  return requestLever({
    url: '/form/update',
    method: 'post',
    data: params
  })
}
