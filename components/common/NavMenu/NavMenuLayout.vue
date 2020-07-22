<template>
  <v-navigation-drawer
    v-model="config.drawer"
    class="nav-menu__layout"
    :color="config.color"
    :expand-on-hover="config.expandOnHover"
    :mini-variant="config.miniVariant"
    :right="config.right"
    :permanent="config.permanent"
    :absolute="config.absolute"
    :dark="config.dark"
    :width="config.width"
  >
    <!-- <slot name="prepend" />
    <slot name="Logo" />
    <slot name="items" /> -->
    <slot />
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavMenuLayout',
  props: {
    config: {
      type: Object,
      default: () => {
        return {}
      },
      required: true,
    },
  },
  data() {},
}
</script>
