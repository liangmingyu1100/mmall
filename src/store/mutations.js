import { ADD_COUNT, ADD_TO_CART } from './mutations-types'
export default {
  [ADD_COUNT](state, payload) {
    payload.count++;
  },
  [ADD_TO_CART](state, paylay) {
    paylay.checked = true;
    state.cartList.push(paylay);
  },
  removeFromCart(state, payload) {
    payload.forEach(item => {
      state.cartList.some((value, index, array) => {
        if (item.iid === value.iid) {
          array.splice(index, 1);
          return true
        }
      })
    });
  }
}