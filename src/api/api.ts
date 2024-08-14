 import { get, post } from './index'

// 登录
 export const login = (params: any) => post('/user/login', params)
 // 注册
 export const register = (params: any) => post('/user/register', params)
 // 获取用户信息
 export const getUserInfo = (params: any) => get('/user/info', params)
 

 