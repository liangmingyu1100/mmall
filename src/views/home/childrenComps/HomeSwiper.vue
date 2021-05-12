<template>
  <div>
    <swiper ref="swiper">
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
// 这里不能用懒加载
// const { Swiper, SwiperItem } = () => import("components/common/swiper");
import { Swiper, SwiperItem } from "components/common/swiper";
// 混入
import { swiperImageListenermixin } from "common/mixin.js";
export default {
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    // 解决详情页不能每次获取到轮播图数据的问题
    stopTimer() {
      // 停止轮播图的定时器
      this.$refs.swiper.stopTimer();
    },
    startTimer() {
      // 开启轮播图的定时器
      this.$refs.swiper.startTimer();
    },
  },
  mixins: [swiperImageListenermixin],
};
</script>
