
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
// 引入store模块
// import outer from './modules/outer'

Vue.use(Vuex)

const state = {
  //购物车的商品信息
  cartList:[]
}

const options = {
  state,
  mutations,
  actions,
  modules: {
  }
}

export default new Vuex.Store(options)
