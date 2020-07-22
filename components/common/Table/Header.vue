<template>
  <div class="table-header">
    <basic-layout type="header" class="table-header__zone">
      <slot />
    </basic-layout>
  </div>
</template>

<script>
export default {
  name: 'TableHeader',
  props: {},
}
</script>

<style lang="scss" scoped>
.table {
  &-header {
    margin: 0;
    // padding: 0 24px 0 24px;
    // background-color: var(--primary);
    // background-color: var(--white);
    @include size(100%, auto);
  }
  &-header__zone {
    @include display-flex(space-between);
  }
  &-title {
    // padding: 32px 0 32px 0;
  }
}
</style>
