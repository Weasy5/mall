<template>
   <div class="tab_bar_item" @click="handleTabs">
     <div class="item_icon">
       <div v-if="!isActive">
        <slot name="item-icon" ></slot>
       </div>
       <div v-else>
        <slot name="item-icon-active" ></slot>
       </div>
     </div>
     <div :style="activeStyle">
       <slot name="item-text" ></slot>
     </div>
  </div>
</template>

<script>
export default {
 name:'TabBarItem',
 props:{
   path:String,
   activeColor:{
     type:String,
     default:'#ef6183'
   }
 },
 data() {
   return {

   }
 },
 methods:{
   handleTabs(){
     this.$router.push(this.path)
   }
 },
 computed:{
   isActive(){
     // 判断当前活跃的路由是不是该路由
     // 活跃路由只存在一个
     return this.$route.path.indexOf(this.path) !== -1
   },
   activeStyle(){
     return this.isActive ? {color: this.activeColor}:{}
   }
 }
}
</script>

<style scoped>
.tab_bar_item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  font-size: 14px;
}
.tab_bar_item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
.active {
  color: palevioletred;
}
</style>
