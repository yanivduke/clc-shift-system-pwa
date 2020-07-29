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
              :label="title.toUpperCase()"
              class="dialog_form__item"
              color="#f4cf4f"
              :single-line="true"
              :is-dark="true"
            />
          </template>
        </div>
        <common-button
          color="primary"
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
      memberBasic: {
        name: '',
        email: '',
        mobile: '',
        lineId: '',

        // other: {
        //   status: 1,
        //   note: '',
        //   birthday: '',
        //   availableTime: '',
        // },
      },
    }
  },
  computed: {
    isDisabled() {
      const keys = Object.keys(this.memberBasic)
      const current = this.memberBasic
      let flag = false
      for (let i = 0; i < keys.length; i++) {
        if (!current[keys[i]].trim()) {
          flag = true
          break
        }
      }
      // console.log(flag)
      return flag
    },
    ministryAll() {
      return this.originData.map((item) => item.title)
    },
    servicesAll() {
      const ministryTitle = this.ministryTitle
      const findByMinistry = this.originData.find(
        (item) => item.title === ministryTitle,
      )
      console.log('filter', findByMinistry)
      return findByMinistry.services.map((item) => item.title)
    },
  },
  methods: {
    next() {
      const memberInfo = {
        ministry: this.ministryTitle,
        service: this.serviceTitle,
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
