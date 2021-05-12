<template>
  <div id="category">
    <scroll class="category-side-bar">
      <category-side-bar
        :categories="categories"
        @sideBarItemClick="sideBarItemClick"
      />
    </scroll>
    <scroll class="category-content">
      <category-content :subCategories="subCategories" />
    </scroll>
  </div>
</template>

<script>
import { getCategoryData, getSubCategoryData } from "network/category.js";
import CategorySideBar from "./childrenComps/CategorySideBar";
import CategoryContent from "./childrenComps/CategoryContent.vue";

const Scroll = () => import("components/common/scroll/Scroll");

export default {
  data() {
    return {
      categories: [], //存放左侧列表数据
      subCategories: [],
    };
  },
  components: {
    CategorySideBar,
    Scroll,
    CategoryContent,
  },
  created() {
    this.getCategoryData();
  },
  methods: {
    /*
      事件监听方法
    */
    sideBarItemClick(index) {
      this.getSubCategoryData(index);
    },
    /*
      网络请求相关方法
   */
    // 获取左边列表的数据
    getCategoryData() {
      getCategoryData().then((res) => {
        // console.log(res);
        this.categories = res.data.data.category.list;
        this.getSubCategoryData(0);
      });
    },
    getSubCategoryData(index) {
      // console.log(this.categories[index]);
      let maitKey = this.categories[index].maitKey;
      getSubCategoryData(maitKey).then((res) => {
        // console.log(res);
        this.subCategories = res.data.data.list;
      });
    },
  },
};
</script>
<style scoped>
#category {
  height: 100vh;
  position: relative;
}
.category-side-bar {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 49px;
  overflow: hidden;
}
.category-content {
  position: absolute;
  top: 0;
  right: 0;
  left: 100px;
  bottom: 49px;
  overflow: hidden;
}
</style>
