<template>
  <div class="home">
    <nav-bar class="nav_bar">
      <template v-slot:center>
          购物街
      </template>
    </nav-bar>
    <home-swiper :swiperList="swiperList" @swiperImgLoaded='swiperImgLoaded'></home-swiper>
    <home-recommend-view :recommendsList="recommendsList"></home-recommend-view>
    <feature-view :featureList="featureList"></feature-view>
    <tab-control :titles="['流行','新款','精选']" class="tab_control" ref="tabControl"></tab-control>
    <ul>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
       <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
       <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
      <li>111111</li>
    </ul>
  </div>
</template>

<script>
import NavBar from 'components/coms/navbar/navbar'
import HomeSwiper from './child-coms/HomeSwiper.vue'
import HomeRecommendView from './child-coms/HomeRecommendView'
import FeatureView from './child-coms/FeatureView'
import TabControl from 'components/content/tabControl/TabControl'

import { getHomeMultiData } from '../../network/home'

export default {
  name:"Home",
  data() {
    return {
      //轮播图数据
      swiperList:[],
      recommendsList:[],
      featureList:[],
      goods:{
        'pop':{
          pageNum:1,
          list:[]
        },
        'new':{
          pageNum:1,
          list:[]
        },
        'sell':{
          pageNum:1,
          list:[]
        }
      }
    }
  },
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    TabControl
  },
  created() {
    this.getHomeMultiData()
  },
  mounted(){
    this.swiperImgLoaded()
  },
  methods:{
    //获取首页数据
    getHomeMultiData(){
      getHomeMultiData().then(res=>{
        this.swiperList = res.data.banner.list
        this.recommendsList = res.data.recommend.list
        this.featureList = res.data.keywords.list

      })
    },

    // 获取tabcontrol组件的位置
    swiperImgLoaded(){
      console.log('tabcontrol',this.$refs.tabControl.$el.offsetTop)
    }
  }
}
</script>

<style scoped>
.home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
.nav_bar {
  background-color: var(--color-tint);
  color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
/* 让tabcontrol黏性定位 */
.tab_control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
</style>
