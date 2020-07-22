<template>
  <v-tabs
    v-model="active"
    :background-color="backgroundColor"
    color="#008088"
    class="tab"
    :centered="centered"
    :grow="grow"
    :icons-and-text="icons"
  >
    <v-tabs-slider></v-tabs-slider>

    <v-tab v-for="tab in tabs" :key="tab.name">
      {{ tab.label }}
      <v-icon v-if="icons">mdi-phone</v-icon>
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
  name: 'CommonTabs',
  props: {
    backgroundColor: {
      type: String,
      default: '#0e1724',
    },
    centered: {
      type: Boolean,
      default: false,
    },
    grow: {
      type: Boolean,
      default: false,
    },
    icons: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [String, Number],
      default: '',
    },
    tabs: {
      type: Array,
      default() {
        return []
      },
    },
  },
  computed: {
    active: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
  methods: {},
}
</script>

<style lang="scss">
.tab {
  background-color: var(--bg-dark);
}
</style>
