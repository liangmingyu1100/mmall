import { instance1, instance2 } from './request'
// 请求banner列表和促销数据数据
export function getMultipdata () {
  return instance1({
    url: '/home/multidata'
  })
}
export function getGoodsData (type, page) {
  return instance2({
    url: 'home/data',
    params: {
      type,
      page
    }
  })
}
