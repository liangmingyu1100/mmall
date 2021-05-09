import { instance2 } from './request'
// 获取详情页数据
export function getDetailData(iid) {
  return instance2({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommendData() {
  return instance2({
    url: '/recommend',
  })
}

// 定义商品类
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

// 定义商家类 
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}

// 定义参数类
export class GoodsParam {
  constructor(info, rule) {
    this.image = info.image ? info.image : '';
    this.info = info.set;
    this.sizes = rule.tables;
  }
}