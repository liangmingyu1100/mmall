<template>
  <div class="base-info">
    <div class="info-img">
      <img src="~assets/img/profile/avatar.svg" alt="" />
    </div>
    <div class="info-content">
      <p>登录/注册</p>
      <span>
        <img src="~assets/img/profile/phone.svg" alt="" />暂无绑定手机号
      </span>
    </div>
    <div class="info-arrow">
      <img src="~assets/img/profile/back.svg" alt="" />
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
.base-info {
  display: flex;
  height: 80px;
  background-color: var(--color-tint);
  padding: 15px 10px;
}
.info-img {
  width: 60px;
  height: 60px;
  margin-top: -5px;
}
.info-img img {
  width: 100%;
}
.info-content {
  flex: 1;
  margin-top: 5px;
  margin-left: 15px;
  font-size: 14px;
  color: #fff;
}
.info-content p {
  margin-bottom: 5px;
}
.info-content span {
  vertical-align: middle;
}
.info-content img {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
.info-arrow {
  width: 40px;
  padding-top: 10px;
  text-align: center;
}
.info-arrow img {
  width: 27px;
  height: 27px;
}
</style>