<template>
  <div class="cart_tabs_bar">
    <div class="tools">
      <slot name="tools"></slot>
    </div>
    <div class="total">
      <slot name="total"></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.cart_tabs_bar {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  height: 55px;
  padding: 5px 0;
  line-height: 55px;
}
.tools {
  background-color: coral;
}
.total {
  background-color: pink;
}
.tools, .total {
  text-align: center;
  flex: 1;
}
</style>
