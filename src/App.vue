<template>
  <div id="app">
    <router-view></router-view>
    <mall-bar></mall-bar>
  </div>
</template>

<script>
import MallBar from './components/content/mallBar/index.vue'

export default {
  components: { MallBar }
}
</script>

<style>
@import "./assets/css/base.css"
</style>
