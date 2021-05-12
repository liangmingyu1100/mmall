<template>
  <div id="recommend">
    <div
      class="recommend-item"
      v-for="(item, index) in recommends"
      :key="index"
    >
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    recommends: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
<style scoped>
#recommend {
  display: flex;
  text-align: center;
}
.recommend-item {
  flex: 1;
  font-size: 12px;
  padding: 10px 0;
  border-bottom: 10px solid #eee;
}
.recommend-item img {
  width: 70px;
  height: 70px;
  margin-bottom: 5px;
}
</style>
