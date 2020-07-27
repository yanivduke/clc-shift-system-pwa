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
    @click:row="$emit('click:row', $event)"
  >
    <template
      v-for="(slotName, index) in slotKeys"
      v-slot:[`item.${slotName}`]="{ item }"
    >
      <slot :name="slotName" :item="item" :index="index"> </slot>
    </template>
    <!-- <template
      v-for="(config, index) in headers"
      v-slot:[`item.${config.slot}`]="{ item }"
    >
      <slot :name="config.slot" :item="item" :index="index"> </slot>
    </template> -->
    <!-- <template v-slot:body="{ items }">
      <tbody>
        <tr
          v-for="item in items"
          :key="item.id"
          :class="{ selectedRow: item === selectedItem }"
          @click="selectItem(item)"
          @mouseenter="enterHandler"
          @mouseleave="leaveHandler"
        >
          <td v-for="(td, i) in item" :key="i">
            <template>
              {{ td }}
            </template>
          </td>
        </tr>
      </tbody>
    </template> -->
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
      selectedItem: null,
      canClick: true,
      // theOptions: this.options,
    }
  },
  computed: {
    slotKeys() {
      // 使用this.$scopedSlots 即可取得從外層 scope slot 近來的所有 slot，因此可以將其轉為 slot name array
      console.log(this.$scopedSlots)
      return Object.keys(this.$scopedSlots)
    },
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
.v-data-table tbody tr:hover:not(.v-data-table__expanded__content) {
  background: var(--primary-dark) !important;
}
</style>
