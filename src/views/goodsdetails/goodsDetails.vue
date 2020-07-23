<template>
  <div class="goods_details">
      <nav-bar class="nav_bar">
        <template v-slot:left>
          <span @click="$router.go(-1)"><</span>
        </template>
        <template v-slot:center>
          商品详情
        </template>
      </nav-bar>
      <div class="goods_img">
        <swiper>
          <swiper-item v-for="(item,index) in swiperList" :key="index">
            <img :src="item.pics_mid" alt="" >
          </swiper-item>
        </swiper>
      </div>
      <div class="goods_info">
        <div class="goods_name">
          {{goodsDetailList.goods_name}}
        </div>
        <div class="goods_price">
          {{goodsDetailList.goods_price}}
        </div>
        <div v-for="item in $store.state.cartList">
          {{item}}
        </div>
      </div>
      <div class="goods_introduce" v-html="goodsDetailList.goods_introduce">
      </div>
      <cart-tabs-bar>
        <template v-slot:tools>
          <span @click="handleAddCart">加入购物车</span>
        </template>
        <template v-slot:total>
          <span>结算</span>
        </template>
      </cart-tabs-bar>
  </div>
</template>

<script>
import CartTabsBar from 'components/content/cartTabsBar/cartTabBar'
import NavBar from 'components/coms/navbar/navbar.vue'
import { Swiper, SwiperItem} from 'components/coms/swiper'

import { request } from '../../network/request'

export default {
  name:'toast',
  props:{
    message:{
      type:String,
      default () {
        return ''
      }
    }
  },
  components:{
    NavBar,
    Swiper,
    SwiperItem,
    CartTabsBar
  },
  data() {
    return {
      goodsDetailList:[],
      swiperList:[]
    }
  },
  created(){
    this.getGoodsDetails()
  },
  computed:{
    goods_id(){
      return this.$route.params.goods_id
    }
  },
  methods:{
    // 获取商品详情数据
    getGoodsDetails(){
      request({
        url:'https://api-hmugo-web.itheima.net/api/public/v1/goods/detail',
        params:{
          goods_id:this.goods_id
        }
      }).then(res => {
        this.goodsDetailList = res.message
        this.swiperList = res.message.pics
        console.log(this.swiperList);
      })
    },
    // 将商品加入购物车
    handleAddCart (){
      this.$store.dispatch('addCart',this.goodsDetailList)
    }
  }
}
</script>

<style scoped>
.nav_bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: pink;
  z-index: 9;
}
</style>
