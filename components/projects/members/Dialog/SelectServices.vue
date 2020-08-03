<template>
  <div class="add-mamber-dialog__servises">
    <dialog-card
      v-for="item in services"
      :key="item.id"
      class="services-list"
      :title="item.title"
      :body="item.body"
      :leader="item.leader"
      @click="selectService"
    />
  </div>
</template>

<script>
import DialogCard from '@/components/basic/Dialog/Card'

export default {
  name: 'SelectServices',
  components: {
    DialogCard,
  },
  props: {
    servicesData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      services: this.servicesData.services,
      ministry: this.servicesData.ministry,
    }
  },
  methods: {
    selectService(title) {
      const currentService = this.services.find(
        (service) => service.title === title,
      )
      const currentUserData = {
        service: currentService,
        ministry: this.ministry,
      }
      console.log(currentUserData)
      this.$emit('update:userData', currentUserData)
    },
  },
}
</script>

<style lang="scss">
.add-mamber-dialog__servises {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .services-list {
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
