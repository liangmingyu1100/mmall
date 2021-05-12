import { ADD_COUNT, ADD_TO_CART } from './mutations-types'
export default {
  [ADD_COUNT](state, payload) {
    payload.count++;
  },
  [ADD_TO_CART](state, paylay) {
    paylay.checked = true;
    state.cartList.push(paylay);
  },
}