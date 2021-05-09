<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="textActive"><slot name="item-text"></slot></div>
  </div>
</template>
<script>
export default {
  props: {
    path: String,
    textColor: {
      type: String,
      default: 'deeppink'
    }
  },
  data () {
    return {}
  },
  computed: {
    isActive () {
      // 判断现在的路由所对应的路径是否和组件的路径 prop一致 来决定isActive的布尔值
      return this.$route.path.indexOf(this.path) !== -1
    },
    textActive () {
      return this.isActive ? { color: this.textColor } : {}
    }
  },
  methods: {
    itemClick () {
      if (this.path !== this.$route.path) {
        this.$router.push(this.path)
      }
    }
  }
}
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
}
.tab-bar-item img {
  width: 23px;
  height: 23px;
  vertical-align: middle;
  margin-top: 5px;
  margin-bottom: 2px;
}
</style>
