export default {
  cartListLength(state) {
    return state.cartList.length;
  },
  cartList(state) {
    return state.cartList;
  },
  // 计算属性中不能使用另一个计算属性
  // checkedProduct(state) {
  //   if (state.cartList.length === 0) return 0
  //   return state.cartList.filter(item => item.checked)
  // },
  totalCount(state) {
    if (state.cartList.length === 0) return 0
    return state.cartList.filter(item => item.checked).reduce((pre, cur) => {
      return pre + cur.count
    }, 0);
  },
  totalPrice(state) {
    if (state.cartList.length === 0) return 0
    return state.cartList.filter(item => item.checked)
      .reduce((pre, cur) => {
        return pre + cur.realPrice * cur.count
      }, 0).toFixed(2)
  }
}