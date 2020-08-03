<template>
  <div class="add-mamber-dialog__userother">
    <div class="dialog_form">
      <v-container>
        <common-date-picker
          label="Birthday"
          :is-birthday="true"
          @save="(date) => (birthday = date)"
        />
        <div>
          <basic-text tag="h6" color="text-secondary">
            Available Date
          </basic-text>
          <v-row justify="space-around">
            <v-checkbox
              v-model="availableDatesValue"
              label="六"
              value="六"
            ></v-checkbox>
            <v-checkbox
              v-model="availableDatesValue"
              label="日"
              value="日"
            ></v-checkbox>
          </v-row>
        </div>
        <basic-text tag="h6" color="text-secondary">
          note
        </basic-text>
        <v-textarea
          v-model="noteValue"
          name="note"
          filled
          auto-grow
          color="#f4cf4f"
          placeholder="可以留下一些備註在這裡"
        ></v-textarea>

        <common-button
          type="primary"
          size="large"
          style="padding: 0 10px;"
          :outlined="true"
          :dark="true"
          @click="apply"
        >
          NEXT
        </common-button>
      </v-container>
    </div>
  </div>
</template>
<script>
// other: {
//   status: 1, // 第一次新增狀態都預設為 1
//   note: '',
//   birthday: '',
//   availableTime: '',
// },
import { mapGetters } from 'vuex'

import { MUTATION_ADD_MEMBER } from '@/constants/gql/auth'

export default {
  props: {
    allData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      noteValue: '',
      birthday: '',
      availableDatesValue: [],
      availableDates: ['六', '日'],
    }
  },
  computed: {
    ...mapGetters({
      token: 'auth/token',
    }),
  },
  methods: {
    // TODO: add member error
    async apply() {
      try {
        await this.$apollo.mutate({
          mutation: MUTATION_ADD_MEMBER,
          variables: {
            addMemberInput: {
              email: this.allData.basic.email,
              password: '123456',
              name: this.allData.basic.name,
              lineId: this.allData.basic.lineId,
              status: this.noteValue !== '' ? 2 : 1,
              note: this.noteValue,
              birthday: this.birthday.split('-').join(''),
              mobile: this.allData.basic.mobile,
              servicesIds: this.allData.service.map((item) => Number(item.id)),
              availableTime: this.availableDatesValue,
            },
          },
          update: (cache, { data }) => {
            // Read the data from our cache for this query.
            // eslint-disable-next-line
              console.log('add user:>>> '+ data.addMember.name)
            this.$emit('finish', data.addMember.name)
          },
        })
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.dialog_form__item-avatar {
  color: var(--white);
  background-color: var(--primary);
  margin-right: 10px;
}
</style>
