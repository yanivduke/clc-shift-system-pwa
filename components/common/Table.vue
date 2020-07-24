<template>
  <v-data-table
    class="common-table"
    hide-default-footer
    :headers="headers"
    :items="data"
    :search="search"
    :page.sync="page"
    :items-per-page="itemsPerPage"
    :dark="isDark"
    @page-count="$emit('pageCount', $event)"
  >
    <template
      v-for="(config, index) in headers"
      v-slot:[`item.${config.slot}`]="{ item }"
    >
      <slot :name="config.slot" :item="item" :index="index"> </slot>
    </template>
  </v-data-table>
</template>

<script>
// import MinistryIcon from './Table/MinistryIcon'
export default {
  name: 'CommonTable',
  components: {
    // MinistryIcon,
  },
  props: {
    headers: {
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
    page: {
      type: Number,
      default: 1,
    },
    itemsPerPage: {
      type: Number,
      default: 0,
    },
    // options: {
    //   type: Object,
    //   default: () => ({
    //     page: 1,
    //     itemsPerPage: 0,
    //   }),
    // },
    isDark: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      // theOptions: this.options,
    }
  },
  methods: {
    getColor(calories) {
      if (calories === 'Media') return 'red'
      else if (calories === 'Worship') return 'orange'
      else return 'green'
    },
  },
}
</script>

<style lang="scss">
.common-table.theme--dark.v-data-table {
  background-color: unset;
}
</style>
