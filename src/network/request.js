import axios from 'axios'

export function request(config) {
  // 1. 创建 axios 的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  // 2. axios 的拦截器
  // 2.1 请求拦截的作用
  instance.interceptors.request.use(config => {
    // console.log(config);
    // 1. 比如config中一些信息不符合服务器的要求
    // 2. 比如每次发送网路请求时，都希望在界面显示一个请求图标
    // 3. 某些网站请求（比如登录（token）），必须携带一些特殊的信息
    return config
  }, err => {
    // console.log(err);
  })
  // 2.2 响应拦截
  instance.interceptors.response.use(res => {
    // console.log(res);
    // 真正响应拦截是取data,其他没什么用
    return res.data
  }, err => {
    console.log(err);
  })

  // 3. 发送真正的网络请求
  return instance(config);
}

