<template>
  <transition name="fade" apper="apper" v-on="$listeners">
    <div v-if="visible" class="overlay" @click.self="$emit('click')">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'BasicOverlay',
  components: {},
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  watch: {},
  mounted() {
    document.body.appendChild(this.$el)
  },
  destroyed() {
    if (this.$el.parentNode) this.$el.parentNode.removeChild(this.$el)
  },
  methods: {},
}
</script>

<style lang="scss">
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: var(--mask);
  z-index: zindex('mask');
}
</style>
