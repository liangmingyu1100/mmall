<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar"></detail-nav-bar>
    <scroll class="content" ref="scroll">
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :detailInfo="detailInfo"
        @imageLoad="imageLoad"
      ></detail-goods-info>
      <detail-param-info :goods-param="paramInfo"></detail-param-info>
    </scroll>
  </div>
</template>
<script>
const DetailNavBar = () => import("./childrenComps/DetailNavBar");
const DetailSwiper = () => import("./childrenComps/DetailSwiper");
const DetailBaseInfo = () => import("./childrenComps/DetailBaseInfo");
const DetailShopInfo = () => import("./childrenComps/DetailShopInfo");
const DetailGoodsInfo = () => import("./childrenComps/DetailGoodsInfo");
const DetailParamInfo = () => import("./childrenComps/DetailParamInfo");

const Scroll = () => import("components/common/scroll/Scroll");

import { getDetailData, Goods, Shop, GoodsParam } from "network/detail.js";

export default {
  // 这里的名字用来 keepalive的exclude属性匹配
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    Scroll,
  },
  created() {
    this.iid = this.$route.params.iid;

    getDetailData(this.iid).then((res) => {
      console.log(res);
      const result = res.data.result;
      // 1.获取轮播图图片数据
      this.topImages = result.itemInfo.topImages;
      // 2.获取商品基本信息
      this.goods = new Goods(
        result.itemInfo,
        result.columns,
        result.shopInfo.services
      );
      // 3.获取商家信息
      this.shop = new Shop(result.shopInfo);
      // 4.获取商品信息
      this.detailInfo = result.detailInfo;
      // 5.获取商品参数信息
      this.paramInfo = new GoodsParam(
        result.itemParams.info,
        result.itemParams.rule
      );
    });
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
    },
  },
};
</script>
<style scoped>
#detail {
  position: relative;
  height: 100vh;
  z-index: 9;
}
.detail-nav-bar {
  position: relative;
  z-index: 999;
  background-color: #fff;
}
.content {
  height: calc(100% - 44px);
  position: relative;
  z-index: 99;
  background-color: #fff;
}
</style>