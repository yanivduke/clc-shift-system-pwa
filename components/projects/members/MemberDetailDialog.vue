<template>
  <basic-dialog-layout
    :visible.sync="visibleBridge"
    :title="form.name"
    :width="602"
    direction="fade"
    class="member-detail-dialog"
    @after-leave="$emit('after-leave')"
  >
    <basic-layout type="body">
      <dialog-status-tag
        class="member-detail-message"
        title="狀態"
        :content="form.status"
      />
      <dialog-dialog-chip
        class="member-detail-message"
        title="所有服事"
        :content="form.services"
      />
      <dialog-dialog-chip
        class="member-detail-message"
        title="參與事工"
        :content="form.ministries"
      />
      <dialog-dialog-chip
        class="member-detail-message"
        title="能安排服事的時間"
        :content="form.availableTime"
      />
      <dialog-message
        class="member-detail-message"
        title="備註"
        :content="form.note"
      />
    </basic-layout>
  </basic-dialog-layout>
</template>

<script>
// import required from 'vuelidate/lib/validators/required'
import DialogMessage from '@/components/basic/Dialog/Message'
import DialogStatusTag from '@/components/basic/Dialog/StatusTag'
import DialogDialogChip from '@/components/basic/Dialog/DialogChip'
export default {
  name: 'MemberDetailDialog',
  components: {
    DialogMessage,
    DialogStatusTag,
    DialogDialogChip,
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    config: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {}
  },
  // validations: {
  //   form: {
  //     expno: { required },
  //   },
  // },
  computed: {
    form() {
      return {
        id: this.config.id,
        name: this.config.name,
        status: this.config.status,
        note: this.config.note,
        services: this.config.services,
        ministries: this.config.ministries,
        availableTime: this.config.availableTime,
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
  mounted() {},
  destroyed() {
    if (this.$el.parentNode) this.$el.parentNode.removeChild(this.$el)
  },
  methods: {
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
.member-detail-dialog {
  &__input {
    margin-top: 40px;
    width: 100%;
    .title {
      margin-bottom: 8px;
    }
    .input {
      .input__text {
        height: 40px;
        // height: auto;
      }
      .input__suffix {
        right: 13px;
        cursor: pointer;
        .cancelBtn {
          display: inline-block;
          @include size(10px, 10px);
          background-image: url('~assets/images/icons/CancelGrey.svg');
          &:hover {
            background-image: url('~assets/images/icons/CancelWhite.svg');
          }
        }
      }
    }
    .input.isNotEmpty {
      .input__text {
        border-color: var(--primary);
      }
    }
  }
  .footer {
    display: flex;
    justify-content: space-between;
    .cancel-button {
      background-color: var(--white) !important;
      border: 1px solid var(--primary);
      color: var(--primary);
      &:hover {
        background-color: var(--hover-white) !important;
      }
    }
  }
}
</style>
