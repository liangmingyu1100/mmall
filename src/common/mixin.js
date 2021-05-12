const BackTop = () => import('components/content/backtop/BackTop');
export const swiperImageListenermixin = {
  data() {
    return {
      isImageLoad: false
    }
  },
  methods: {
    imageLoad() {
      if (!this.isImageLoad) {
        this.$refs.swiper && this.$refs.swiper.handleDom()
        this.$emit('imageLoad')
        this.isImageLoad = true
      }
    },
  }
}
export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    showBackTop(position) {
      this.isShowBackTop = -position.y > 1000
    }
  }
}

