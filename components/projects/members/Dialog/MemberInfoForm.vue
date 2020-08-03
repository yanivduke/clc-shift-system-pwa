<template>
  <div class="add-mamber-dialog__userinfo">
    <div class="dialog_form">
      <v-container>
        <common-select
          v-model="ministryTitle"
          label="Ministry"
          class="dialog_form__item"
          :items="ministryAll"
        />
        <common-select
          v-model="serviceTitle"
          label="Services"
          class="dialog_form__item"
          :items="servicesAll"
          :chips="true"
          :multiple="true"
        >
          <template v-slot:selection="{ data }">
            <v-chip
              :key="JSON.stringify(data.item)"
              v-bind="data.attrs"
              :input-value="data.selected"
              :disabled="data.disabled"
              dark
              @click:close="data.parent.selectItem(data.item)"
            >
              <v-avatar
                class="dialog_form__item-avatar"
                left
                dark
                v-text="data.item.slice(0, 1).toUpperCase()"
              ></v-avatar>
              {{ data.item }}
            </v-chip>
          </template>
        </common-select>
        <div class="dialog_form__memberInfo">
          <template v-for="title in Object.keys(memberBasic)">
            <common-text-field
              :key="title"
              v-model="memberBasic[title]"
              append-icon="mdi-magnify"
              class="dialog_form__item"
              color="#f4cf4f"
              :rules="
                title === 'email'
                  ? [rules.required, rules.email]
                  : [rules.required]
              "
              :label="title.toUpperCase()"
              :single-line="true"
              :is-dark="true"
            />
          </template>
        </div>
        <common-button
          type="primary"
          size="large"
          style="padding: 0 10px;"
          :outlined="true"
          :dark="true"
          :disabled="isDisabled"
          @click="next"
        >
          NEXT
        </common-button>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MemberInfoForm',
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
      serviceTitle: [this.userData.service.title],
      // serviceIds: [this.userData.service.id],
      memberBasic: {
        name: '',
        email: '',
        mobile: '',
        lineId: '',
      },
      rules: {
        required: (value) => !!value || 'Required.',
        // counter: (value) => value.length <= 20 || 'Max 20 characters',
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      },
    }
  },
  computed: {
    isDisabled() {
      // 每個欄位都有輸入值才開啟下一步按鈕
      const keys = Object.keys(this.memberBasic)
      const current = this.memberBasic
      let flag = false
      for (let i = 0; i < keys.length; i++) {
        if (!current[keys[i]].trim()) {
          flag = true
          break
        }
      }
      return flag
    },
    ministryAll() {
      return this.originData.map((item) => item.title)
    },
    servicesAll() {
      // 找到目前所選的事工，有哪些服事項目
      const ministryTitle = this.ministryTitle
      const findByMinistry = this.originData.find(
        (item) => item.title === ministryTitle,
      )
      return findByMinistry.services.map((item) => item.title)
    },
    selectMinistry() {
      // 找到選擇的事工 id, title
      const ministryTitle = this.ministryTitle
      const findByMinistry = this.originData.find(
        (item) => item.title === ministryTitle,
      )
      return { id: findByMinistry.id, title: findByMinistry.title }
    },
    selectServices() {
      // 找到選擇的服事項目們 id, title
      const ministryTitle = this.ministryTitle
      const findByMinistry = this.originData.find(
        (item) => item.title === ministryTitle,
      )
      const servicesArr = []
      for (let i = 0; i < this.serviceTitle.length; i++) {
        servicesArr.push(
          findByMinistry.services.find(
            (item) => item.title === this.serviceTitle[i],
          ),
        )
      }
      return servicesArr
    },
  },
  methods: {
    next() {
      const memberInfo = {
        ministry: this.selectMinistry,
        service: this.selectServices,
        basic: this.memberBasic,
      }
      this.$emit('update:other', memberInfo)
    },
  },
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

    &__memberInfo {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .dialog_form__item {
        width: 48%;
        flex: unset;
      }
    }
    &__item {
      width: 100%;
      margin-top: 15px;
      margin-bottom: 20px;
      /* 如果最後一行是3个元素 */
      &:last-child:nth-child(4n - 1) {
        margin-right: calc(24% + 4% / 3);
      }
      /* 如果最後一行是2个元素 */
      &:last-child:nth-child(4n - 2) {
        margin-right: calc(48% + 8% / 3);
      }
      &-avatar {
        color: var(--white);
        background-color: var(--primary);
        margin-right: 10px;
      }
    }
  }
}
</style>
