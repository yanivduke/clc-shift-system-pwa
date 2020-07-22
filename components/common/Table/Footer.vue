<template>
  <div class="table-footer">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.table-footer {
  padding: 16px 24px;
  @include size(100%, auto);
  @include display-flex(center);
  // border-top: 1px solid var(--line);
}
</style>
