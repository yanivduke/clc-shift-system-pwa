<template>
  <v-pagination
    v-model="currentPage"
    :length="length"
    :color="color"
    :dark="isDark"
  />
</template>

<script>
export default {
  name: 'CommonPagination',
  props: {
    page: {
      type: Number,
      default: 0,
    },
    length: {
      type: Number,
      default: 0,
    },
    color: {
      type: String,
      default: '#008088',
    },
    isDark: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    currentPage: {
      get() {
        return this.page
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
}
</script>

<style lang="scss">
.theme--dark.v-pagination .v-pagination__item,
.theme--dark.v-pagination .v-pagination__navigation {
  background-color: unset;
  color: var(--text);
  border: 1px solid var(--text);
  outline: none;
}
.theme--dark.v-pagination .v-pagination__item--active {
  color: var(--white);
}
.v-pagination__navigation .v-icon {
  color: var(--text);
}
</style>
