/* 对首页数据的请求 */

import { request } from "./request";

// 首页轮播图数据请求
export function getHomeMultiData (){
  return request({
    url:'http://123.207.32.32:8000/home/multidata'
  })
}

// 首页商品数据请求
export function getHomeGoods (){
  return request({
    url:'https://api-hmugo-web.itheima.net/api/public/v1/categories'
  })
}

// 商品详情数据
export function getGoodList(cat_id,pagenum,pagesize){
  return request({
    url:'https://api-hmugo-web.itheima.net/api/public/v1/goods/search',
    params: {
      cat_id,
      pagenum,
      pagesize
    }
  })
}
