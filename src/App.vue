<template>
  <div id="app">
    <main-tab-bar />
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
const MainTabBar = () => import("components/content/maintabbar/MainTabBar.vue");
export default {
  components: {
    MainTabBar,
  },
};
</script>
<style scoped>
@import url("assets/css/bass.css");
</style>
