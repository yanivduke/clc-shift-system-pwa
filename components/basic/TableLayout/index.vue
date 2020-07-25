<template>
  <div class="table">
    <table-header>
      <div class="table-header"></div>
    </table-header>
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
  name: 'BasicTableLayout',
  components: {
    TableHeader,
    TableBody,
    TableFooter,
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
  margin-top: 28px;
  overflow: hidden;
  background-color: var(--bg);
  border: solid 1px var(--dark-shadow);
  border-radius: 4px;
  box-shadow: 0 4px 10px 0 var(--dark-shadow);
  &-header {
    width: 100%;
    height: 35px;
    @include custom-gradient();
  }
}
</style>
