<template>
  <div class="add-mamber-dialog__userinfo">
    <div class="dialog_form">
      <dialog-message
        class="member-detail-message"
        title="事工"
        :content="ministryTitle"
      />
      <dialog-message
        class="member-detail-message"
        title="服事"
        :content="serviceTitle"
      />
      <common-select :value="ministryTitle" :items="ministryAll" label="事工" />
      <common-select :value="serviceTitle" :items="servicesAll" label="服事" />
    </div>
  </div>
</template>

<script>
import DialogMessage from '@/components/basic/Dialog/Message'

export default {
  name: 'MemberInfoForm',
  components: { DialogMessage },
  props: {
    userData: {
      type: Object,
      required: true,
    },
    originData: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      ministryTitle: this.userData.ministry.title,
      serviceTitle: this.userData.service.title,
    }
  },
  computed: {
    ministryAll() {
      return this.originData.map((item) => item.title)
    },

    servicesAll() {
      const ministryTitle = this.ministryTitle
      console.log(this.serviceTitle)
      console.log(this.originData)

      const filterByMinistry = this.originData.filter(
        (item) => item.title === ministryTitle,
      )
      console.log('filter', filterByMinistry)

      return filterByMinistry.services
    },
  },
  mounted() {
    // console.log(this.userData)
  },
  methods: {},
}
</script>

<style lang="scss">
.add-mamber-dialog__userinfo {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .dialog_form {
    width: 100%;
    height: 100%;
    margin-top: 15px;
  }
}
</style>
