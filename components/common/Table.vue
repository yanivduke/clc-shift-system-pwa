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
      selectedItem: null,
      canClick: true,
      // theOptions: this.options,
    }
  },
  computed: {
    // tabledata() {
    //   const newdata = delete this.data.__typename
    //   console.log(newdata)
    //   return newdata
    // },
  },
  methods: {
    // enterHandler(e) {
    //   const parent = e.target.parentNode

    //   if (parent.nodeName !== 'TBODY') return

    //   if (this.canClick) {
    //     parent.childNodes.forEach((node) => {
    //       const childWidth = node.clientWidth
    //       node.style.width = `${childWidth}px`
    //     })
    //     const width = parent.offsetWidth
    //     console.log(width)
    //     parent.style.display = 'block'
    //     parent.style.width = `${width}px`
    //     parent.style.height = '50px'
    //     parent.style.boxShadow = `0px 2px 8px var(--dark-shadow)`
    //     parent.style.backgroundColor = `var(--primary-dark)`
    //     parent.style.border = `1px solid var(--accent)`
    //   } else {
    //     parent.childNodes.forEach((node) => {
    //       node.style.color = 'var(--primary)'
    //     })
    //   }
    // },
    // leaveHandler(e) {
    //   const parent = e.target.parentNode
    //   parent.removeAttribute('style')
    //   parent.childNodes.forEach((node) => {
    //     node.removeAttribute('style')
    //   })
    // },
    // selectItem(item) {
    //   console.log('Item selected: ' + item.name)
    //   this.selectedItem = item
    // },
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
