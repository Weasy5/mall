<template>
  <div class="category">
    <nav-bar class="nav_bar">
      <template v-slot:center>
        商品分类
      </template>
    </nav-bar>
    <div class="category_content">
      <div class="category_item category_nav">
        <ul>
          <li v-for="(item, index) in leftMenuList" :key="index" :class="[index===currentIndex?'active':'']" @click="handleNav(index)">
            {{item}}
          </li>
        </ul>
      </div>
      <div class="category_item category_detail">
        <div class="section1" v-for="item in rightContentList">
          <div class="section1_title">
            {{item.cat_name}}
          </div>
          <div class="section1_content">
            <div class="section2_wrap" >
              <div class="section2_item" v-for="item2 in item.children" @click="handleGoList(item2.cat_id)">
                <img :src="item2.cat_icon" alt="">
                <div class="section2_title">{{item2.cat_name}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from 'components/coms/navbar/navbar.vue'

import { getHomeGoods } from 'network/home.js'
export default {
  data() {
    return {
      //所有商品数据
      cateList:[],
      // 左侧大菜单数据
      leftMenuList :[],
      // 右侧商品内容数据
      rightContentList :[],
      // 当前左侧菜单索引
      currentIndex:0
    }
  },
  components:{
    NavBar
  },
  created(){
    this.getGoods()
  },
  methods:{
    getGoods(){
      getHomeGoods().then(res =>{
        console.log(res)
        console.log(res)
        this.cateList = res.message
        this.leftMenuList = this.cateList.map(v=>v.cat_name)
        this.rightContentList = this.cateList[0].children
      })
    },
    // 获取左侧导航的索引
    handleNav(index){
      this.currentIndex = index
      this.rightContentList = this.cateList[index].children
    },
    // 点击去往商品列表页面
    handleGoList(id){
      this.$router.push(`/goodslist/${id}`)
    }
  }
}
</script>

<style scoped>
.category .nav_bar {
  color: #ffffff;
  background-color: var(--color-tint);
}
.category_content {
  display: flex;
  flex-direction: row;
}
.category_content .category_nav {
  flex: 0 0 30%;
  height: 100vh;
  overflow: scroll;
}
.category_nav li{
  text-align: center;
  margin: 10px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid #cccccc;
}
.active {
  color: var(--color-tint);
  border-bottom: 1px solid var(--color-tint);
}
.category_detail {
  flex: 1 1;
  text-align: center;
  height: 100vh;
  overflow: scroll;
}
.category_detail .section1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}
.section1 .section1_title {
  margin-bottom: 10px;
}
.section1_content .section2_wrap{
  display: flex;
  flex-flow: row wrap;
}
.section2_wrap .section2_item {
  flex: 0 0 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
}
.section2_item img {
  width: 40px;
  height: 40px;
  border-radius: 20%;
}
</style>
