<template>
  <div class="navMenu" @mouseenter="toggleSidebar" @mouseleave="toggleSidebar">
    <div
      class="navMenu-zoon"
      :style="styleHandler"
      :class="!isExpandNavMenu ? 'isExpandNav' : ''"
    >
      <slot name="logo"></slot>
      <slot name="nav"></slot>
    </div>
  </div>
</template>

<script>
// import debounce from 'lodash/debounce'

export default {
  name: 'NavMenuLayout',
  props: {
    isExpand: {
      type: Boolean,
      default: false,
    },
    defaultWidth: {
      type: Number,
      default: 85,
    },
    expandWidth: {
      type: Number,
      default: 250,
    },
  },
  data() {
    return {
      isExpandNavMenu: this.isExpand,
      navMenuDefaultWidth: this.defaultWidth,
    }
  },
  computed: {
    styleHandler() {
      return {
        width: `${this.navMenuDefaultWidth}px`,
      }
    },
  },
  methods: {
    toggleSidebar() {
      if (!this.isExpand) {
        return
      }
      if (this.isExpandNavMenu) {
        this.navMenuDefaultWidth = this.expandWidth
        this.isExpandNavMenu = false
        this.pushContent(this.isExpand)
      } else {
        this.navMenuDefaultWidth = this.defaultWidth
        this.isExpandNavMenu = true
        this.pushContent(this.isExpand)
      }
    },
    pushContent(isExpand) {
      this.$emit('pushController', isExpand)
    },
  },
}
</script>

<style lang="scss" scoped>
.navMenu {
  height: 100%;
  width: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: zindex('menu');
  background-color: var(--bg);
  border-right: solid 1px var(--dark-shadow);
  box-shadow: 0px 4px 10px var(--dark-shadow);
}
.navMenu-zoon {
  // position: relative;
  height: 100%;
  transition: 0.5s;
  // overflow-x: hidden;
  white-space: nowrap;
}

@media screen and (max-height: 450px) {
  .navMenu-zoon {
    padding-top: 15px;
  }
}
</style>
