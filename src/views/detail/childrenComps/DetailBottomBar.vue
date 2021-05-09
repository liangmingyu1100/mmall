<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart">加入购物车</div>
      <div class="buy">立即购买</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {},
};
</script>
<style scoped>
.bottom-bar {
  display: flex;
  position: fixed;
  z-index: 9;
  height: 49px;
  background-color: #fff;
  bottom: -2px;
  width: 100%;
}
.bar-item {
  display: flex;
  flex: auto;
  text-align: center;
}
.bar-left .text {
  font-size: 13px;
}
.bar-left .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 6px auto 0;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}
.bar-left .service {
  background-position: 0 -54px;
}
.bar-left .shop {
  background-position: 0 -98px;
}
.bar-item > div {
  flex: 1;
}
.bar-right {
  font-size: 14px;
  color: #fff;
  line-height: 49px;
}
.cart {
  background-color: #fdd526;
  color: #000000;
}
.buy {
  background-color: #ff6499 !important;
}
</style>