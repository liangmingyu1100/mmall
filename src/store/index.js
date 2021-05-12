import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import modules from './modules'
import getters from './getters'


// 1.安装vuex
Vue.use(Vuex)

// 2.创建store对象 
// 3.导出store对象
const state = {
  cartList: []
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules
})
