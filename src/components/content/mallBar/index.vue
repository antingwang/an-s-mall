<template>
  <div>
      <bar :barsData="bars"></bar>
  </div>
</template>

<script>
import Bar from '../../common/bar/index.vue'
export default {
  components: { Bar },
  data() {
    return {
      bars: [{
        icon: require('../../../assets/img/navigationBar/home.png'),
        content: '首页',
        path: '/home'
      }, {
        icon: require('../../../assets/img/navigationBar/classify.png'),
        content: '分类',
        path: '/classify'
      }, {
        icon: require('../../../assets/img/navigationBar/shopping-trolley.png'),
        content: '购物车',
        path: '/shoppingTrolley'
      }, {
        icon: require('../../../assets/img/navigationBar/mine.png'),
        content: '我的',
        path: '/mine'
      }]
    }
  }
}
</script>

<style>
</style>