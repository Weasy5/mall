<template>
  <div class="goods_list">
    <nav-bar>
      <template v-slot:center>
        商品列表
      </template>
    </nav-bar>
    <div class="list_content">
      <list-item v-for="item in goodsList" :key="item.goods_id" :itemInfo="item" @handleDetails="handleGoodsDetails"></list-item>
    </div>
  </div>
</template>

<script>
import NavBar from 'components/coms/navbar/navbar.vue'
import ListItem from './coms/list-item'

import { getGoodList } from 'network/home.js'
export default {
  data(){
    return {
      pagination:{
        pagenum:1,
        pagesize:10,
        totalpage:0
      },
      goodsList:[]
    }
  },
  components:{
    NavBar,
    ListItem
  },
  created(){
    this.getGoodsList()
  },
  computed:{
    cid(){
      return this.$route.params.cid
    }
  },
  methods:{
    // 获取商品列表
    getGoodsList(cid,...pagination){
      getGoodList().then(res=>{
        this.goodsList = res.message.goods
        this.pagination.totalpage = Math.ceil(res.message.total/this.pagination.pagesize)
        console.log(this.goodsList)
      })
    },
    handleGoodsDetails(data){
    this.$router.push(`/details/${data}`)
  }
  }

}
</script>

<style>

</style>
