<template>
  <div class="category">
    <div class="wrapper">
        <div @click="btnClick">点击</div>
         <ul  class="content">
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
          <li>1111111111</li>
        </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      wrapper:null
    }
  },
  mounted(){
    const wrapper = document.querySelector('.wrapper')
    new BScroll(wrapper,{})
  },
  methods:{
    btnClick(){
      console.log('dianjil')
    }
  }
}
</script>

<style scoped>
.category {

}
.category .wrapper {
  height: 200px;
  background-color: pink;
  overflow: hidden;
}

</style>
