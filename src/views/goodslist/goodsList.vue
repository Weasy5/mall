<template>
  <div class="goods_list">
    <nav-bar class="nav_bar">
      <template v-slot:left >
       <span class="back_arrow" @click="$router.go(-1)"><</span>
      </template>
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

//import { getGoodList } from 'network/home.js'
import { request } from "network/request";
export default {
  data(){
    return {
      query:'',
      pagination:{
        pagenum:1,
        pagesize:10,
      },
      totalpage:0,
      goodsList:[]
    }
  },
  components:{
    NavBar,
    ListItem
  },
  created(){
    this.getGoodsList(this.cid)
  },
  mounted(){
    window.addEventListener('scroll',this.handleScroll,true)
  },
  computed:{
    cid(){
      return this.$route.params.cid
    }
  },
  methods:{
    // 获取商品列表
    getGoodsList(cid){
      request({
        url:"https://api-hmugo-web.itheima.net/api/public/v1/goods/search",
        params:{
          cid:cid,
          pagenum:this.pagination.pagenum,
          pagesize:10
        }
      }).then(res=>{
        console.log(res)
        // 每一次请求的数据进行拼接
        this.goodsList = this.goodsList.concat(res.message.goods)
        this.totalpage = Math.ceil(res.message.total/this.pagination.pagesize)
      })
    },
    // 点击跳转到详情
    handleGoodsDetails(data){
      this.$router.push(`/details/${data}`)
    },
    // 监听页面滑动 拖动屏幕 加载下一页
    handleScroll(e){
      let scrollTop = e.target.documentElement.scrollTop || e.target.body.scrollTop;
      let scrollHeight = e.target.documentElement.scrollHeight || e.target.body.scrollHeight
      let clientHeight = e.target.documentElement.clientHeight || e.target.body.clientHeight
      if(scrollHeight - scrollTop === clientHeight && this.totalpage>this.pagination.pagenum){

        this.loadMore()
      }
    },
    // 加载更多商品信息
    loadMore(){
      this.pagination.pagenum++
      this.getGoodsList(this.cid)
      console.log(this.goodsList)
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
  z-index: 10;
  background-color: #ffffff;
}
.back_arrow {
  font-size: 24px;
}
.list_content {
  padding-top: 39px;
}
</style>
