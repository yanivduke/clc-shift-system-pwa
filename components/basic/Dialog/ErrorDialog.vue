<template>
  <BasicDialog
    :visible="visible"
    :title="dialogHeader"
    :width="452"
    direction="fade"
    class="error-dialog"
    @update:visible="handleClick"
  >
    <BasicLayout type="center">
      {{ dialogData }}
    </BasicLayout>
    <BasicLayout slot="footer" class="error-dialog-footer">
      <BasicButton
        class="error-dialog-footer-ok"
        size="md"
        @click="handleClick"
      >
        OK
      </BasicButton>
    </BasicLayout>
  </BasicDialog>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ErrorDialog',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters({
      dialogData: 'dialog/dialogData',
      dialogHeader: 'dialog/dialogHeader',
    }),
  },
  methods: {
    ...mapActions({
      setDialogShow: 'dialog/setDialogShow',
    }),
    handleClick() {
      this.setDialogShow(false)
    },
  },
}
</script>

<style lang="scss" scoped>
.error-dialog {
}
</style>
