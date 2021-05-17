<template>
  <div class="cart-nav-bar">
    <nav-bar>
      <div slot="center">购物车({{ cartListLength }})</div>
      <div slot="right" @click="manageClick">
        {{ isManage ? "完成" : "管理" }}
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";

export default {
  data() {
    return {
      isManage: false,
    };
  },
  create() {},
  methods: {
    manageClick() {
      this.$bus && this.$bus.$emit("manageClick");
      this.isManage = !this.isManage;
    },
  },
  components: {
    NavBar,
  },
  props: {
    cartListLength: {
      type: Number,
    },
  },
};
</script >
<style scoped>
.cart-nav-bar {
  background-color: var(--color-tint);
  color: #333;
}
</style>;
