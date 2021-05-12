import { ADD_COUNT, ADD_TO_CART } from './mutations-types'
export default {
  addToCart(context, paylay) {
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.cartList.find(item => {
        return item.iid === paylay.iid;
      });
      if (oldProduct) {
        context.commit(ADD_COUNT, oldProduct);
        resolve('√相同商品数量+1');
      } else {
        paylay.count = 1;
        context.commit(ADD_TO_CART, paylay);
        resolve('√该商品成功加入购物车');
      }
    })
  }
}