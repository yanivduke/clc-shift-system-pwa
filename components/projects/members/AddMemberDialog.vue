<template>
  <basic-dialog-layout
    :visible.sync="visibleBridge"
    :title="title"
    direction="fade"
    class="add-mamber-dialog"
    @after-leave="$emit('after-leave')"
  >
    <basic-layout type="body">
      <div class="add-mamber-dialog-zone">
        <basic-text tag="h6" color="text-secondary">
          {{ currentBody }}
        </basic-text>
        <component
          :is="currentComponent"
          v-bind="currentProperties"
          @update:services="(data) => updateCurrent(data, 'services')"
          @update:userData="(data) => updateCurrent(data, 'userData')"
          @update:other="(data) => updateCurrent(data, 'other')"
          @finish="(name) => finish(name)"
        />
      </div>
    </basic-layout>
  </basic-dialog-layout>
</template>

<script>
// import required from 'vuelidate/lib/validators/required'
import SelectMinistry from '@/components/projects/members/Dialog/SelectMinistry'
import SelectServices from '@/components/projects/members/Dialog/SelectServices'
import MemberInfoForm from '@/components/projects/members/Dialog/MemberInfoForm'
import MemberOtherForm from '@/components/projects/members/Dialog/MemberOtherForm'

export default {
  name: 'AddMemberDialog',
  components: {
    SelectMinistry,
    SelectServices,
    MemberInfoForm,
    MemberOtherForm,
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
    ministries: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentComponent: 'SelectMinistry',
      currentData: this.ministries,
      currentBody: 'Please select a ministry',
    }
  },
  computed: {
    currentProperties() {
      const name = this.currentComponent
      if (name === 'SelectMinistry') {
        return {
          ministries: this.currentData,
        }
      } else if (name === 'SelectServices') {
        return {
          servicesData: this.currentData,
        }
      } else if (name === 'MemberInfoForm') {
        return {
          userData: this.currentData,
          originData: this.ministries, // 方便在第三步驟還能改事工和服事
        }
      } else if (name === 'MemberOtherForm') {
        return {
          allData: this.currentData,
        }
      } else {
        return {}
      }
    },
    visibleBridge: {
      get() {
        return this.visible
      },
      set(value) {
        this.$emit('close', value)
      },
    },
  },
  // validations: {
  //   form: {
  //     expno: { required },
  //   },
  // },
  methods: {
    finish(name) {
      this.visibleBridge = false
      this.$emit('finish', name)
    },
    updateCurrent(data, name) {
      switch (name) {
        case 'services':
          this.currentData = data
          this.currentBody = 'Please select a service'
          this.currentComponent = 'SelectServices'
          break
        case 'userData':
          this.currentData = data
          this.currentBody = 'Please fill in member form'
          this.currentComponent = 'MemberInfoForm'
          break

        case 'other':
          this.currentData = data
          this.currentBody = 'the other to remark'
          this.currentComponent = 'MemberOtherForm'
          break
        default:
          break
      }
    },
    apply() {
      // validate 驗證
      if (this.checkForm()) {
        return false
      }
      this.$emit('getPreviousCase', this.form.expno)
    },
    cancel() {
      this.visibleBridge = false
    },
    checkForm() {
      this.$v.form.$touch()
      return this.$v.form.$invalid
    },
  },
}
</script>
<style lang="scss">
.add-mamber-dialog {
  &-zone {
    width: 100%;
    height: 100%;
  }
}
</style>
