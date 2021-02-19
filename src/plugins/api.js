/**
 * api接口统一管理
 */
//import { get, post } from './axios'
import { post } from './axios'

export const apiUserList = (param) => post('/UserList', param)
export const apiAddUser = (param) => post('/AddUser', param)
export const apiQA = (param) => post('/qa', param)
