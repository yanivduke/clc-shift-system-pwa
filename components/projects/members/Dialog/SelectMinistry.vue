<template>
  <div class="add-mamber-dialog__ministries">
    <dialog-card
      v-for="item in ministries"
      :key="item.id"
      class="ministry-list"
      :title="item.title"
      :body="item.body"
      :leader="item.leader"
      @click="filterServices"
    />
  </div>
</template>

<script>
import DialogCard from '@/components/basic/Dialog/Card'

export default {
  name: 'SelectMinistry',
  components: {
    DialogCard,
  },
  props: {
    ministries: {
      type: Array,
      required: true,
    },
  },
  methods: {
    filterServices(title) {
      const selected = this.ministries.find(
        (ministry) => ministry.title === title,
      )
      console.log(selected)

      const currentData = {
        services: selected.services,
        ministry: {
          id: selected.id,
          title: selected.title,
          leader: selected.leader,
        },
      }

      console.log(currentData)
      this.$emit('update:services', currentData)
    },
  },
}
</script>

<style lang="scss">
.add-mamber-dialog__ministries {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .ministry-list {
    margin-top: 15px;
    /* 如果最後一行是3个元素 */
    &:last-child:nth-child(4n - 1) {
      margin-right: calc(24% + 4% / 3);
    }
    /* 如果最後一行是2个元素 */
    &:last-child:nth-child(4n - 2) {
      margin-right: calc(48% + 8% / 3);
    }
  }
}
</style>
