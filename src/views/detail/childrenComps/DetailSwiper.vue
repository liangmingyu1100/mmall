<template>
  <swiper class="detail-swiper" ref="swiper">
    <swiper-item v-for="(item, index) in topImages" :key="index">
      <img :src="item" alt="" @load="imageLoad" />
    </swiper-item>
  </swiper>
</template>
<script>
import { Swiper, SwiperItem } from 'components/common/swiper'
import { swiperImageListenermixin } from 'common/mixin.js'
export default {
  props: {
    topImages: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  mixins: [swiperImageListenermixin]
}
</script>
<style scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>
