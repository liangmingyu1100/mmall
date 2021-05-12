<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="tab-control-item"
      @click="tabClick(index)"
      :class="{ active: index === currentIndex }"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    titles: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    tabClick (index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  }
}
</script>
<style scoped>
.tab-control {
  display: flex;
  position: relative;
  top: -1px;
  text-align: center;
  background-color: #fff;
  height: 40px;
  line-height: 40px;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  padding: 2px 5px 2px;
  font-size: 14px;
}
.active span {
  color: var(--color-tint);
  border-bottom: 3px solid var(--color-tint);
}
</style>
