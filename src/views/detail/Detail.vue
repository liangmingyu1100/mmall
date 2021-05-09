<template>
  <div id="detail">
    <detail-nav-bar
      class="detail-nav-bar"
      @titleClick="titleClick"
      ref="navBar"
    ></detail-nav-bar>
    <scroll class="content" ref="scroll" @scroll="contentScroll">
      <detail-swiper :top-images="topImages" ref="swiper" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info
        :detailInfo="detailInfo"
        @imageLoad="imageLoad"
      ></detail-goods-info>
      <detail-param-info :goods-param="paramInfo" ref="paramInfo" />
      <detail-comment-info :comment-info="commentInfo" ref="commentInfo" />
      <goods-list :goods="recommendGoods" ref="recommend" />
    </scroll>
    <detail-bottom-bar />
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>
<script>
const DetailNavBar = () => import("./childrenComps/DetailNavBar");
const DetailSwiper = () => import("./childrenComps/DetailSwiper");
const DetailBaseInfo = () => import("./childrenComps/DetailBaseInfo");
const DetailShopInfo = () => import("./childrenComps/DetailShopInfo");
const DetailGoodsInfo = () => import("./childrenComps/DetailGoodsInfo");
const DetailParamInfo = () => import("./childrenComps/DetailParamInfo");
const DetailCommentInfo = () => import("./childrenComps/DetailCommentInfo");
const DetailBottomBar = () => import("./childrenComps/DetailBottomBar");

const GoodsList = () => import("components/content/goods/GoodsList");

const Scroll = () => import("components/common/scroll/Scroll");

import { backTopMixin } from "common/mixin.js";

import {
  getDetailData,
  getRecommendData,
  Goods,
  Shop,
  GoodsParam,
} from "network/detail.js";

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
      commentInfo: [],
      recommendGoods: [],
      scrollHight: 0, //记录滚动的高度
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    GoodsList,
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
      // 6.获取评论信息
      if (result.rate.cRate != 0) {
        this.commentInfo = result.rate.list;
      }
    });
    getRecommendData().then((res) => {
      console.log(res);
      // 7.获取推荐商品的信息
      this.recommendGoods = res.data.data.list;
    });
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
    },
    //点击主题导航让scroll滚动到指定位置
    titleClick(index) {
      switch (index) {
        case 0:
          this.scrollHight = this.$refs.swiper.$el.offsetTop;
          break;
        case 1:
          this.scrollHight = this.$refs.paramInfo.$el.offsetTop;
          break;
        case 2:
          this.scrollHight = this.$refs.commentInfo.$el.offsetTop;
          break;
        case 3:
          this.scrollHight = this.$refs.recommend.$el.offsetTop;
          break;
      }
      this.$refs.scroll.scrollTo(0, -this.scrollHight, 1000);
    },
    contentScroll(position) {
      // 滑动scroll与导航相联
      let y = position.y;
      if (y <= -this.$refs.recommend.$el.offsetTop) {
        this.$refs.navBar.currentIndex = 3;
      } else if (y <= -this.$refs.commentInfo.$el.offsetTop) {
        this.$refs.navBar.currentIndex = 2;
      } else if (y <= -this.$refs.paramInfo.$el.offsetTop) {
        this.$refs.navBar.currentIndex = 1;
      } else {
        this.$refs.navBar.currentIndex = 0;
      }
      // 判断backtop是否显示
      this.showBackTop(position);
    },
  },
  mixins: [backTopMixin],
};
</script>
<style scoped>
#detail {
  position: relative;
  height: 100vh;
  z-index: 9;
}
.detail-nav-bar {
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}
.content {
  position: absolute;
  top: 45px;
  left: 0;
  right: 0;
  bottom: 49px;
  /* z-index: 99; */
  background-color: #fff;
  overflow: hidden;
}
</style>