<template>
  <div class="recommend">
    <div class="recommend_item" v-for="(item,index) in recommendsList" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div class="text">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    recommendsList:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;

  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
}
.recommend .recommend_item {
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  flex: 1;
}
.recommend_item img {
  width: 70px;
  height: 70px;
}
</style>
