<template>
  <v-tabs
    v-model="active"
    :background-color="backgroundColor"
    class="tab"
    dark
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
      default: 'bg_dark',
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
