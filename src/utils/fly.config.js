import Cookies from 'js-cookie'
import router from '@/router'
import { message } from 'element-ui'
let fly = require('flyio')
// wx.js为您下载的源码文件
// var Fly=require("flyio/dist/npm/wx") //npm引入方式
// let fly = new Fly() // 创建fly实例
// 添加拦截器
fly.interceptors.request.use((config, promise) => {
  // 给所有请求添加自定义header
  //  config.headers['X-Tag'] = 'flyio'
  let { token } = Cookies.getJSON('user') ? Cookies.getJSON('user') : ''
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  let { body } = config
  for (let x in body) {
    if (body[x] === null || body[x] === undefined) {
      delete body[x]
    }
  }
  return config
})
fly.interceptors.response.use(
  (response) => {
    //  只将请求结果的data字段返回
    return response.data
  },
  (err) => {
    const error = err.response ? err.response.data : { err: '网络请求错误', code: '-1000' }
    if (!err.response) {
      router.replace({
        name: 'login'
      })
      message({
        message: '接口调用失败',
        type: 'error'
      })
    }
    return error
  }
)
// 配置请求基地址
console.log(process.env.NODE_ENV)
// process.env.NODE_ENV = 'production'
fly.config.baseURL = (function () {
  let baseURL
  if (process.env.NODE_ENV === 'development') {
    // baseURL = 'http://edit.junyanginfo.com:8082/'
    // baseURL = 'http://192.168.1.84:8082'
    baseURL = 'http://testomsapi.junyanginfo.com'
    // baseURL = 'http://testomsapi.junyanginfo.com'
  } else if (process.env.NODE_ENV === 'release') {
    baseURL = 'http://testomsapi.junyanginfo.com'
  } else if (process.env.NODE_ENV === 'beta') {
    baseURL = 'http://releaseomsapi.junyanginfo.com'
  } else if (process.env.NODE_ENV === 'production') {
    baseURL = 'http://omsapi.junyanginfo.com'
  }
  return baseURL
})()
fly.config.timeout = 15000

export default fly
