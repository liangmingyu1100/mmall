<template>
  <div id="cart">
    <cart-nav-bar :cartListLength="cartListLength" />
    <cart-list :cartList="cartList" />
    <cart-bottom-bar />
  </div>
</template>

<script>
import CartNavBar from "./childrenComps/CartNavBar.vue";
import CartList from "./childrenComps/CartList.vue";
import CartBottomBar from "./childrenComps/CartBottomBar.vue";
// 导入辅助函数 mapGetters
import { mapGetters } from "vuex";

export default {
  components: {
    CartNavBar,
    CartList,
    CartBottomBar,
  },
  data() {
    return {};
  },
  create() {},
  methods: {},
  computed: {
    ...mapGetters(["cartListLength", "cartList"]),
  },
};
</script>
<style scoped>
#cart {
  height: 100vh;
  position: relative;
}
</style>