/**
 * api接口统一管理
 */
import { get, post } from './axios'

export const apiAddUser = param => post('/addUser', param)
