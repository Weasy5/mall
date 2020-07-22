<template>
  <div class="home_swiper">
    <swiper>
      <swiper-item v-for="(item,index) in swiperList" :key="index" >
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/coms/swiper'
export default {
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    swiperList:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      isLoad : false
    }
  },
  methods:{
    imageLoad(){
      if(!this.isLoad){
        this.$emit('swiperImgLoaded')
        this.isLoad =true
      }
    }
  }
}
</script>

<style>

</style>
