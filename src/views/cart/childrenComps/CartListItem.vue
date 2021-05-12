<template>
  <div class="cart-item">
    <check-button
      class="item-selector"
      :isChecked="cartItem.checked"
      @click.native="checkBtnClick"
    />
    <div class="item-img">
      <img :src="cartItem.img" alt="商品图片" />
    </div>
    <div class="item-info">
      <div class="item-title">{{ cartItem.title }}</div>
      <div class="item-desc">商品描述: {{ cartItem.desc }}</div>
      <div class="info-bottom">
        <div class="item-price left">¥{{ cartItem.realPrice }}</div>
        <div class="item-count right">x{{ cartItem.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/common/checkbutton/CheckButton.vue";
export default {
  components: { CheckButton },
  data() {
    return {};
  },
  props: {
    cartItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  create() {},
  methods: {
    checkBtnClick() {
      this.cartItem.checked = !this.cartItem.checked;
    },
  },
  components: {
    CheckButton,
  },
};
</script>
<style scoped>
.cart-item {
  width: 100vw;
  display: flex;
  position: relative;
  border-bottom: 1px solid #ccc;
}
.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-img {
  padding: 5px;
}

.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}

.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}
.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}

.info-bottom {
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}

.info-bottom .item-price {
  color: orangered;
}
.item-selector {
  display: flex;
  align-self: center;
  justify-content: space-between;
}
</style>