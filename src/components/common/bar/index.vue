<template>
  <div id="bar-box">
      <div
        v-for="item in barsData"
        :key="item.icon"
        class="bar-item-box"
        @click="jumpToItemPath(item.path)"
      >
        <img :src="item.icon" />
        <div :style="{ color: $route.path.includes(item.path) ? activeColor : '#000000' }" >{{ item.content }}</div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    barsData: {
      type: Array,
    },
    activeColor: {
      type: String,
      default: 'green'
    }
  },
  methods: {
    jumpToItemPath(path) {
      this.$router.replace(path)
    }
  },
}
</script>

<style>
@import "./index.css"
</style>