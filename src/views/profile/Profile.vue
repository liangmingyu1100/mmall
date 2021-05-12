<template>
  <div id="profile">
    <profile-base-info />
    <profile-info-list />
  </div>
</template>

<script>
import ProfileInfoList from "./childrenComps/ProfileInfoList.vue";
const ProfileBaseInfo = () => import("./childrenComps/ProfileBaseInfo.vue");
export default {
  data() {
    return {};
  },
  components: {
    ProfileBaseInfo,
    ProfileInfoList,
  },
  create() {},
  methods: {},
};
</script>
<style scoped>
</style>