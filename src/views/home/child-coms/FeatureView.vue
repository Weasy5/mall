<template>
  <div class="feature_wrap">
    <div class="title">本周流行</div>
    <div class="feature">
      <div class="feature_item" v-for="(item, index) in featureList" :key="index">
        <img src="https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png" alt="">
        <div class="text">{{item.words}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    featureList:{
      type:Array,
      // 默认给空数组
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.feature_wrap {
  padding-bottom: 10px;
  border-bottom: 10px solid #eee;
}
.feature_wrap .title{
  height: 44px;
  line-height: 44px;
  text-align: center;
  color: black;
  font-weight: bold;
}
.feature {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
}
.feature_item {
  flex: 1;
}
.feature_item img {
  width: 70px;
  height: 70px;
  padding: 5px 5px;
  margin-right: 10px;
}
</style>
