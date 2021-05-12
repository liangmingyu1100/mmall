<template>
  <div class="info-list">
    <div class="list-header">
      <div class="money">
        <div><span class="number">0.00</span>元</div>
        <span>我的余额</span>
      </div>
      <div class="book">
        <div><span class="number">0</span>个</div>
        <span>我的优惠</span>
      </div>
      <div class="store">
        <div><span class="number">0</span>分</div>
        <span>我的积分</span>
      </div>
    </div>
    <div class="listview">
      <ul>
        <li>
          <img src="~assets/img/profile/message.svg" alt="" />
          我的消息
        </li>
        <li>
          <img src="~assets/img/profile/pointer.svg" alt="" />
          积分商城
        </li>
        <li>
          <img src="~assets/img/profile/vip.svg" alt="" />
          会员卡
        </li>
        <li>
          <img src="~assets/img/profile/cart.svg" alt="" />
          我的购物车
        </li>
        <li>
          <img src="~assets/img/profile/shopping.svg" alt="" />
          下载购物APP
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  create() {},
  methods: {},
};
</script>
<style scoped>
.list-header {
  display: flex;
  background-color: #f2f2f2;
  border-bottom: 15px solid #f2f2f2;
}
.list-header > div {
  height: 80px;
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
}
.list-header > div:nth-child(-n + 2) {
  margin-right: 2px;
}
.list-header .number {
  font-size: 22px;
  color: var(--color-tint);
}
.listview {
  background-color: #f2f2f2;
}
.listview ul li {
  height: 40px;
  padding: 5px 15px;
  line-height: 30px;
  list-style: none;
  border-bottom: 1px solid #f2f2f2;
  background-color: #fff;
}
.listview ul li:nth-child(4) {
  margin-top: 15px;
}
.listview img {
  width: 27px;
  vertical-align: middle;
}
</style>