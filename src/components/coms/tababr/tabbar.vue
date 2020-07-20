<template>
  <div class="tab_bar">
    <slot></slot>
     <!--  <div class="tab_bar_item">
        <img src="../../assets/img/tabbar/index.svg" alt="">
        <span>首页</span>
      </div>
      <div class="tab_bar_item">
        <img src="../../assets/img/tabbar/store.svg" alt="">
        <span>分类</span>
      </div>
      <div class="tab_bar_item">
        <img src="../../assets/img/tabbar/cart-full.svg" alt="">
        <span>购物车</span>
      </div>
      <div class="tab_bar_item">
        <img src="../../assets/img/tabbar/profile.svg" alt="">
        <span>我的</span>
      </div> -->

  </div>
</template>

<script>
//import TabBarItem from './coms/tabbar-item'
export default {
  name: 'TabBar',
  data(){
    return {

    }
  },
  components: {

  }

}
</script>

<style lang="css" scoped>
.tab_bar {
  display: flex;
  justify-content: space-between;
  background-color: #f6f6f6;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  box-shadow: 0 -1px 1px rgba(100, 100,100, 0.2);
  /* //line-height: 49px; */
  padding: 5px 0;
}
</style>
