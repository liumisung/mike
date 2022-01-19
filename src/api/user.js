
import request from '@/utils/request'

const host = '/mike-web'

// 登录
export function login(data) { return request({ url: `${host}/oauth/login`, method: 'post', data }) }

// 注册
export function register(data) { return request({ url: `${host}/user/register`, method: 'post', data }) }

// 根据token 获取用户信息
export function getInfo(token) { return request({ url: `${host}/oauth/info`, method: 'get', params: { token }}) }

// 登出
export function logout(data) { return request({ url: `${host}/oauth/logout`, method: 'post', data }) }
