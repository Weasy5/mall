<template>
  <div class="main_tabs">
    <tab-bar>
      <tab-bar-item path='/home'>
        <template v-slot:item-icon>
        <img src="~assets/img/tabbar/home.svg"  >
        </template>
        <template v-slot:item-icon-active >
        <img src="~assets/img/tabbar/home_active.svg"  >
        </template>
        <template v-slot:item-text>
          <span >首页</span>
        </template>
      </tab-bar-item>
      <tab-bar-item path='/category'>
        <template v-slot:item-icon>
        <img src="~assets/img/tabbar/category.svg"  >
        </template>
        <template v-slot:item-icon-active >
        <img src="~assets/img/tabbar/category_active.svg"  >
        </template>
        <template v-slot:item-text>
          <span >分类</span>
        </template>
      </tab-bar-item>
      <tab-bar-item path='/cart'>
        <template v-slot:item-icon>
        <img src="~assets/img/tabbar/shopcart.svg"  >
        </template>
        <template v-slot:item-icon-active >
        <img src="~assets/img/tabbar/shopcart_active.svg"  >
        </template>
        <template v-slot:item-text>
          <span >购物车</span>
        </template>
      </tab-bar-item>
      <tab-bar-item path='/profile'>
        <template v-slot:item-icon>
        <img src="~assets/img/tabbar/profile.svg">
        </template>
        <template v-slot:item-icon-active >
        <img src="~assets/img/tabbar/profile_active.svg"  >
        </template>
        <template v-slot:item-text>
          <span >我的</span>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from  'components/coms/tababr/tabbar'
import TabBarItem from 'components/coms/tababr/tabbar-item'
export default {
  data(){
    return {

    }
  },
  components: {
    TabBar,
    TabBarItem
  }

}
</script>

<style>

</style>
