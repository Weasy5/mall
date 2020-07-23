export default {
  addCart(context,payload){
    // 判断商品是否存在
    const index = context.state.cartList.findIndex(e=>e.goods_id ===payload.goods_id)
    if(index === -1){
      // 不存在 提交给mutation进行数据x修改
      context.commit('addGoods',payload)
    }else{
      context.commit('addCounter',payload)
    }
  }
}
