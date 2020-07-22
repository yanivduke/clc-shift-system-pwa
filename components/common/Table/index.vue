<template>
  <div class="table">
    <template>
      <slot name="header">
        <table-header :title="title" />
      </slot>
    </template>
    <table-body>
      <slot></slot>
    </table-body>
    <table-footer v-if="isHaveFooter">
      <slot name="footer"></slot>
    </table-footer>
  </div>
</template>

<script>
import TableHeader from './Header'
import TableBody from './Body'
import TableFooter from './Footer'
export default {
  components: {
    TableHeader,
    TableBody,
    TableFooter,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  computed: {
    isHaveFooter() {
      return !!this.$slots.footer || !!this.$scopedSlots.footer
    },
  },
}
</script>

<style lang="scss">
.table {
  height: 100%;
}
</style>
