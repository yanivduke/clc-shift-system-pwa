<template>
  <div class="dialog-body" :data-is-full="isFull">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BasicDialogBody',
  props: {
    isFull: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.dialog-body {
  @include size(100%, auto);
  @include display-flex(flex-start, flex-start);
  @include custom-scroll();
  background-color: var(--bg-dark);
  flex-direction: column;
  padding: 0 22px 28px 22px;

  // &[data-is-full='true'] {
  //   // @include size(100%, calc(100vh - 136px));
  // }
}
</style>
