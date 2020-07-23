export default {
  addCounter(state,payload){
    payload.count++
  },
  addGoods(state,payload){
    this.state.cartList.push(payload)
    payload.count=1
  }
}
