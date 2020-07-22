<template>
  <v-navigation-drawer
    v-model="navConfig.layout.drawer"
    v-resize="navResize"
    class="nav-menu"
    :data-is-nav="true"
    :color="navConfig.layout.color"
    :expand-on-hover="navConfig.layout.expandOnHover"
    :mini-variant="navConfig.layout.miniVariant"
    :right="navConfig.layout.right"
    :permanent="navConfig.layout.permanent"
    :absolute="navConfig.layout.absolute"
    :dark="navConfig.layout.dark"
    :mini-variant-width="navConfig.layout.minWidth"
    :width="navConfig.layout.width"
    floating
  >
    <v-list dense nav class="nav-menu-zone">
      <v-list-item
        v-for="(item, i) in navConfig.items"
        :key="i"
        class="nav-menu-item"
        :to="item.to"
        :color="item.color"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavMenu',
  component: {},
  props: {
    navConfig: {
      type: Object,
      default: () => {
        return {}
      },
      required: true,
    },
  },
  data() {
    return {}
  },
  methods: {
    navResize() {
      const attr = 'data-is-nav'
      const width = document.querySelector(`[${attr}]`)
      this.$emit('resize', width.style.width)
    },
  },
}
</script>

<style lang="scss">
.nav-menu {
  width: 100%;
  &-zone {
    padding-top: 74px;
  }
  &-item {
    margin-bottom: 12px !important;
  }
}
</style>
