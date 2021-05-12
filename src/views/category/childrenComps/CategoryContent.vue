<template>
  <div class="content-list">
    <div
      v-for="(item, index) in subCategories"
      :key="index"
      class="content-item"
    >
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
      <div class="item-title">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    subCategories: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  create() {},
  methods: {},
};
</script>
<style scoped>
.content-list {
  display: flex;
  flex-wrap: wrap;
  padding: 20px 10px 0px;
}
.content-item {
  width: 80px;
  height: 80px;
  text-align: center;
  font-size: 12px;
  margin-bottom: 10px;
}
.content-item img {
  width: 50px;
}
</style>