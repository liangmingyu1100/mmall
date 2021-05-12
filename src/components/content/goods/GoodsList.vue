<template>
  <div class="goods">
    <goods-list-item
      v-for="(item, index) in goods"
      :goodsitem="item"
      :key="index"
    />
  </div>
</template>
<script>
const GoodsListItem = () => import('./GoodsListItem')
export default {
  props: {
    goods: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    GoodsListItem
  }
}
</script>
<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
