<template>
  <div class="home">
    <nav-bar class="nav_bar">
      <template v-slot:center>
          购物街
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/coms/navbar/navbar'
export default {
  name:"Home",
  data() {
    return {}
  },
  components:{
    NavBar
  }
}
</script>

<style scoped>
.home {
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
  z-index: 9;
}
</style>
