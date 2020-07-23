<template>
  <div class="cart">
    <nav-bar class="nav_bar">
      <template v-slot:left>
        <span @click="$router.go(-1)"><</span>
      </template>
      <template v-slot:center>
        购物车
      </template>
    </nav-bar>
    <cart-tabs-bar>
      <template v-slot:tools>
        <span>返回</span>
      </template>
      <template v-slot:total>
        <span>结算</span>
      </template>
    </cart-tabs-bar>
  </div>
</template>

<script>
import NavBar from 'components/coms/navbar/navbar.vue'
import CartTabsBar from 'components/content/cartTabsBar/cartTabBar'
export default {
  name:'Cart',
  components:{
    CartTabsBar,
    NavBar
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
