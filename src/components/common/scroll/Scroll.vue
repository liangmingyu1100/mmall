<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import ObserveDOM from "@better-scroll/observe-dom";
import ObserveImage from "@better-scroll/observe-image";
import MouseWheel from "@better-scroll/mouse-wheel";

// 安装插件
BScroll.use(Pullup);
BScroll.use(ObserveDOM);
BScroll.use(ObserveImage);
BScroll.use(MouseWheel);

export default {
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    // 实现返回顶部功能
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    // 实现重新计算wrapper的高度scrollerHight
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    //
    // 上拉加载动作结束, 触发下一次的上拉件
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    getScrollY() {
      return this.scroll.y;
    },
  },
  mounted() {
    // 这时候获取元素不用DOM操作获取 避免命名冲突
    // 使用vue 给我们提供的$refs
    //  this.$nextTick 是一个异步函数，为了确保 DOM 已经渲染
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        observeDOM: true,
        mouseWheel: true,
        probeType: this.probeType,
        click: true,
        pullUpLoad: this.pullUpLoad,
      });
      this.scroll.on("scroll", (position) => {
        this.$emit("scroll", position);
      });
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    });
  },
};
</script>
<style scoped>
</style>
