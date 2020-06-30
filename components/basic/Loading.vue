<style lang="scss" scoped>
.loading-zoon {
  @include size(100%, 100%);
  @include display-flex();
  .loading {
    @include size(80px);

    z-index: zindex('loading');
  }
}
</style>

<template>
  <BasicOverlay :visible="visible" @enter="openLoading" @appear="openLoading">
    <transition @leave="$emit('update:visible', false)">
      <div class="loading-zoon">
        <div ref="lavContainer" :style="style"></div>
      </div>
    </transition>
  </BasicOverlay>
</template>

<script>
import lottie from 'lottie-web'
import loadingData from '@/assets/images/static/loading.json'
import BasicOverlay from '@/components/basic/Overlay'

export default {
  components: {
    BasicOverlay,
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      // LoadingGif: require('@/assets/images/static/LoadingWhite.svg'),
      open: this.visible,
      style: {
        width: '300px',
        height: '300px',
        overflow: 'hidden',
        margin: '0 auto',
      },
    }
  },
  methods: {
    openLoading() {
      this.open = true
      lottie.loadAnimation({
        container: this.$refs.lavContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: loadingData,
        // animationData: loadingData,
      })
    },
  },
}
</script>
