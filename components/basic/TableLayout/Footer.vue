<template>
  <div class="table-footer">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'BasicTableFooter',
}
</script>
<style lang="scss" scoped>
.table-footer {
  @include size(100%, auto);
  @include display-flex(center);
  // border-top: 1px solid var(--line);
}
</style>
