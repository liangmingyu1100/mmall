<template>
  <div class="goods-item" @click="goodsItemClick">
    <a :href="goodsitem.link"></a>
    <img :src="showImage" alt="" @load="itemImageLoad" />
    <div class="goods-info">
      <p>{{ goodsitem.title }}</p>
      <span class="price">{{ goodsitem.price }}</span>
      <span class="collect">{{ goodsitem.cfav }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    goodsitem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    goodsItemClick() {
      this.$router.push("/detail/" + this.goodsitem.iid);
    },
    itemImageLoad() {
      // 第一种思路  通过发出不同的事件  在不同的组件监听不同的事件发生
      // if (this.$route.path.indexOf('/home')) {
      //   this.$bus.$emit("HomeItemImageLoad");
      // } else {
      //   this.$bus.$emit('DetailItemImageLoad')
      // }

      //第二种思路 使用mixin混入
      this.$bus.$emit("itemImageLoad");
    },
  },
  computed: {
    showImage() {
      return this.goodsitem.show
        ? this.goodsitem.show.img
        : this.goodsitem.image;
    },
  },
};
</script>
<style scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>