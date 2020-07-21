<template>
  <div class="tab_control">
    <div v-for="(item, index) in titles"
         class="tab_control_item"
         :class="{active: index === currentIndex}"
         @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      // 当前tab的索引
      currentIndex:0
    }
  },
  methods:{
    itemClick(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>
.tab_control {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}
.tab_control .tab_control_item {
  flex: 1;

}
.tab_control_item  span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
}
.active span {
   border-bottom: 2px solid var(--color-tint);
}
</style>
