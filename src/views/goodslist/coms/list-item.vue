<template>
  <div class="list_item" @click="handleGoDetails">
    <div class="left_img">
      <img :src="itemInfo.goods_small_logo" alt="">
    </div>
    <div class="right_content">
      <div class="goods_name">
        {{itemInfo.goods_name}}
      </div>
      <div class="goods_price">
        {{itemInfo.goods_price}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    itemInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    handleGoDetails(){
      this.$emit('handleDetails',this.itemInfo.goods_id)
    }
  }
}
</script>

<style scoped>
.list_item {
  display: flex;
  justify-content: center;
  align-items: center;
}
.list_item .left_img {
  flex: 1;
  width: 30%;
}
.left_img img {
  width: 120px;
  height: 120px;
}
.list_item .right_content {
  flex: 1 ;
}
</style>
