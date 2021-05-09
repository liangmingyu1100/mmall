<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="detail-nav">
        <div
          v-for="(item, index) in titles"
          :key="index"
          class="title-item"
          @click="titleClick(index)"
          :class="{ active: currentIndex === index }"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>
<script>
const NavBar = () => import("components/common/navbar/NavBar.vue");
export default {
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    backClick() {
      this.$router.go(-1);
    },
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
  },
  components: {
    NavBar,
  },
};
</script>
<style scoped>
.detail-nav {
  display: flex;
  font-size: 14px;
}
.title-item {
  flex: 1;
}
.back {
  margin-top: 2px;
}
.back img {
  width: 15px;
}
.active {
  color: var(--color-high-text);
}
</style>