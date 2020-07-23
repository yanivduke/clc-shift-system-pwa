<template>
  <v-data-table
    class="common-table"
    :headers="columns"
    :items="data"
    :search="search"
    :options.sync="theOptions"
    hide-default-footer
    :dark="isDark"
    @page-count="$emit('pageCount', $event)"
  />
</template>

<script>
export default {
  name: 'CommonTable',
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
    search: {
      type: String,
      default: '',
    },
    // page: {
    //   type: Number,
    //   default: 1,
    // },
    // itemsPerPage: {
    //   type: Number,
    //   default: 0,
    // },
    options: {
      type: Object,
      default: () => ({
        page: 1,
        itemsPerPage: 20,
      }),
    },
    isDark: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      theOptions: this.options,
    }
  },
}
</script>

<style lang="scss">
.common-table.theme--dark.v-data-table {
  background-color: unset;
}
</style>
