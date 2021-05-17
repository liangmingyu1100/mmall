<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :titles="['流行', '新款', '推荐']"
      class="tab-control"
      @tabClick="tabClick"
      v-show="isFixedTab"
      ref="tabControl1"
    />
    <scroll
      class="content"
      :probe-type="3"
      ref="scroll"
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
      <home-swiper
        :banners="banners"
        class="home-banner"
        @imageLoad="imageLoad"
        ref="homeSwiper"
      ></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <home-feature />
      <tab-control
        :titles="['流行', '新款', '推荐']"
        class="tab-control"
        @tabClick="tabClick"
        ref="tabControl2"
      />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>
<script>
// 公共组件
// 网络封装
import { getMultipdata, getGoodsData } from "network/home.js";

import { backTopMixin } from "common/mixin.js";

const NavBar = () => import("components/common/navbar/NavBar");
const Scroll = () => import("components/common/scroll/Scroll");

// 业务组件
const TabControl = () => import("components/content/tabcontrol/TabControl");
const GoodsList = () => import("components/content/goods/GoodsList");

// 主页特有组件
const HomeSwiper = () => import("./childrenComps/HomeSwiper");
const HomeRecommendView = () => import("./childrenComps/HomeRecommendView");
const HomeFeature = () => import("./childrenComps/HomeFeature");

export default {
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: {
          page: 0,
          list: [],
        },
        new: {
          page: 0,
          list: [],
        },
        sell: {
          page: 0,
          list: [],
        },
      },
      currentType: "pop",
      tabOffsetTop: 0,
      isFixedTab: false,
      saveY: 0,
      itemImgListener: null,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  components: {
    NavBar, // 导航条
    Scroll,
    TabControl, // 商品类型切换
    GoodsList, // 商品列表组件
    HomeSwiper, // 轮播图组件
    HomeRecommendView, // 好物推荐组件
    HomeFeature, // 流行组件
  },
  methods: {
    /*
     * 事件监听相关的方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      // tabcontrol吸顶效果进行两个相同组件的通信
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },

    contentScroll(position) {
      // 判断backtop是否显示
      this.showBackTop(position);
      // 决定tabControl是否显示
      this.isFixedTab = -position.y > this.tabOffsetTop;
    },
    // 上拉加载更多
    loadMore() {
      // 获取更多所选择的类型的商品信息
      this.getHomeGoodsData(this.currentType);
      // 重新加载高度 避免卡顿
      this.$refs.scroll.refresh();
    },
    imageLoad() {
      // 获取tabControl组件的offsetTop的值
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },

    /*
     * 网络请求相关的方法
     */
    getHomeGoodsData(type) {
      // 获取页码
      const page = this.goods[type].page + 1;
      // 发送获取数据请求
      getGoodsData(type, page).then((res) => {
        // 获取数据后赋值到存放goods的list数组中
        this.goods[type].list.push(...res.data.data.list);
        // 将页面数+1
        this.goods[type].page += 1;
        // 上拉加载动作结束, 触发下一次的上拉件。
        this.$refs.scroll && this.$refs.scroll.finishPullUp();
      });
    },
  },
  // 声明生命周期钩子函数created
  created() {
    getMultipdata().then((res) => {
      // 获取banner的数据
      this.banners = res.data.data.banner.list;
      // 获取recommends的数据
      this.recommends = res.data.data.recommend.list;
    });
    // 获取每种类型的商品信息数据
    this.getHomeGoodsData("pop");
    this.getHomeGoodsData("new");
    this.getHomeGoodsData("sell");
  },
  activated() {
    this.$nextTick(() => {
      // 首页处于活跃状态下开启轮播图定时器
      this.$refs.homeSwiper && this.$refs.homeSwiper.startTimer();
    });
  },
  deactivated() {
    // 保存离开home时的滑动长度y
    this.saveY = this.$refs.scroll.getScrollY();
    // 首页处于不活跃状态下关闭轮播图定时器
    this.$nextTick(() => {
      // 首页处于活跃状态下开启轮播图定时器
      this.$refs.homeSwiper && this.$refs.homeSwiper.stopTimer();
    });
  },
  // 混入
  mixins: [backTopMixin],
};
</script>
<style scoped>
#home {
  position: relative;
  height: 100vh;
}
.home-nav {
  background: linear-gradient(270deg, #ff6687, #ff8198);
  color: #fff;
  box-shadow: 0px 1px 1px rgba(100, 100, 100, 0.1);
}

.tab-control {
  position: relative;
  background-color: #fff;
  z-index: 999;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
