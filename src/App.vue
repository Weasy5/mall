<template>
  <div id="app">
    <router-view></router-view>
    <main-tabs></main-tabs>
  </div>
</template>

<script>
import MainTabs from 'components/content/mainTabs/mainTabs'
export default {
  name: 'App',
  components: {
    MainTabs
  }
}
</script>

<style>
@import 'assets/style/base.css';

</style>
