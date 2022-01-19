
import request from '@/utils/request'

const host = '/mike-web'

// 获取图片列表
export function imgList(data) { return request({ url: `${host}/reptile/imgList`, method: 'post', data }) }
