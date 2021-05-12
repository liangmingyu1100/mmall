<template>
  <div class="side-bar">
    <div
      class="side-bar-item"
      v-for="(item, index) in categories"
      :key="index"
      @click="sideBarItemClick(index)"
      :class="{ active: currentIndex === index }"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    categories: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    sideBarItemClick(index) {
      this.currentIndex = index;
      this.$emit("sideBarItemClick", index);
    },
  },
};
</script>
<style scoped>
.side-bar {
  display: flex;
  flex-direction: column;
}
.side-bar-item {
  width: 100px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  background-color: rgb(246, 246, 246);
  color: #666;
  border-left: 3px solid transparent;
  font-size: 14px;
}
.active {
  border-color: var(--color-tint);
  color: var(--color-tint);
  background-color: #fff;
  font-weight: 700;
}
</style>