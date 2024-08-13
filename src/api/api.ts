 import { get, post } from './index'

 export const getUserInfo = (params: any) => get('/user/info', params)
 export const login = (params: any) => post('/user/login', params)
 