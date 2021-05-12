<template>
  <div class="toast" v-show="isShow">
    <div class="message">{{ message }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      isShow: false,
    };
  },
  methods: {
    show(message = "默认信息", duration = 1500) {
      this.message = message;
      this.isShow = true;
      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, duration);
    },
  },
};
</script>
<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 25px 25px;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  z-index: 999;
  text-align: center;
}
.message {
  white-space: nowrap;
}
</style>