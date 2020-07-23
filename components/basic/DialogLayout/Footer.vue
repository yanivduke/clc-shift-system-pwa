<template>
  <div class="dialog-footer">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'BasicDialogFooter',
}
</script>
<style lang="scss" scoped>
.dialog-footer {
  padding: 16px 24px;
  @include size(100%, auto);
  @include display-flex(flex-end);
  // border-top: 1px solid var(--line);
}
</style>
