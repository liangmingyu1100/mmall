<template>
  <div>
    <div id="tabbar">
      <slot></slot>
    </div>
  </div>
</template>
<script>
</script>
<style scoped>
#tabbar {
  display: flex;
  text-align: center;
  background-color: #f6f6f6;
  height: 49px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 12px;
  box-shadow: 0px 1px 1px rgba(100, 100, 100, 0.1);
  z-index: 9;
}
</style>
