<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item
        v-for="(item, index) in cartList"
        :key="index"
        :cart-item="item"
      />
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll.vue";
import CartListItem from "./CartListItem.vue";
export default {
  components: {
    Scroll,
    CartListItem,
  },
  data() {
    return {
      refrensh: null,
    };
  },
  props: {
    cartList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  // 解决不能滚动bug
  // 思路：每次选中时刷新scroll组件重新计算scrollerHight
  activated() {
    this.$refs.scroll.refresh();
  },
  methods: {},
};
</script>
<style scoped>
.cart-list {
  height: calc(100% - 93px - 54px);
}
.content {
  /* position: absolute;
  top: 46px;
  bottom: 49px; */
  height: 100%;
  overflow: hidden;
}
</style>